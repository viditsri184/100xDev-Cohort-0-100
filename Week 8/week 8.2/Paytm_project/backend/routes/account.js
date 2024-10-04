const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const authMiddleware = require("../middlewares/middleware");
const { getBalance, transferAmount } = require("../controllers/accountHandlers");

// An endpoint for user to get their balance.
router.get("/balance", authMiddleware, asyncHandler(getBalance));

// An endpoint for user to transfer money to another account
router.post("/transfer", authMiddleware, asyncHandler(transferAmount));

module.exports = router;