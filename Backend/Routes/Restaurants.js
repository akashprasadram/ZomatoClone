const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Restaurant");

router.post("/filterRestaurant", controller.filterRestaurant);
//router.get("/Filter/", controller.filterRestaurantByLocationAndName);
router.get("/getById/:id", controller.GetById);

module.exports = router;
