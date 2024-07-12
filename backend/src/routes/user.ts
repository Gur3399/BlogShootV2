import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {decode, sign, verify} from "hono/jwt"
import {signInSchema, signUpSchema }from "@singhtech/schema-common-blogshoot"


type Bindings = {
  DATABASE_URL: string,
  JWT_SECRET: string,
}

export const userRouter = new Hono<{
  Bindings:Bindings
}>()

userRouter.post("/signup", async (c)=>{
   //initialize prisma with accelerate
   console.log("debug called");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
  
    const body = await c.req.json();
    const success = signUpSchema.safeParse(body);
    console.log(body);
    if(!success){
      c.status(411);
      return c.json({message:"parsing failed at zod"});
    }
    
  try{
    const nameD = body.name === "null" ? "Anonymous":body.name;
    console.log(nameD);
    const user =  await prisma.user.create({
      data:{
        name:nameD,
        email: body.email,
        password: body.password,
      }
   });
   const token = await sign({id:user.id},c.env.JWT_SECRET);
   console.log(token+""+user);
   return c.json({jwt:token})
   
  
  }
  catch(e){
    c.status(411);
        return c.json({
          msg:"userAlready exists!"});  
  }
   
  
   
  
  
    
  })
userRouter.post("/signin", async(c)=>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
     const {success} =signInSchema.safeParse(body);
     if(!success)
     {
      c.status(411);
      return c.json({message:"Invalid Inputs"});
     }

    try{
      const user = await prisma.user.findUnique({
        where:{
          email:body.email,
          password:body.password
        }
      });
       if(!user)
       {
        return c.text("Email/password incorrect or you need to signup");
       }
       else{
        const token = await sign({id:user.id}, c.env.JWT_SECRET);
        return c.json({text:"welcome! you are signed in",
                      jwt:token});
  
       }
  
       
    }
    catch(e)
       {
        return c.text("error occured Whoops!!!!");
        
       }
  
    
  })


  