const { check } = require("express-validator");
const {validateResult} = require('../helpers/validateResult')
const testimonialValidator = [
  check("name").exists().isString().notEmpty(),
  check("image").isString().default("https://via.placeholder.com/150"),
 check("content").exists().isString().notEmpty(),
  (req, res, next) =>{
    validateResult(req, res, next)
  }
];

module.exports = { testimonialValidator };
