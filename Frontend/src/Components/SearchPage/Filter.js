import "./filter.css";
import Header from "../Header/Header";
import LeftSidePanel from "./LeftSidePanel/LeftSidePanel";
import RightSidePanel from "./RightSidePanel/RightSidePanel";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Filter(props) {
  const params = useParams();
  var [restaurant, setRestaurant] = useState([]);
  var [cuisine, setCuisine] = useState([]);
  var [cityName, setCityName] = useState(null);
  var [lCost, setLcost] = useState(null);
  var [hCost, setHcost] = useState(null);
  var [sort, setSort] = useState(1);
  var [page, setPage] = useState(1);
  useEffect(() => {
    //console.log("id=" + params.id + "  name=" + params.name);
    //console.log(params);
    var input = {};
    input["mealtype"] = parseInt(params.id);
    fetch("http://localhost:8055/filterRestaurant", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setRestaurant(data.restaurants);
      });
  }, []);

  useEffect(() => {
    let fd = {};
    fd["mealtype"] = parseInt(params.id);
    console.log("mealtype=>" + params.id);
    if (hCost && lCost) {
      fd["lcost"] = lCost;
      fd["hcost"] = hCost;
      console.log("cost per=>");
      console.log(lCost + " " + hCost);
    }
    if (cuisine.length > 0) {
      fd["cuisine"] = cuisine;
      console.log("cusinie=>");
      console.log(cuisine);
    }
    if (cityName) {
      fd["location"] = cityName;
      console.log("location=>");
      console.log(cityName);
    }
    if (sort != 1) {
      fd["sort"] = sort;
      console.log("sort=>");
      console.log(sort);
    }
    if (page != 1) {
      fd["page"] = page;
      console.log("page=>");
      console.log(page);
    }

    fetch("http://localhost:8055/filterRestaurant", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fd),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.restaurants);
        setRestaurant(data.restaurants);
      });
  }, [hCost, lCost, cuisine, sort, cityName, page]);

  const handleLocationchange = (e) => {
    //console.log(e.target.value);
    if (e.target.value == 0) {
      setCityName(null);
    } else {
      setCityName(e.target.value);
    }
  };

  const handleCuisineSelection = (e) => {
    //console.log(e.target.value);
    //console.log(e.target.checked);
    var cvalue = parseInt(e.target.value);
    if (e.target.checked) {
      setCuisine((cusineData) => [...cusineData, cvalue]);
    } else {
      setCuisine(cuisine.filter((item) => item !== cvalue));
    }
  };

  const handleCostSelection = (e) => {
    //console.log(e.target.value);
    var str = e.target.value + "";
    var st = str.split(" ");
    //console.log(st);
    setLcost(parseInt(st[0]));

    setHcost(parseInt(st[1]));
  };
  const handleSortTypeSelection = (e) => {
    //console.log(e.target.value);
    if (e.target.value == 1) {
      setSort(1);
    } else {
      setSort(-1);
    }
  };
  const handlePageSelection = (no) => {
    setPage(no);
  };

  const handlePageSelectionInc = (no) => {
    if (page + no >= 1) {
      page = page + no;
      setPage(page);
    }
  };

  const dropdown = () => {
    console.log("Clicked");
    var x = document.getElementById("left-side-panel");
    var value = x.style.display;
    if (value === "block") {
      console.log("block");
      x.style.display = "none";
    } else {
      console.log("none");
      x.style.display = "block";
    }
  };

  return (
    <div>
      <Header token={props.tokenData} handelToken={props.handelTokenData} />
      <div className="filterPage-container">
        <p className="h1 bf-header">{params.name} Places in India</p>

        {/* Hidden Panel  */}
        <div className="Search-Bar hidden-data">
          <button
            name="Filter/Sort"
            className="Filter-Bar form-select"
            onClick={dropdown}
          >
            <span className="hiddenFilter">Filters / Sort</span>
          </button>
        </div>

        {/* <!-- container --> */}
        <div className="row Parent-Container">
          {/* <!-- Left Side Panel --> */}
          <div
            className="col shadow col-lg-2 col-md-2 col-sm-9 left-side-panel"
            id="left-side-panel"
          >
            <LeftSidePanel
              restaurantData={restaurant}
              locationchange={(e) => handleLocationchange(e)}
              cuisineSelection={(e) => handleCuisineSelection(e)}
              costSelection={(e) => handleCostSelection(e)}
              sortTypeSelection={(e) => handleSortTypeSelection(e)}
              handleApply={(e) => dropdown()}
            />
          </div>
          <div className="col col-lg-7 col-md-10 col-sm-9 right-side-panel">
            <RightSidePanel
              restaurantData={restaurant}
              handlePage={(no) => handlePageSelection(no)}
              handlePageInc={(no) => handlePageSelectionInc(no)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
