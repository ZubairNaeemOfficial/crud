"use strict";

var jwt = require("jsonwebtoken");
var authenticateWithToken = function authenticateWithToken(req, res, next) {
  try {
    req.headers.authorization && req.headers.authorization.startsWith("Bearer");
    var token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Access Denied , token missing"
      });
    }
    jwt.verify(token, process.env.PRIVATE_KEY, function (err, user) {
      if (err) {
        return res.status(403).json({
          message: "You are not authorized"
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json("Internal server Error");
  }
};
var authorizeRoles = function authorizeRoles(roles) {
  return function (req, res, next) {
    var token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({
        message: 'Access denied, token missing'
      });
    }
    jwt.verify(token, 'your-secret-key', function (err, user) {
      if (err) {
        return res.status(403).json({
          message: 'Invalid token'
        });
      }
      if (!roles.includes(user.role)) {
        return res.status(403).json({
          message: 'Unauthorized access'
        });
      }
      req.user = user;
      next();
    });
  };
};
module.exports = {
  authenticateWithToken: authenticateWithToken,
  authorizeRoles: authorizeRoles
};