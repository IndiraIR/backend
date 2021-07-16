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

employeeRouter.get("/", auth, isAdmin, getAllEmployees);
employeeRouter.get("/filter", auth, isAdmin, filterEmployees);
employeeRouter.get("/:employeeId", auth, isAdmin, getEmployee);
employeeRouter.post("/", auth, isAdmin, createEmployee);
employeeRouter.delete("/:employeeId", auth, isAdmin, deleteEmployee);
employeeRouter.put("/:employeeId", auth, updateEmployee); /*tendría que ser solo la tuya*/

module.exports = employeeRouter;
