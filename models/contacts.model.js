const mongoose = require("mongoose");

const contactsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator(value) {
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
        return /\d{3}-\d{3}-\d{3}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  telephone2: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{3}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  address: String,
  address2: String,
  country: String,
  notes: {
    type: String,
    max: 255,
  },
  image: String,
  type: String
});

const contactsModel = mongoose.model("contact", contactsSchema);
module.exports = contactsModel;
