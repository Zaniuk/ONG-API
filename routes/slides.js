const express = require('express');
const router = express.Router();
const {
    getAllSlides,
    createSlide,
    updateSlide,
    removeSlide
} = require('../controllers/slides');
router.get('/', getAllSlides);
router.post('/', createSlide);
router.put('/:id', updateSlide);
router.delete('/:id', removeSlide);
module.exports = router;