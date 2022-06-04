import "./RightSidePanel.css";
import { useState, useEffect } from "react";
import RightSideCard from "./RightSideCard";
import NoResultFound from "../NoResultFound/NoResultFound";
import { useNavigate } from "react-router-dom";

function RightSidePanel(props) {
  var [restaurant, setRestaurant] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setRestaurant(props.restaurantData);
    //console.log("location rightside=>");
    //console.log(props.restaurantData);
  }, [props.restaurantData]);

  const restaurantClick = (id) => {
    //console.log("Restaurant Clicked " + id);
    navigate("/restaurantdetailspage/" + id);
  };
  const handelChange = (e) => {
    var current = document.getElementsByClassName("active-page");
    current[0].className = current[0].className.replace(" active-page", "");
    e.target.className += " active-page";
  };
  return (
    <div className="RightSidePanel">
      {restaurant.length > 0 ? (
        restaurant.map((r, index) => (
          <RightSideCard
            restaurantData1={r}
            key={index}
            handelRestaurantClick={(id) => {
              restaurantClick(id);
            }}
          />
        ))
      ) : (
        <NoResultFound />
      )}
      {/* <RightSideCard restaurant={r} key={index} /> */}

      {/* <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-6">
              <img className="rounded" src="images\lunch.jpg" alt="" />
            </div>
            <div className="col-md-9 col-6">
              <p className="Shop-Name">
                {restaurant[0].name ? restaurant[0].name : ""}
              </p>
              <p className="address-line-1">
                {restaurant[0].locality ? restaurant[0].locality : ""}
              </p>
              <p className="address-line-2">
                {restaurant[0].address ? restaurant[0].address : ""}
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
              <p className="prices">Bakery</p>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3 col-6">
              <p className="item">COST FOR TWO:</p>
            </div>
            <div className="col-md-9 col-6">
              <p className="prices">&#x20b9;700</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-6">
              <img className="rounded" src="images\snacks.png" alt="" />
            </div>
            <div className="col-md-9 col-6">
              <p className="Shop-Name">
                {restaurant[1].name ? restaurant[0].name : ""}
              </p>
              <p className="address-line-1">
                {restaurant[1].locality ? restaurant[0].locality : ""}
              </p>
              <p className="address-line-2">
                {restaurant[1].address ? restaurant[0].address : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="line-break"></div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-6">
              <p className="item">CUISINES:</p>
            </div>
            <div className="col-md-9 col-6">
              <p className="prices">Bakery</p>
            </div>
            <div className="w-100"></div>
            <div className="col-md-3 col-6">
              <p className="item">COST FOR TWO:</p>
            </div>
            <div className="col-md-9 col-6">
              <p className="prices">&#x20b9;700</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Page Navigator --> */}
      <div className="divPaginator">
        <ul className="pagination">
          <li className="page-item">
            <div
              className="page-link"
              href="/"
              onClick={(e) => {
                handelChange(e);
                props.handlePageInc(-1);
              }}
            >
              &#60;
            </div>
          </li>
          <li className="page-item">
            <div
              className="page-link active-page"
              onClick={(e) => {
                handelChange(e);
                props.handlePage(1);
              }}
            >
              1
            </div>
          </li>
          <li className="page-item">
            <div
              className="page-link"
              onClick={(e) => {
                handelChange(e);
                props.handlePage(2);
              }}
            >
              2
            </div>
          </li>
          <li className="page-item">
            <div
              className="page-link"
              href="/"
              onClick={(e) => {
                handelChange(e);
                props.handlePage(3);
              }}
            >
              3
            </div>
          </li>
          <li className="page-item">
            <div
              className="page-link"
              onClick={(e) => {
                handelChange(e);
                props.handlePage(4);
              }}
            >
              4
            </div>
          </li>
          <li className="page-item">
            <div
              className="page-link"
              onClick={(e) => {
                handelChange(e);
                props.handlePage(5);
              }}
            >
              5
            </div>
          </li>
          <li className="page-item">
            <div
              className="page-link"
              onClick={(e) => {
                handelChange(e);
                props.handlePageInc(1);
              }}
            >
              &#62;
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightSidePanel;
