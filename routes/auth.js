const express = require("express");
const jwt = require("jsonwebtoken");
const { registerUser, loginUser, authenticateUser } = require("../controllers/users");
const {registerValidator, loginValidator} = require('../validators/users')
const router = express.Router();

router.post("/register", registerValidator, registerUser);

router.post("/login", loginValidator, loginUser);

router.get('/me', authenticateUser)


module.exports = router;
