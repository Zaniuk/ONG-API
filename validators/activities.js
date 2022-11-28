const { check } = require("express-validator");
const { validateResult } = require('../helpers/validateResult')
const createValidator = [
    check("name").exists().isString().notEmpty(),
    check("image").exists().isString().notEmpty(),
    check("content").exists().isString().notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { createValidator };