const jwt = require("jsonwebtoken");
const auctionRouter = require("express").Router();
const { auth, isEmployee } = require("../utils/functions");

const {
  createAuction,
  getAuction,
  updateAuction,
  deleteAuction,
  getAllAuctions,
  filterAuctions,
} = require("../controllers/auctions.controller");

auctionRouter.get("/", getAllAuctions);
auctionRouter.post("/", createAuction);
auctionRouter.get("/filter", filterAuctions);
auctionRouter.get("/:auctionId", getAuction);
auctionRouter.delete("/:auctionId", deleteAuction);
auctionRouter.put("/:auctionId", updateAuction);

module.exports = auctionRouter;
