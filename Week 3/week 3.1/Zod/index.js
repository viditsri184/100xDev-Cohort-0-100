const express = require("express");
// simply install like express first and then import
const z = require("zod");

const port = 3000;
const app = express();
app.use(express.json());

/*
Earlier if the user send a wrong input like in the below code we expect the input
to be an array of numbers, but its not necessary that user will always send the right
input. Thus we need to perform so many checks in order to not our server go down due to
wrong input from the end-user

Now if we manually check all the things, that whether it is an array or not, if it is then
whether it includes only numbers or not, its length is greater than 1 or not,, and many more
other types of check we need to perform and this is a very cuber-some task to do.

Thus node.js provides a library known as Zod which helps us to do all these input checks
by just telling him what type of input we expect and then all the checks are done by him

We define our own schema of the input we expect and then just pass it to the zod
function to parse it and if the input is same as expected then it shows success : true
else success : false with bunch of other details as well.


Lets take simple examples of schema :
1. Suppose we are expecting a string from the user then we will create our schema like this

->    const schema = z.string();
now whenever we pass anything into this if it is a string it will parse and return true
else false

    "safe" parsing (doesn't throw error if validation fails)
    we can also do schema.parse(req.body), but it will throw error if input is incorrect
    then we have to use try-catch to catch that error too

->    const response = schema.safeParse(req.body);


2. Suppose we are expecting an array of string as an input from the end user, then

->      const schema = z.array(z.string());
->      const response = schema.safeParse(req.body);

3. Suppose we are expecting an array of number as an input from the end user, then

->      const schema = z.array(z.number());
->      const response = schema.safeParse(req.body);


4. Suppose we are expecting an object of multiple things as an input from the end user, then
Input we expect : {
            email : string {should be an email}
            pass : string {min 8 length}
            country : "IN" or "US"
            }
We can define our schema for the above expected input like this
->      const schema = z.object({
                    email : z.string().email();
                    pass : z.string().min(8)
                    country : z.literal("IN")or.(z.literal("US"))
                    });
->      const response = schema.safeParse(req.body);

--------------------------------
// primitive values
z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();

// empty types
z.undefined();
z.null();
z.void(); // accepts undefined

// catch-all types
// allows any value
z.any();
z.unknown();

// never type
// allows no values
z.never();
--------------------------------

There are bunch of different ways to define our schema, only practice will help
to get comfortable with zod
For more info : https://zod.dev/  {official zod documentation}
*/

const mySchema = z.array(z.number());

app.post("/health-checkup", (req, res) => {
    // the input here we expecting is a kidney array
    // something like this kidney = [1, 2]
    const kidneys = req.body.kidneys;
    const response = mySchema.safeParse(kidneys);
    if(!response.success){
        res.status(403).json({msg : "Incorrect input"});
    }

    res.status(200).json({data : response.data});
});

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
});