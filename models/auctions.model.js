const mongoose = require("mongoose");

const auctionsSchema = new mongoose.Schema({
  artistsId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artist",
    },
  ],
  title: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String },
  lotnumber: String,
  linktoauction: String,
  artist: String,
});

const auctionsModel = mongoose.model("auction", auctionsSchema);
module.exports = auctionsModel;
