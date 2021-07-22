const mongoose = require("mongoose");

const artworksSchema = new mongoose.Schema({
  artistId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artist",
    },
  ],
  author: String,
  title: {
    type: String,
    required: true,
    },
  year: {
    type: String, // Poner como date o máximo 4 dígitos
  },
  stockNo: {
    type: String,
  },
  medium: {
    type: String,
  },
  location: {
    type: String,
    enum: {
      values: ["Triana", "Gáldar", "Prestada", "Propietario"],
      message: "{VALUE} is not supported",
    },
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  depth: {
    type: Number,
  },
  condition: {
    type: String,
    enum: {
      values: ["Excelente", "Buena", "Revisar", "Dañada"],
      message: "{VALUE} is not supported",
    },
  },
  status: {
    type: String,
    enum: {
      values: ["Disponible", "Reservada", "Vendida"],
      message: "{VALUE} is not supported",
    },
  },
  type: {
    type: String,
    enum: {
      values: [
        "Painting",
        "Sculpture",
        "Video",
        "Mixed",
        "Installation",
        "Work on Paper",
      ],
      message: "{VALUE} is not supported",
    },
  },
  image: String,
  priceoffered: {
    type: Number,
  },
  currencyoffered: {
    type: String,
    default: "EUR",
  },
  pricebought: {
    type: Number,
  },
  currencybought: {
    type: String,
    default: "EUR",
  },
  datebought: {
    type: String,
  },
  currencysold: {
    type: String,
    default: "EUR",
  },
  soldfor: Number,
  notes: String,
  datesold: {
    type: String,
  },
  publish: {
    type: Boolean,
    default: false,
  },
});

const artworksModel = mongoose.model("artwork", artworksSchema);
module.exports = artworksModel;
