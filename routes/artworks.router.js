const jwt = require("jsonwebtoken");
const artworkRouter = require("express").Router();
const { auth, isEmployee } = require("../utils/functions");

const {
  getAllArtworks,
  getAllArtworksAuth,
  createArtwork,
  getArtwork,
  deleteArtwork,
  updateArtwork,
  filterArtworks,
} = require("../controllers/artworks.controller");

artworkRouter.get("/", getAllArtworks);
artworkRouter.get("/auth/", auth, getAllArtworksAuth);
artworkRouter.post("/", isEmployee, createArtwork);
artworkRouter.get("/filter",  filterArtworks);
artworkRouter.get("/:artworkId", getArtwork);
artworkRouter.delete("/:artworkId", deleteArtwork);
artworkRouter.put("/:artworkId", updateArtwork);

module.exports = artworkRouter;
