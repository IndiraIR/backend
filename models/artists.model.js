const mongoose = require("mongoose");
const { appConfig } = require("../config");

const artistsSchema = new mongoose.Schema({
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

artistsSchema.methods.setImgUrl = function setImgUrl(filename) {
  const { host, port } = appConfig;
  this.image = `${host}:${port}/public/${filename}`;
};

const artistsModel = mongoose.model("artist", artistsSchema);
module.exports = artistsModel;
