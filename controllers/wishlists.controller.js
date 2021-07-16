const wishlistsModel = require("../models/wishlists.model");
const { handleError } = require("../utils/functions");



function createWish(req, res) {
  console.log(req.body);
  wishlistsModel
    .create(req.body)
    .then((wish) => {
      res.json(wish);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getWish(req, res) {
  artistId = req.params.wishId;
  console.log(wishId);
  wishlistsModel
    .findById(wishId)
    .then((wish) => {
      res.json(wish);
    })
    .catch((err) => {
      res.json(err);
    });
}

function updateWish(req, res) {
  wishlistsModel
    .findByIdAndUpdate(req.params.wishId, req.body, {
      new: true,
      runValidators: true,
    })
    .then((wish) => {
      res.json(wish);
    })
    .catch((err) => handdleError(err, res));
}

function deleteWish(req, res) {
  wishlistsModel
    .deleteOne({ _id: req.params.wishId })
    .then((wish) => {
      res.json(wish);
    })
    .catch((err) => handdleError(err, res));
}

function getAllWishs(req, res) {
  wishlistsModel
    .find()
    .then((wishs) => {
      res.json(wishs);
    })
    .catch((err) => handdleError(err, res));
}

function filterWishs(req, res) {
  let queryArr = [];
  if (req.query.title) {
    queryArr.push({
      title: { $regex: req.query.title, $options: "i" },
    });
  }
  if (req.query.year) {
    queryArr.push({
      year: { $regex: req.query.year, $options: "i" },
    });
  }

  wishlistsModel
    .find({ $or: queryArr })
    .then((wishs) => {
      res.json(wishs);
    })
    .catch((err) => handdleError(err, res));
}

module.exports = {
  createWish,
  getWish,
  updateWish,
  deleteWish,
  getAllWishs,
  filterWishs,
};