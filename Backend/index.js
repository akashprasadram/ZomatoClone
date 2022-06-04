const express = require("express");
const server = express();

const mongodb = require("./config/mogodb");
const restaurantRoutes = require("./Routes/Restaurants");
const mealTypeRoutes = require("./Routes/MealType");
const userRoutes = require("./Routes/User");
const menuRoutes = require("./Routes/Menu");

server.listen("8055", () => {
  console.log("Server is listening to port 8055");
});

mongodb.connect();

var cors = require("cors");
server.use(cors());

const bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use("/", restaurantRoutes);
server.use("/meal/", mealTypeRoutes);
server.use("/api/user", userRoutes);
server.use("/api/menu", menuRoutes);

server.get("/", (req, res) => {
  res.send("Hello from server");
});
