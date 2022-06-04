const mongodb = require("../config/mogodb");
exports.getAll = async () => {
  const collection = mongodb.getCollection("MealTypes");
  var result = await collection.find().sort({ name: 1 }).toArray();
  console.log(result);
  return result;
};
