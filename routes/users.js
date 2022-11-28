var express = require('express');
const { getUsers, getUser } = require('../controllers/users');
const verifyRole = require('../middlewares/verifyRole');
var router = express.Router();

/* GET users listing. */
router.get('/',verifyRole ,getUsers)
router.get('/:id',verifyRole ,getUser)

module.exports = router;
