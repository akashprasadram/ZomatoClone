const express = require("express");
const router = express.Router();
const controller = require("../Controllers/MealType");

router.get("/getall/", controller.getAllMealTypes);

module.exports = router;
