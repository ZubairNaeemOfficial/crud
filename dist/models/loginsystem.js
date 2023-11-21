"use strict";

var mongoose = require('mongoose');
var _require = require('validator'),
  isEmail = _require.isEmail,
  isIn = _require.isIn;
var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: isEmail,
      message: 'Invalid email address'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8 // Minimum password length
  },

  role: {
    type: String,
    "enum": ['customer', 'admin', 'HR', 'Manager'],
    "default": 'customer'
  }
});
module.exports = mongoose.model('Logintest', userSchema);