const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

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

app.post("/register", async (req, res) => {
  //step1:req.body.emailshould not exist in db
  const user = await User.exists({ email: req.body.email });
  console.log(user);
  if (user) return res.send("Email is taken");

  //yes it exist -->end and prompt email already in use

  //no new email-->
  req.body.password = await bcrypt.hash(req.body.password, saltRounds);
  req.body.password = await bcrypt.hash(req.body.cpassword, saltRounds);
  // //hash the password

  //save the new details with hash password in db
  User.create(req.body);
  res.send("User created succesfully");
});

app.post("/login", async (req, res) => {
  //step1:req.body.emailshould exist in db
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send("Email does not exist");
  console.log(req.body.password);
  console.log(user.password);
  //db password -->dcrypt and compare with req.body.password

  const isMatched = await bcrypt.compare(req.body.password, user.password);
  console.log(isMatched);
  //no -->invalid email
  if (!isMatched) res.send("Invalid Password!!");

  const token = jwt.sign(
    { email: req.body.email },
    "251acea12138b26bf65b266dc2b3527a43e7d6f009d65337730f63de2d6063fd6e78afe35c85eb901cdf8a0fd6d8c409229b02afeab2fb757cd1df0d9df68f4f8b196112d62a210d4b63c93458f268cf29429194caa3580267ab61bc0c6b5f17d86d23208ee6a858c6b1415b59645e2567b0d74df873e0e300c02b7810413ac0"
  );
  res.send({ token, user });

  //not matches:inavlid paassword
  //matched: generate jwt and say  ok
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
