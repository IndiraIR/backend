const auctionsModel = require("../models/auctions.model");
const { handleError } = require("../utils/functions");

function createAuction(req, res) {
  console.log(req.body);
  auctionsModel
    .create(req.body)
    .then((auction) => {
      res.json(auction);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getAuction(req, res) {
  auctionId = req.params.auctionId;
  console.log(auctionId);
  auctionsModel
    .findById(auctionId)
    .then((auction) => {
      res.json(auction);
    })
    .catch((err) => {
      res.json(err);
    });
}

function updateAuction(req, res) {
  console.log(req.body);
  auctionsModel
    .findByIdAndUpdate(req.params.auctionId, req.body, {
      new: true,
      runValidators: true,
    })
    .then((auction) => {
      res.json(auction);
    })
    .catch((err) => handdleError(err, res));
}

function deleteAuction(req, res) {
  auctionsModel
    .deleteOne({ _id: req.params.auctionId })
    .then((auction) => {
      res.json(auction);
    })
    .catch((err) => handdleError(err, res));
}

function getAllAuctions(req, res) {
  auctionsModel
    .find()
    .then((auctions) => {
      res.json(auctions);
    })
    .catch((err) => handdleError(err, res));
}

function filterAuctions(req, res) {
  let queryArr = [];
  if (req.query.title) {
    queryArr.push({
      title: { $regex: req.query.title, $options: "i" },
    });
  }
  if (req.query.date) {
    queryArr.push({
      date: { $regex: req.query.date, $options: "i" },
    });
  }

  auctionsModel
    .find({ $or: queryArr })
    .then((auctions) => {
      res.json(auctions);
    })
    .catch((err) => handdleError(err, res));
}

module.exports = {
  createAuction,
  getAuction,
  updateAuction,
  deleteAuction,
  getAllAuctions,
  filterAuctions,
};
