const { Router } = require("express");
const { addNewRide } = require("../controllers/rides");
const app = Router();

app.post("/rides", addNewRide);
module.exports = app;
