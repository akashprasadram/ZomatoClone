import Header from "../Header/Header";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
function Signin(props) {
  const navigate = useNavigate();
  const handleSubmit = async () => {
    // 1. Get Email element
    let fd = {};

    const txtbEmail = document.getElementById("txtbEmail");
    const email = txtbEmail.value;
    fd["email"] = email;
    //console.log(email);

    // 4. Get password element
    const txtbPassword = document.getElementById("txtbPassword");
    //console.log("password=" + txtbPassword.value);
    const password = txtbPassword.value;
    fd["password"] = password;
    //console.log(password);

    fetch("http://localhost:8055/api/user/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 401) {
          alert("Invalid Cred");
        }
        if (data.token) {
          props.handelTokenData(data.token);
          //console.log(data);
          handelNavigation();
        }
      });

    // var data = await fetch("http://localhost:8055/api/user/login", {
    //   method: "POST",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(fd),
    // }).then((res) => res.json());

    // if (data.status == 401) {
    //   alert("Invalid Cred");
    // }
    // if (data.token) {
    //   props.handelTokenData(data.token);
    //   console.log(data);
    //   alert("Valid Cred");
    //   handelNavigation();
    // }
  };
  const handelNavigation = () => {
    navigate(-1);
  };
  return (
    <div className="SigninPage">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-md-4 center-data">
            <div className="Elogo-container">
              <p className="Elogo">e!</p>
            </div>
            <div className="heading-h1">
              <h1 className="h1">SignIn Form</h1>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">@</span>
              </div>
              <input
                id="txtbEmail"
                className="form-control"
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>
              </div>
              <input
                id="txtbPassword"
                minLength="6"
                maxLength="12"
                className="form-control"
                placeholder="Password"
                type="password"
                required
              />
            </div>
            <div className="mb-3 submit-button-container">
              <input
                onClick={handleSubmit}
                className="btn btn-primary"
                type="submit"
                value="Submit"
              />
            </div>
            <span className="text-create">
              Click here to create a new account <a href="/signup">Signup</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
