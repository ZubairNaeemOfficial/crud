"use strict";

var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
var Todo = mongoose.model("User", todoSchema);
module.exports = Todo;