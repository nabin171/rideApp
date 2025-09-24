const express = require("express");
const router = express.Router();
const { saveContactMessage } = require("../controllers/contact");

// POST /contact
router.post("/", saveContactMessage);

module.exports = router;
