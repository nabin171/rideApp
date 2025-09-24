const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const userRoutes = require("./routes/users"); // if using CommonJS
const contactRoutes = require("./routes/contact");
const app = express();

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/contact", contactRoutes); // POST /contact

app.use("/user", userRoutes); // <-- mount users router at /user

// Connect to DB + start server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(8000, () => console.log("Server running on port 8000"));
  })
  .catch((err) => console.error("DB connection error:", err));
