var express = require('express');
const verifyRole = require('../middlewares/verifyRole')
const { createTestimonial, deleteTestimonial, updateTestimonial, getAllTestimonials, getTestimonial } = require('../controllers/testimonials')
const { testimonialValidator } = require('../validators/testimonials')
var router = express.Router();
router.post('/', testimonialValidator, createTestimonial);
router.put('/:id', updateTestimonial);
router.delete('/:id', deleteTestimonial);
router.get("/", getAllTestimonials)
router.get("/:id", getTestimonial)
module.exports = router;