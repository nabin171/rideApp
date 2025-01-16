const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 8000;

const userRoute = require("./routes/users");
const connect = require("./db/connection");
connect();
app.use(userRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
