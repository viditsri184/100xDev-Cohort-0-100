const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
// express-async-handler is a middleware function for handling asynchronous
// operations in Express.js, which simplifies error handling. Normally,
// with asynchronous code (using async/await), you need to manually catch and
// handle errors to prevent your application from crashing.

// express-async-handler automatically wraps asynchronous route handlers in a
// try-catch block, so if any error occurs during the execution of the
// asynchronous function, it is caught and passed to Express's error-handling
// middleware.

router.post("/signup", asyncHandler(async(req, res) => {
    
}))

