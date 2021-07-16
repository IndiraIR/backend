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
wishRouter.post("/", auth, isEmployee, createWish);
wishRouter.get("/filter", auth, filterWishs);
wishRouter.get("/:artworkId", getWish);
wishRouter.delete("/:artworkId", auth, isEmployee, deleteWish);
wishRouter.put("/:artworkId", auth, isEmployee, updateWish);

module.exports = wishRouter;
