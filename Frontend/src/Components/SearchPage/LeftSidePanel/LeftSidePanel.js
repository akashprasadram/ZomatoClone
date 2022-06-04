import "./LeftSidePanel.css";
import { useState, useEffect } from "react";
function LeftSidePanel(props) {
  var [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    setRestaurant(props.restaurantData);
    //console.log("location");
    //console.log(props.restaurantData);
  }, [props.restaurantData]);

  return (
    <div className="LeftSide-Panel">
      <h2 className="h2">Filters</h2>

      <p className="location heading-style">Select Location</p>
      <select className="form-select" onChange={(e) => props.locationchange(e)}>
        <option value="0" defaultValue>
          Select Location
        </option>
        {restaurant.length > 0 &&
          restaurant.map((r, index) => (
            <option value={r.city_name} key={index}>
              {r.city_name}
            </option>
          ))}
      </select>

      <p className="Cuisine heading-style">Cuisine</p>
      <div className="Cuisine-Names">
        <div className="form-check">
          <input
            type="checkbox"
            name="food-type"
            value="1"
            onClick={(e) => props.cuisineSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="food-type">
            North Indian
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="food-type"
            value="2"
            onClick={(e) => props.cuisineSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="food-type">
            South Indian
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="food-type"
            value="3"
            onClick={(e) => props.cuisineSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="food-type">
            Chinese
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="food-type"
            value="4"
            onClick={(e) => props.cuisineSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="food-type">
            Fast Food
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            name="food-type"
            value="5"
            onClick={(e) => props.cuisineSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="food-type">
            Street Food
          </label>
        </div>
      </div>

      <p className="Cost-For-Two heading-style">Cost For Two</p>
      <div className="Cost-Container">
        <div className="form-check">
          <input
            type="radio"
            name="CostForTwo"
            value="0 499"
            onClick={(e) => props.costSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="CostForTwo">
            Less than 500
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="CostForTwo"
            value="500 1000"
            onClick={(e) => props.costSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="CostForTwo">
            500 to 1000
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="CostForTwo"
            value="1000 1500"
            onClick={(e) => props.costSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="CostForTwo">
            1000 to 1500
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="CostForTwo"
            value="1500 2000"
            onClick={(e) => props.costSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="CostForTwo">
            1500 to 2000
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="CostForTwo"
            value="2000 9999"
            onClick={(e) => props.costSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="CostForTwo">
            2000+
          </label>
        </div>
      </div>

      <p className="Sort heading-style">Sort</p>
      <div className="Sort-Container">
        <div className="form-check">
          <input
            type="radio"
            name="sorting"
            value="1"
            onClick={(e) => props.sortTypeSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="sorting">
            Price low to high
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="sorting"
            value="2"
            onClick={(e) => props.sortTypeSelection(e)}
            className="form-check-input Text-Style"
          />
          <label className="form-check-label Text-Style" htmlFor="sorting">
            Price high to low
          </label>
        </div>
      </div>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary hidden-button"
          id="hidden-apply-button"
          type="button"
          onClick={(e) => props.handleApply(e)}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default LeftSidePanel;
