const express = require("express");
const router = express.Router();
const controller = require("../Controllers/menu");
// api/menu - POST
router.post("/", controller.add);

// api/menu - GET
router.get("/restaurant/:id", controller.getByRestaurantID);

module.exports = router;
