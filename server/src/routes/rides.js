const { Router } = require("express");
const { addNewRide , getRides } = require("../controllers/rides");
const app = Router();

app.post("/rides", addNewRide);
app.get("/rides", getRides);
module.exports = app;
