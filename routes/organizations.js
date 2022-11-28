const express = require("express");
const { getOrganization, updateOrganization } = require("../controllers/organizations");
const router = express.Router();

router.get("/", getOrganization);
router.put("/", updateOrganization)

module.exports = router;