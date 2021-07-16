const mongoose = require("mongoose");

const wishlistsSchema = new mongoose.Schema({
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
});

const wishlistsModel = mongoose.model("wishlist", wishlistsSchema);
module.exports = wishlistsModel;
