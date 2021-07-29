const mongoose = require("mongoose");

const artistsSchema = new mongoose.Schema({
  ownersId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contact",
    },
  ],
  customersId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contact",
    },
  ],
  name: {
    type: String,
    required: "Please enter your name",
    trim: true,
  },
  surname: {
    type: String,
    required: "Please enter your name",
    trim: true,
  },
  dateofbirth: String,
  dateofdeath: String,
  country: {
    type: String,
  },
  address: String,
  website: String,
  email: {
    type: String,
    validate: {
      validator(value) {
        if (value == "") return true;
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        );
      },
    },
    unique: [true, "This is email is registered"],
  },
  telephone: {
    type: String,
    validate: {
      validator: function (v) {
        if (v == "") return true;

        return /\d{3}-\d{3}-\d{3}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  image: String,
  tags: String,
  owners: String,
  customers: String,
});

const artistsModel = mongoose.model("artist", artistsSchema);
module.exports = artistsModel;
