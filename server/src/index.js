const express = require("express");
const app = express();
const port = 8000;

app.get("/me", (req, res) => {
  res.send("nabin");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
