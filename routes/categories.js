var express = require('express');
var router = express.Router();
const { getAllCategories, addCategory, updateCategory, deleteCategory, getCategory } = require('../controllers/categories');

router.get('/', function(req, res, next){
    getAllCategories(res);
});

router.get('/:id',getCategory)

router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);
router.post('/', addCategory);

module.exports = router;