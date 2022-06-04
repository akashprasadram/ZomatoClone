import Header from "../Header/Header";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  const navigate = useNavigate();
  const handleSubmit = () => {
    var flag = 1;
    let fd = {};
    // 1. Get FirstName element
    const txtbFname = document.getElementById("txtbFname");
    const fname = txtbFname.value;
    fd["firstname"] = fname;
    //console.log(fname);
    // Validate fiest name
    if (fname == "") {
      flag = 0;
      alert("Please enter first name");
      return;
    }

    // 2. Get LastName element
    const txtbLname = document.getElementById("txtbLname");
    const lname = txtbLname.value;
    //console.log(lname);
    fd["lastname"] = lname;
    // Validate last name
    if (lname == "") {
      flag = 0;
      alert("Please enter last name");
      return;
    }

    // 3. Get Email element
    const txtbEmail = document.getElementById("txtbEmail");
    const email = txtbEmail.value;
    fd["email"] = email;
    // Validate Email
    // 1. Check if "@" (t@t.in)
    const indexOfAt = email.indexOf("@");
    const valid = email.length > indexOfAt + 4;
    if (indexOfAt < 1 || !valid || !email.endsWith(".com")) {
      flag = 0;
      alert("Please enter a valid email");
      return;
    }
    //console.log(email);

    // 4. Get password element
    const txtbPassword = document.getElementById("txtbPassword");
    //console.log("password=" + txtbPassword.value);
    const password = txtbPassword.value;
    fd["password"] = password;
    //console.log(password);
    // Validate password
    if (password.length < 5 || password.length > 20) {
      flag = 0;
      alert("Password should have length greater than 5 and less than 21");
      return;
    }

    // 5. Get DOB element
    const inputDOB = document.getElementById("inputDOB");
    const dob = new Date(inputDOB.value);
    fd["birthdate"] = dob;
    const yearOfSelectedDate = dob.getFullYear();
    const currentYear = new Date().getFullYear();
    if (yearOfSelectedDate > currentYear - 15) {
      flag = 0;
      alert("You should be atleast 15 years old");
      return;
    }
    //console.log("dob=" + dob);

    // 6. Get Gender element
    const genderButtons = document.getElementsByName("gender");
    const isMale = genderButtons[0].checked;
    const isFemale = genderButtons[1].checked;
    //console.log(isMale);
    //console.log(isFemale);

    var Gender = isMale == true ? "Male" : "Female";
    fd["gender"] = Gender ? Gender : "Male";

    if (flag == 1) {
      fetch("http://localhost:8055/api/user/signup", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fd),
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          props.handelTokenData(data.token);
          handelNavigation();
        });
    }
    // const result = `Name = ${fname} ${lname},
    //     Email: ${email}, Gender = ${isMale == true ? "Male" : "Female"}`;
    // console.log(result);
  };
  const handelNavigation = () => {
    navigate(-1);
  };

  return (
    <div className="SignupPage">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-md-5 Elogo-container">
            <p className="Elogo">e!</p>
          </div>
          <div className="col col-md-5">
            <h1 className="h1">SignUp Form</h1>
            <div className="mb-3">
              <label className="form-label" htmlFor="fname">
                First Name
              </label>
              <input
                id="txtbFname"
                className="form-control"
                maxLength="20"
                type="text"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="lname">
                Last Name
              </label>
              <input
                id="txtbLname"
                className="form-control"
                type="text"
                maxLength="20"
                required
              />
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
            <div className="mb-3">
              <label className="form-label" htmlFor="dob">
                Date of Birth
              </label>
              <input id="inputDOB" className="form-control" type="date" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="gender">
                Gender
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                />
                <label className="form-check-label gender-label">Male</label>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                  />
                  <label className="form-check-label gender-label">
                    Female
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <input
                  onClick={handleSubmit}
                  className="btn btn-primary submit-button"
                  type="submit"
                  value="Submit"
                />
              </div>
              <div className="mb-3 signin-container">
                <span>
                  Click here to Login <a href="/signin">Signin</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
