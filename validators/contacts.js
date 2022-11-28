const { check } = require("express-validator");
const {validateResult} = require('../helpers/validateResult')
const contactValidator = [
  check("name").exists().isString().notEmpty(),
  check("email").exists().isEmail().notEmpty(),
  check("phone").optional().isNumeric(),
  check("message").optional().isString(),
  (req, res, next) =>{
    validateResult(req, res, next)
  }
];

module.exports = { contactValidator };
