import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {decode, sign, verify} from "hono/jwt"
import { createBlogSchema, updateBlogSchema } from "@singhtech/schema-common-blogshoot";


type Bindings = {
  DATABASE_URL: string,
  JWT_SECRET: string,
  token:string,
  authHeader:string
}
type Variables={
    userId:string
}


export const blogRouter = new Hono<{
    Bindings:Bindings,
    Variables:Variables
}>();


//middlewares start
//app.use( path to hit, (c, next{middleware}))
blogRouter.use('/*', async(c, next)=>{
    const authHeader = c.req.header('authorization') || "";
    const token = authHeader.split(" ")[1];
    const response  =  await verify(token, c.env.JWT_SECRET);
    
  try{
    if(!token)
    {
        throw new Error("Token not provided");
    } 
      if(response && response.id)
      {
        //@ts-ignore 
        //to be checked later
        c.set('userId',response.id);
        await next();
      }
     else{
       c.status(401);
       return c.json({error: "Whoops! unauthorized"})
        }
  }
  
  catch(e){
    c.json({
      error: "Whoops! No token"
    })
  }
    
  
  })
  
  
  
  //middlewares ends


  
//  blogRouter.get("/",(c)=>{
//     return c.text("Hello to my hono app")
//   })
  
  
  
  blogRouter.post("/", async(c)=>{
    const body =  await c.req.json();

    const success = createBlogSchema.safeParse(body);
    if(!success)
    {
        c.status(411);
        c.json({
            msg:"invalid input types"
        })
    }
    const authorId = c.get("userId");

    
  
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
try{
    const blog  = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:authorId
        }
       })
    
       return c.json({
                    id:blog.id,
                    msg:"Created blog"
       })
}
catch(e){
        c.json({
            id:authorId,
            msg:"Error creating blog"
        })
}
   

})
blogRouter.put("/", async (c)=>{

    const body =  await c.req.json();
    const {success} = updateBlogSchema.safeParse(body);
    if(!success)
    {
        c.status(411);
        c.json({
            msg:"invalid input types"
        })
    }
  
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

   const blog  = await prisma.post.update({
    where:{
        id:body.id
   },
   data:{
    title:body.title,
    content:body.content,
   }
})

return c.json({
    select:{
        id:true,
        title:true,
        content:true,
        authorId:true,
        author:{
            name:true
        }
    }
})

})

//todo:pagination
blogRouter.get('/bulk', async(c)=>{

    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    const blogs = await prisma.post.findMany(
        {
            select:{
                content:true,
                title:true,
                id:true,
                author:
                {
                    select:{
                        name:true
                    }           
                } 
            }
        }
    );

    return c.json({
        blogs
    })
  })
  
  
blogRouter.get("/:id", async(c)=>{
    const id = c.req.param("id");
  
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.post.findUnique({
        where:{
            id:id
        },
        select:{
            id:true,
            title:true,
            content:true,
            author:{
                select:{
                    name:true
                }
                
            }
        }
    })

    return c.json({
        blog
    })
  })

