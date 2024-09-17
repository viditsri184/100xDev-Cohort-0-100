const express = require("express");
const port = 5000;
const app = express();

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    // the input here we expecting is a kidney array
    // something like this kidney = [1, 2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    
    res.send("You have " + kidneyLength + " kidneys");
});

// In the above code, what if the end-user passes some rubbish content in the body
// and not the required one then it will show error and expose our backend route with
// other information too to the end user which is not a very safe measure
// Thus to remove this thing i.e to show the end-user a better error message rather than
// exposing our whole backend route we use Global catches

/* Global catches help you give the user a better error message
Error Handling middleware : This is a special type of middleware function in Express
that has four arguments instead of three(err, req, res, next). Express recognizes it
as an error-handling middleware because of these four arguments
We just need to define this global catch at the end of our codebase and all errors
related to input of any-type will be handled by it
*/

// global catch defined at the end
app.use((err, req, res, next) => {
    // console.log(err);  ->  // Log the error for debugging
    res.json({msg : "Sorry something is up with our server"});
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});