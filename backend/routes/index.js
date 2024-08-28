// backend/user/index.js
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");
const checkRouter = require("./check.js");
const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accountRouter);
router.use("/me",checkRouter)

module.exports = router;