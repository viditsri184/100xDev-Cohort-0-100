import { Hono } from "hono";

const app = new Hono();

// Auth middleware
app.use(async (c, next) => {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
})

// c -> context here means it has all the context of the application (req, res etc..)
app.get('/', async(c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello Hono!");
});


export default app;