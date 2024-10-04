const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const authMiddleware = require("../middlewares/middleware");
const { signUpHandler, signInHandler, userInfoUpdate, getUser } = require("../controllers/userHandlers");

// express-async-handler is a middleware function for handling asynchronous
// operations in Express.js, which simplifies error handling. Normally,
// with asynchronous code (using async/await), you need to manually catch and
// handle errors to prevent your application from crashing.

// express-async-handler automatically wraps asynchronous route handlers in a
// try-catch block, so if any error occurs during the execution of the
// asynchronous function, it is caught and passed to Express's error-handling
// middleware.

// signUp endpoint
router.post("/signup", asyncHandler(signUpHandler));

// signIn endpoint
router.post("/signin", asyncHandler(signInHandler));

// update endpoint
router.put("/", authMiddleware, asyncHandler(userInfoUpdate));

// get user according to filter
router.get("/bulk", asyncHandler(getUser));

module.exports = router;