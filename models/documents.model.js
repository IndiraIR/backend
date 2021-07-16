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
  documentType: {
    type: String,
    enum: {
      values: ["Invoice", "Loan", "Certificate of Authenticity", "Contract"],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
  date: { type: Date, default: Date.now },
  pricebought: {
    type: Number,
  },
  currencybought: {
    type: Number,
    default: "EUR",
  },
  datebought: {
    type: Date,
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
});

const documentsModel = mongoose.model("document", documentsSchema);
module.exports = documentsModel;
