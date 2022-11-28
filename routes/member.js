const express = require('express');
const router = express.Router();
const {
    createMember,
    findAllMembers,
    removeMember,
    updateMember,
    findOneMember
} = require('../controllers/member');
const { createValidator } = require('../validators/members');
router.post('/', createValidator, createMember);
router.get('/', findAllMembers);
router.get('/:id', findOneMember);
router.delete('/:id', removeMember);
router.put('/:id', updateMember);
module.exports = router;