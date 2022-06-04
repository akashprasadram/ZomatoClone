import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Filter from "./Components/SearchPage/Filter";
import MainDetailsPage from "./Components/DetailPage/MainDetailsPage";
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/SignIn/SignIn";
import { useState } from "react";

function App() {
  var [token, setToken] = useState(null);
  const handelToken = (tokenData) => {
    //console.log(tokenData);
    //alert(tokenData);
    setToken(tokenData);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tokenData={token}
              handelTokenData={(data) => {
                handelToken(data);
              }}
            />
          }
          set
        />
        <Route
          path="/signup"
          element={
            <Signup
              handelTokenData={(data) => {
                handelToken(data);
              }}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Signin
              handelTokenData={(data) => {
                handelToken(data);
              }}
            />
          }
        />
        <Route
          path="/restaurantsearchpage/:id/:name"
          element={
            <Filter
              tokenData={token}
              handelTokenData={(data) => {
                handelToken(data);
              }}
            />
          }
        />
        <Route
          path="/restaurantdetailspage/:id"
          element={
            <MainDetailsPage
              tokenData={token}
              handelTokenData={(data) => {
                handelToken(data);
              }}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
