const repo = require("../Repository/User");
const jwt = require("jsonwebtoken");
const User = require("../Models/user");

exports.signup = async (req, res) => {
  //console.log(req.body);
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var password = req.body.password;
  var birthdate = req.body.birthdate;
  var gender = req.body.gender;
  var newUser = new User(
    firstname,
    lastname,
    email,
    password,
    birthdate,
    gender
  );
  var userData = await repo.addUser(newUser);
  if (userData) {
    const token = jwt.sign(
      {
        username: firstname + " " + lastname,
        email: email,
      },
      "MYPRIVATEKEY",
      {
        expiresIn: "2h",
      }
    );
    const authResponse = {
      username: firstname + " " + lastname,
      email: email,
      token: token,
    };
    res
      .status(200)
      .json({ status: "User Added Successfully", token: authResponse });
  } else {
    res.status(500).json({ status: 500 });
  }
};

exports.login = async (req, res) => {
  const user = await repo.getUser(req.body.email);
  //console.log(req.body);
  //console.log(user);
  if (!user) {
    return res.status(401).json({ status: 401, msg: "Invaild User" });
  } else if (user.password != req.body.password) {
    return res.status(401).json({ status: 401, msg: "Invaild password" });
  } else {
    const token = jwt.sign(
      {
        username: user.firstname + " " + user.lastname,
        email: user.email,
      },
      "MYPRIVATEKEY",
      {
        expiresIn: "2h",
      }
    );
    const authResponse = {
      username: user.firstname + " " + user.lastname,
      email: user.email,
      token: token,
    };
    res.status(200).json({ status: "Vaild Cred", token: authResponse });
  }
};
