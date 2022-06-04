import "./details.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuModal from "../menu-modal/menu-modal";
function Details() {
  const { id } = useParams();
  var [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  var [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    console.log("id=" + id);
    fetch("http://localhost:8055/getById/" + id)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRestaurant(data.restaurant);
      });
  }, [id]);
  return (
    <div className="DetailsPage">
      <div>
        <img src="../../images/breakfast.jpg" className="displayImg" />
        <div className="btn-gallery">
          <button className="gallery-button">Click to see Image Gallery</button>
        </div>
      </div>
      <button
        className="btn btn-danger online-order-btn"
        onClick={() => {
          setShow(true);
        }}
      >
        Place Online Order
      </button>
      <MenuModal
        show={show}
        handleClose={handleClose}
        id={id}
        key={id}
        shopName={restaurant ? restaurant.name : " "}
      />
      {/* Showing 2 Tabs on screen as Overview and Contact with details in respective sections*/}
      <div className="heading">{restaurant ? restaurant.name : " "}</div>
      <div className="tabs">
        {/* Tab-1 */}
        <div className="tab">
          <input
            type="radio"
            id="tab-1"
            name="tab-group-1"
            defaultChecked={true}
          />
          <label htmlFor="tab-1" className="tablabel">
            Overview
          </label>

          <div className="content">
            <div className="about">About the place</div>
            <div className="head">Cuisine</div>

            {restaurant && restaurant.Cuisine && restaurant.Cuisine.length > 0
              ? restaurant.Cuisine.map((r, index) => (
                  <div className="value" key={index}>
                    {r.name}
                  </div>
                ))
              : ""}

            <div className="head">Average Cost</div>
            <div className="value">
              &#8377; {restaurant ? restaurant.cost : " "}
            </div>
          </div>
        </div>
        {/* Tab-2 */}
        <div className="tab">
          <input type="radio" id="tab-2" name="tab-group-1" />
          <label htmlFor="tab-2" className="tablabel">
            Contact
          </label>
          <div className="content">
            <div className="head">Phone Number</div>
            <div className="value">+91-9876543217</div>
            <div className="head">{restaurant ? restaurant.name : " "}</div>
            <div className="value">{restaurant ? restaurant.address : " "}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details; // exporting the component
