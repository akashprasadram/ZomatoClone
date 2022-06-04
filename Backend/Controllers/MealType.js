const repo = require("../Repository/MealType");
exports.getAllMealTypes = async (req, res) => {
  var result = await repo.getAll();
  res.status(200).json({ status: "Successful", data: result });
};
