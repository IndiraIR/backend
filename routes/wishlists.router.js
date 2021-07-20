const jwt = require("jsonwebtoken");
const wishRouter = require("express").Router();
const { auth, isEmployee } = require("../utils/functions");

const {
  createWish,
  getWish,
  updateWish,
  deleteWish,
  getAllWishs,
  filterWishs,
} = require("../controllers/wishlists.controller");

wishRouter.get("/", getAllWishs);
wishRouter.post("/", createWish);
wishRouter.get("/filter", filterWishs);
wishRouter.get("/:wishId", getWish);
wishRouter.delete("/:wishId", deleteWish);
wishRouter.put("/:wishId", updateWish);

module.exports = wishRouter;
