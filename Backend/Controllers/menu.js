const MenuModel = require("../models/menu");
const repo = require("../Repository/menu");
//1. Add Menus in Restaurant
exports.add = (req, res) => {
  const body = req.body;
  const newMenu = new MenuModel(
    body.name,
    body.price,
    body.type,
    body.restaurantID,
    body.detail,
    body.imageURL,
    body.isVeg
  );
  repo.add(newMenu, () => {
    res.status(200).send("Menu is created");
  });
};

//2. Get Menu of Restaurant
exports.getByRestaurantID = async (req, res) => {
  const restaurantID = req.params.id;
  var menus = await repo.getByRestaurantID(restaurantID);
  if (menus) {
    res.json({ status: 200, menu: menus });
  } else {
    res.json({ status: 401 });
  }
};
