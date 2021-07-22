const artworksModel = require("../models/artworks.model");

function getAllArtworks(req, res) {
  artworksModel
    .find()
    .populate("artistId", {
      name: 1,
      surname: 1,
    })
    .then((artworks) => {
      //console.log(artworks)
      res.json(
        artworks
        /* artworks.map((artwork) => {
          let artists = artwork.artistId
            .map((artist) => artist.name)
            .join(", ");
            return artists + ", " + artwork.title + ", " + artwork.year; 
          })*/
      );
    })
    .catch((err) => {
      res.json(err);
    });
}

function getAllArtworksAuth(req, res) {
  artworksModel
    .find()
    .populate("artistId", {
      name: 1,
      surname: 1,
    })
    .then((artworks) => {
      res.json(artworks);
    })
    .catch((err) => {
      res.json(err);
    });
}

function createArtwork(req, res) {
  console.log(req)
  artworksModel
    .create(req.body)
    .then((artwork) => {
      res.json(artwork);
    })
    .catch((err) => {
      res.json(err);
    });
}

function getArtwork(req, res) {
  artworkId = req.params.artworkId;
  artworksModel
    .findById(artworkId)
    .populate("artistId", {
      name: 1,
      surname: 1,
    })
    .then((artwork) => {
      let author = "";
      for (let i = 0; i < artwork.artistId.length; i++) {
        author +=
          " " + artwork.artistId[i].name + " " + artwork.artistId[i].surname;
        if (i < artwork.artistId.length - 1) author += ", ";
      }
      author = "[ " + author + " ]";
      res.json(`${author}, ${artwork.title}, ${artwork.year}`);
    })
    .catch((err) => {
      res.json(err);
    });
}

function filterArtworks(req, res) {
  let queryArr = [];
  if (req.query.year) queryArr.push({ year: req.query.year });
  if (req.query.type)
    queryArr.push({ type: { $regex: req.query.type, $options: "i" } });
  if (req.query.status) queryArr.push({ status: req.query.status });
  if (req.query.artistId)
    queryArr.push({ artistId: { $in: [req.query.artistId] } });

  artworksModel
    .find({ $or: queryArr })
    .populate("artistId", {
      name: 1,
      surname: 1,
    })
    .then((artworks) => {
      res.json(artworks);
    })
    .catch((err) => handdleError(err, res));
}

function deleteArtwork(req, res) {
  artworksModel
    .deleteOne({ _id: req.params.artworkId })
    .then((artwork) => {
      res.json(artwork);
    })
    .catch((err) => handdleError(err, res));
}

function updateArtwork(req, res) {
  artworksModel
    .findByIdAndUpdate(req.params.artworkId, req.body, {
      new: true,
      runValidators: false,
    })
  .populate("artistId", {
      name: 1,
      surname: 1,
    })
    .then((artwork) => {
      res.json(artwork);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = {
  getAllArtworks,
  getAllArtworksAuth,
  createArtwork,
  filterArtworks,
  getArtwork,
  deleteArtwork,
  updateArtwork,
};
