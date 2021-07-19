const employeesModel = require("../models/employees.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { handleError } = require("../utils/functions");

function getAllEmployees(req, res) {
  employeesModel
    .find()
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => handdleError(err, res));
}

function createEmployee(req, res) {
  
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
      console.log(err);
      res.json(err);
    });
}

function filterEmployees(req, res) {
  let queryArr = [];
  if (req.query.name)
    queryArr.push({ name: { $regex: req.query.name, $options: "i" } });
  if (req.query.type)
    queryArr.push({ type: { $regex: req.query.type, $options: "i" } });
  employeesModel
    .find({ $or: queryArr })
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => res.json(err));
}

function getEmployee(req, res) {
  employeeId = req.params.employeeId;
  //console.log(employeeId);
  employeesModel
    .findById(employeeId)
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => res.json(err));
}

function deleteEmployee(req, res) {
  employeesModel
    .deleteOne({ _id: req.params.employeeId })
    .then((employeeId) => {
      res.json(employeeId);
    })
    .catch((err) => handdleError(err, res));
}

function updateEmployee(req, res) {
  employeesModel
    .findByIdAndUpdate(req.params.employeeId, req.body, {
      new: true,
      runValidators: true,
    })
    .then((employee) => res.json(employee))
    .catch((err) => handdleError(err, res));
}

module.exports = {
  getAllEmployees,
  createEmployee,
  filterEmployees,
  deleteEmployee,
  getEmployee,
  updateEmployee,
};
