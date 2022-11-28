const { check } = require("express-validator");
const {validateResult} = require('../helpers/validateResult')
const registerValidator = [
  check("firstName").exists().isString().notEmpty(),
  check("lastName").exists().isString().notEmpty(),
  check("email").exists().isEmail().notEmpty(),
  check("password").exists().isString().notEmpty(),
  check("roleId").default(2),
  check("image"),
  (req, res, next) =>{
    validateResult(req, res, next)
  }
];
const loginValidator = [
    check("email").exists().isEmail().notEmpty(),
    check("password").exists().isString().notEmpty(),
    (req, res, next) =>{
      validateResult(req, res, next)
    }
  ];

module.exports = { registerValidator, loginValidator };
