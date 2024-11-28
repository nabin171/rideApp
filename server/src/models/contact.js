const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  name:String,
  email: String, 
  password: String,  
});
const Login = mongoose.model("Login", loginSchema);
module.exports = Login;
