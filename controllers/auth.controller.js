const employeesModel = require("../models/employees.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function signUp(req, res) {
  const hashed_password = bcrypt.hashSync(req.body.password, 10);

  const hashed_body = {
    name: req.body.name,
    surname: req.body.surname,
    type: req.body.type,
    telephone: req.body.telephone,
    email: req.body.email,
    password: hashed_password,
  };

  employeesModel
    .create(hashed_body)
    .then((employee) => {
      const insideToken = {
        name: employee.name,
        surname: employee.surname,
        id: employee._id,
        type: employee.type,
      };

      const token = jwt.sign(insideToken, process.env.SECRET);

      const resEmployee = {
        id: employee._id,
        name: employee.name,
        surname: employee.surname,
        email: employee.email,
        token: token,
      };

      res.json(resEmployee);
    })
    .catch((err) => {
      res.json(err);
    });
}

function logIn(req, res) {
  employeesModel
    .findOne({ email: req.body.email })
    .then((employee) => {
      if (!employee) return res.status(403).json("Wrong email");

      bcrypt.compare(req.body.password, employee.password, (err, result) => {
        if (err) return res.status(403).json("Wrong password");

        const insideToken = {
          name: employee.name,
          surname: employee.surname,
          email: employee.email,
          id: employee._id,
          type: employee.type,
        };
        const token = jwt.sign(insideToken, process.env.SECRET);

        resEmployee = {
          name: employee.name,
          surname: employee.surname,
          email: employee.email,
          id: employee._id,
          token: token,
        };

        res.json(resEmployee);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  signUp,
  logIn,
};
