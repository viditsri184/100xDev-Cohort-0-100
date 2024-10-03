const zod = require("zod");

const usernameSchema= zod.string().email();
const passwordSchema = zod.string().min(6);
const firstNameSchema = zod.string();
const lastNameSchema = zod.string();

module.exports = {
    usernameSchema, passwordSchema, firstNameSchema, lastNameSchema
}