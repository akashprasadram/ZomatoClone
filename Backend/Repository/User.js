const mongodb = require("../config/mogodb");
exports.getUser = async (email) => {
  const collection = mongodb.getCollection("User");
  const user = await collection.findOne({ email: email });
  return user;
};

exports.addUser = async (item) => {
  const collection = mongodb.getCollection("User");
  const user = await collection.insertOne({
    firstname: item.firstname,
    lastname: item.lastname,
    email: item.email,
    password: item.password,
    birthdate: item.birthdate,
    gender: item.gender,
  });
  return user;
};
