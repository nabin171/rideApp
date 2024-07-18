const mongoose=require('mongoose')

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
  gender:{
    type:String,
    enum:['Male','Female','Others'],
    default:'Male'
  },
    role:{
        type:String,
        enum:['User','Rider'],
        default:'Male'
  }
});
const User = mongoose.model("user", userSchema);
module.exports=User
