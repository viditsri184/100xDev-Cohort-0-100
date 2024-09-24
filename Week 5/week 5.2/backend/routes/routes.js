const express = require("express");
const router = express.Router();

const {getAllTodos, putNewTodo, updateTodo, deleteTodo} = require("../controllers/controllers")


// Define the "/" endpoint
router.get("/", getAllTodos);

router.route("/todo").post(putNewTodo);
router.route("/updateTodos").put(updateTodo);
router.route("/deleteTodos").delete(deleteTodo);


module.exports = router;