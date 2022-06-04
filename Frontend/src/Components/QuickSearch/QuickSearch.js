import "./quicksearch.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuickSearchCard from "./QuickSearchCard";

function QuickSearch() {
  const navigate = useNavigate();
  var [mealType, setMealType] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8055/meal/getall")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.data);
        setMealType(result.data);
      });
  }, []);
  const handleNavigation = (id, name) => {
    //console.log("id=" + id + " name=" + name);
    navigate("/restaurantsearchpage/" + id + "/" + name);
  };
  return (
    <div className="catalog-container">
      <div className="heading1">Quick Searches</div>
      <div className="heading2">Discover restaurants by type of meal</div>

      <div className="cardcontainer">
        {mealType.length > 0 &&
          mealType.map((r, index) => (
            <QuickSearchCard
              mealdata={r}
              key={index}
              handleClick={(id, name) => handleNavigation(id, name)}
            />
          ))}
      </div>
    </div>
  );
}

export default QuickSearch;
