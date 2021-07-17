const jwt = require("jsonwebtoken");
const employeeRouter = require("express").Router();
const { auth, isAdmin } = require("../utils/functions");

const {
  getAllEmployees,
  createEmployee,
  filterEmployees,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} = require("../controllers/employees.controller");

employeeRouter.get("/", getAllEmployees);
employeeRouter.get("/filter", auth, isAdmin, filterEmployees);
employeeRouter.get("/:employeeId", getEmployee);
employeeRouter.post("/", createEmployee);
employeeRouter.delete("/:employeeId", deleteEmployee);
employeeRouter.put("/:employeeId", updateEmployee);

module.exports = employeeRouter;
