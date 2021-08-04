const mongoose = require("mongoose");

const wishlistsSchema = new mongoose.Schema({
  contactsId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contact",
    },
  ],
  artistsId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artist",
    },
  ],
  title: { type: String, required: true },
  year: { type: String },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  depth: {
    type: Number,
  },
  image: String,
  artists: String,
  medium: {
    type: String,
  },
  contact: String,
  link: String,
});

const wishlistsModel = mongoose.model("wishlist", wishlistsSchema);
module.exports = wishlistsModel;
