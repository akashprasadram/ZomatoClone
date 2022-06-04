import "./WallpaperPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function WallpaperPage(props) {
  var [username, setUserName] = useState("");
  useEffect(() => {
    if (props.token) {
      username = props.token.username;
      setUserName(props.token.username);
      var hide = document.getElementsByClassName("hideData");
      for (let i = 0; i < hide.length; i++) {
        hide[i].style.display = "none";
      }
      var unhideData = document.getElementsByClassName("unhide");
      for (let i = 0; i < unhideData.length; i++) {
        unhideData[i].style.display = "block";
      }
    }
  }, [props.token]);
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/signin");
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const handelLogout = () => {
    props.handelToken(null);
    var hide = document.getElementsByClassName("hideData");
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.display = "block";
    }
    var unhideData = document.getElementsByClassName("unhide");
    for (let i = 0; i < unhideData.length; i++) {
      unhideData[i].style.display = "none";
    }
  };
  return (
    <div className="header">
      <div className="row">
        <div className="col">
          <form className="d-flex topnav-right">
            <div className="btn btn-link unhide">
              {props.token ? props.token.username : "test"}
            </div>
            <button
              type="button"
              className="btn btn-outline-success unhide"
              onClick={handelLogout}
            >
              LogOut
            </button>
            <button
              type="button"
              className="btn btn-link hideData"
              onClick={navigateToLogin}
            >
              Login
            </button>

            <button
              className="btn btn-outline-success hideData"
              type="button"
              onClick={navigateToSignup}
            >
              Create an Account
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="circle">e!</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center">
            <span className="nav-title">
              Find the best restaurants, cafés, and bars
            </span>
          </div>
        </div>
      </div>
      {/* <div className="row justify-content-md-center display-block">
        <div className="col-md-3 col-sm-11 col-xs-11 centering">
          <form className="container-fluid">
            <div className="input-group">
              <select className="form-select Text-Style">
                <option selected>Please type a location</option>
                <option value="1">Sarjapur Road, Bengaluru</option>
                <option value="2">HSR Layout, Bengaluru</option>
                <option value="3">Kormangala, Bengaluru</option>
                <option value="4">Jay Nagar, Bengaluru</option>
              </select>
            </div>
          </form>
        </div>
        <div className="col-md-4 col-sm-11 col-xs-11 centering">
          <form className="container-fluid">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              <input
                type="text"
                className="form-control search-bar Text-Style"
                placeholder="Search for restaurants"
              />
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default WallpaperPage;
