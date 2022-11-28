
const express = require('express');
const { updateNews,createNews,findAllNews,detailNews,deleteNews  } = require("../controllers/news");
const newsFieldsValidation = require("../helpers/newsValidation");
const validatorHandler = require("../middleware/validator");
const router = express.Router();

router.put("/:id", validatorHandler(newsFieldsValidation), updateNews);

router.get("/:id", detailNews)

router.post("/", validatorHandler(newsFieldsValidation), createNews);

router.delete('/:id', deleteNews);

router.get('/', findAllNews);


module.exports = router;

