const mongoose = require("mongoose");

const auctionsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String },
  lotnumber: String,
  linktoauction: String,
  artist: String,
});

const auctionsModel = mongoose.model("auction", auctionsSchema);
module.exports = auctionsModel;
