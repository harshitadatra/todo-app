const mongoose = require("mongoose");

mongoose.connect("url");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: String,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
