const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  confirmpassword: String,
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    default: "Male",
  },
});
const User = mongoose.model("user", userSchema);
module.exports = User;
