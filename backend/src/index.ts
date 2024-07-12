import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

type Bindings={
 DATABASE_URL: string,
 JWT_SECRET: string,
 header:string
}

const app = new Hono<{
  Bindings:Bindings
}>();


app.use('api/*',cors());
app.route("api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);


app.get("/", (c)=>{
  return c.text("Welcome to my  HONO app");
})



export default app
