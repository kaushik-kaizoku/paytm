const { authMiddleware } = require("../middleware");
const express = require('express');

const router = express.Router();

router.post("/", authMiddleware)

module.exports = router