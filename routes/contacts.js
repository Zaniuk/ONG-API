const express = require('express');
const router = express.Router();
const { createContact, getContacts, deleteContact } = require('../controllers/contacts')
const { contactValidator } = require('../validators/contacts')
const verifyRole = require('../middlewares/verifyRole')
/* GET home page. */
router.post('/', contactValidator, createContact);
router.get('/', getContacts)
router.delete('/:id', deleteContact)

module.exports = router;
