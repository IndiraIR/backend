const mongoose = require("mongoose");

const documentsSchema = new mongoose.Schema({
  documentNo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  documenttype: {
    type: String,
    enum: {
      values: [
        "Factura",
        "Préstamo",
        "Certificado de Autenticidad",
        "Contrato",
      ],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
  date: { type: String },
  pricebought: {
    type: Number,
  },
  currencybought: {
    type: Number,
    default: "EUR",
  },
  datebought: {
    type: String,
  },
  namefile: {
    type: String,
  },
  artworkId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artwork",
    },
  ],
  contactId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contact",
    },
  ],
  client: String,
  artwork: String,
});

const documentsModel = mongoose.model("document", documentsSchema);
module.exports = documentsModel;
