const mongoose = require("mongoose");
require("dotenv").config(); // load .env

const connect = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB:", connected.connection.name);
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  }
};

module.exports = connect;
