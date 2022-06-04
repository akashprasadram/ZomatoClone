const repo = require("../Repository/Restaurant");
const url = require("url");

exports.filterRestaurant = (req, res) => {
  let { mealtype, cuisine, location, lcost, hcost, page, sort } = req.body;
  //console.log(req);
  console.log(req.body);
  console.log(req.body.mealtype);

  page = page ? page : 1;
  sort = sort ? sort : 1; //1 is for assending and -1 is for decending

  let Payload = {};
  const itemsPerPage = 2;

  let startIndex = itemsPerPage * page - itemsPerPage;
  let endIndex = itemsPerPage * page;

  if (mealtype) {
    Payload["type.mealtype"] = mealtype;
  }
  if (location) {
    Payload["city_name"] = location;
  }
  if (lcost && hcost) {
    Payload["cost"] = { $lte: hcost, $gte: lcost };
  }
  if (cuisine) {
    Payload["Cuisine.cuisine"] = { $in: cuisine };
  }
  /*
  if (mealtype && location && lcost && hcost && cuisine) {
    Payload["type.mealtype"] = mealtype;
    Payload["city_name"] = location;
    Payload["cost"] = { $lte: hcost, $gte: lcost };
    Payload["Cuisine.cuisine"] = { $in: cuisine };
  } else if (mealtype && location && lcost && hcost) {
    Payload["type.mealtype"] = mealtype;
    Payload["city_name"] = location;
    Payload["cost"] = { $lte: hcost, $gte: lcost };
  } else if (mealtype && cuisine && lcost && hcost) {
    Payload["type.mealtype"] = mealtype;
    Payload["Cuisine.cuisine"] = { $in: cuisine };
    Payload["cost"] = { $lte: hcost, $gte: lcost };
  } else if (mealtype && location && cuisine) {
    Payload["type.mealtype"] = mealtype;
    Payload["city_name"] = location;
    Payload["Cuisine.cuisine"] = { $in: cuisine };
  } else if (mealtype && lcost && hcost) {
    //split function to extract lcost and hcost delimitor = 500 -1000
    Payload["type.mealtype"] = mealtype;
    Payload["cost"] = { $lte: hcost, $gte: lcost };
  } else if (mealtype && location) {
    Payload["type.mealtype"] = mealtype;
    Payload["city_name"] = location;
  } else if (mealtype && cuisine) {
    Payload["type.mealtype"] = mealtype;
    Payload["Cuisine.cuisine"] = { $in: cuisine };
  } else if (mealtype) {
    Payload["type.mealtype"] = mealtype;
  }*/

  repo.filterRestaurantDetails(Payload, sort, (response) => {
    const filterResponse = response.slice(startIndex, endIndex);
    //const filterResponse = response;
    //console.log(filterResponse);
    res.status(200).json({
      message: "Restaurant Data fetched successfully",
      restaurants: filterResponse,
    });
  });
};

exports.GetById = async (req, res) => {
  var id = req.params.id;
  console.log("controller id=" + id);
  var result = await repo.getById(id);
  if (result) {
    res.status(200).json({
      message: "Data fetched successfully",
      restaurant: result,
    });
  } else {
    res.status(500).json({
      message: "Unable to fetche the data",
    });
  }
};
/*
exports.filterRestaurantByLocationAndName = (req, res) => {
  console.log(req.url);
  const params = url.parse(req.url, true).query;
  console.log(params);
  console.log(params.location + " " + params.name);
  if (!params.name) {
    repo.getByLocation(params.location, (restaurants) => {
      console.log(restaurants);
      res.send(restaurants);
    });
  } else {
    repo.filterRestaurantByLocationAndName(
      params.location,
      params.name,
      (restaurants) => {
        console.log(restaurants);
        res.send(restaurants);
      }
    );
  }
};
*/
