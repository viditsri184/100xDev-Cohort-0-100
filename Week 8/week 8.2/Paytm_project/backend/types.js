const zod = require("zod");

const signUpBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6)
});

const signInBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

const updateBody = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
});

const transferBody = zod.object({
    to: zod.string(),
    amount: zod.number()
});


module.exports = {signUpBody, signInBody, updateBody, transferBody};