const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    completed: zod.boolean()
});

const updatedTodo = zod.object({
    id : zod.number()
});

const deletedTodo = zod.number();

module.exports = {
    createTodo: createTodo,
    updatedTodo: updatedTodo,
    deletedTodo: deletedTodo
};