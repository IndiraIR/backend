const mongoose = require("mongoose");

const employeesSchema = new mongoose.Schema({
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
    required: [true, "User phone number required"],
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
  street: String,
  city: String,
  postcode: String,
  country: String,
  type: {
    type: String,
    enum: {
      values: ["Admin", "Empleado"],
      message: "{VALUE} is not supported",
    },
    default: "Employee",
  },
  password: {
    type: String,
    required: true,
  },
  image: String,
});

const employeesModel = mongoose.model("employee", employeesSchema);
module.exports = employeesModel;
