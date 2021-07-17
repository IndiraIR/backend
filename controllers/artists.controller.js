const artistsModel = require("../models/artists.model");
const { handleError } = require("../utils/functions");

function createArtist(req, res) {
  const {
    name,
    surname,
    dateofbirth,
    dateofdeath,
    country,
    address,
    website,
    email,
    telephone,
    tags,
  } = req.body;

  /*
  const artistObj = artistsModel({
    name,
    surname,
    dateofbirth,
    dateofdeath,
    country,
    address,
    website,
    email,
    telephone,
    tags,
  });

  if (req.file) {
    const { filename } = req.file;
    artistObj.setImgUrl(filename);
  }
  */
  console.log(req.body)
  artistsModel
    .create(req.body)
    .then((artist) => {
      console.log(artist);

      res.json(artist);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getArtist(req, res) {
  artistId = req.params.artistId;
  console.log(artistId);
  artistsModel
    .findById(artistId)
    .then((artist) => {
      res.json(artist);
    })
    .catch((err) => {
      res.json(err);
    });
}

function updateArtist(req, res) {
  artistsModel
    .findByIdAndUpdate(req.params.artistId, req.body, {
      new: true,
      runValidators: true,
    })
    .then((artist) => {
      res.json(artist);
    })
    .catch((err) => handdleError(err, res));
}

function deleteArtist(req, res) {
  artistsModel
    .deleteOne({ _id: req.params.artistId })
    .then((artist) => {
      res.json(artist);
    })
    .catch((err) => handdleError(err, res));
}

function getAllArtists(req, res) {
  artistsModel
    .find()
    .then((artists) => {
      res.json(artists);
    })
    .catch((err) => handdleError(err, res));
}

function filterArtists(req, res) {
  let queryArr = [];
  if (req.query.name) {
    queryArr.push({
      name: { $regex: req.query.name, $options: "i" },
    });
  }
  if (req.query.surname) {
    queryArr.push({
      surname: { $regex: req.query.surname, $options: "i" },
    });
  }
  // if (req.query.country) {
  //   queryArr.push({ country: req.query.country });
  // }
  artistsModel
    .find({ $or: queryArr })
    .then((artists) => {
      res.json(artists);
    })
    .catch((err) => handdleError(err, res));
}

module.exports = {
  createArtist,
  getArtist,
  updateArtist,
  deleteArtist,
  getAllArtists,
  filterArtists,
};
