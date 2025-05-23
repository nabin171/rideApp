
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/rideExpressDb");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  userName: String,
  password: String,
  cpassword: String,
  gender: {
    type: String,
    enum: ["Male", "Female", "Others"],
    default: "Male",
  },
});
const User = mongoose.model("User", userSchema);
module.exports=User