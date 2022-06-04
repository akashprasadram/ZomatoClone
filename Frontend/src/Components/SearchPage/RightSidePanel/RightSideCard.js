import "./RightSidePanel.css";
import { useState, useEffect } from "react";
function RightSideCard(props) {
  var [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    setRestaurant(props.restaurantData1);
    //console.log("location rightside card");
    //console.log(props.restaurantData1);
  }, [props.restaurantData1]);
  const handelCusines = (cusinie) => {
    var st = "";
    for (var i = 0; i < cusinie.length; i++) {
      //console.log(cusinie[i].name);
      if (i < cusinie.length - 1) {
        st = st + cusinie[i].name + ", ";
      } else {
        st = st + cusinie[i].name;
      }
    }
    return st;
  };
  return (
    <div
      className="card"
      onClick={() => {
        props.handelRestaurantClick(props.restaurantData1._id);
      }}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 col-6">
            <img className="rounded" src="../../../images/food.jpg" alt="" />
          </div>
          <div className="col-md-9 col-6">
            <p className="Shop-Name">{restaurant ? restaurant.name : ""}</p>
            <p className="address-line-1">
              {restaurant ? restaurant.locality : ""}
            </p>
            <p className="address-line-2">
              {restaurant ? restaurant.address : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row ">
          <div className="line-break"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3 col-6">
            <p className="item">CUISINES:</p>
          </div>
          <div className="col-md-9 col-6">
            <p className="prices">
              {restaurant ? handelCusines(restaurant.Cuisine) : ""}
            </p>
          </div>
          <div className="w-100"></div>
          <div className="col-md-3 col-6">
            <p className="item">COST FOR TWO:</p>
          </div>
          <div className="col-md-9 col-6">
            <p className="prices">
              &#x20b9;{restaurant ? restaurant.cost : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RightSideCard;
