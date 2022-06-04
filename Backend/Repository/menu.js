const mongodb = require("../config/mogodb");

exports.add = (item, callback) => {
  //Step 2: Get the collection.
  const collection = mongodb.getCollection("Menu");
  //Step 3: Add your data to collection.
  collection
    .insertOne({
      name: item.name,
      price: item.price,
      type: item.type,
      detail: item.detail,
      imageURL: item.imageURL,
      isVeg: item.isVeg,
      restaurantID: item.restaurantID,
    })
    .then(() => {
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getByRestaurantID = async (restaurantID) => {
  //Step 2: Get the collection.
  const collection = mongodb.getCollection("Menu");
  //Step 3: Get data from collection.
  var menu = await collection.find({ restaurantID: restaurantID }).toArray();
  return menu;
};
