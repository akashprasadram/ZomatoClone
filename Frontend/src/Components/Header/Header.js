import "./header.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
function Header(props) {
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
  const navigateToHomePage = () => {
    navigate("/");
  };
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
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand brand-icon" onClick={navigateToHomePage}>
          e!
        </p>
        <form className="d-flex">
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
            type="submit"
            onClick={navigateToSignup}
          >
            Create an Account
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
