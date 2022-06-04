const express = require("express");
const controller = require("../Controllers/user");

const router = express.Router();

router.post("/login", controller.login);
router.post("/signup", controller.signup);

module.exports = router;
