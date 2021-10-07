const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phoneNumber: String,
  profession: {
    type: String,
    //C stands for consumer and S represents seller
    enum: ["T", "S", "P"],
    default: "S",
    required: true,
  },
  gender: {
    type: String,
    enum: ["m", "f"],
    default: "m",
    required: true,
  },
  about: {
    type: String,
  },
});

module.exports = mongoose.model("userSchema", schema, "userSchema");
