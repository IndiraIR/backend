const jwt = require("jsonwebtoken");
const artistRouter = require("express").Router();
const upload = require("../libs/storage");

const { auth, isEmployee } = require("../utils/functions");

const {
  createArtist,
  getArtist,
  updateArtist,
  deleteArtist,
  getAllArtists,
  filterArtists,
} = require("../controllers/artists.controller");

//artistRouter.post("/", upload.single("image"), createArtist);
artistRouter.post("/", createArtist);
artistRouter.get("/", getAllArtists);
artistRouter.get("/:artistId", auth, isEmployee, getArtist);
artistRouter.get("/filter", auth, isEmployee, filterArtists);
artistRouter.delete("/:artistId", deleteArtist);
artistRouter.put("/:artistId", auth, isEmployee, updateArtist);

module.exports = artistRouter;
