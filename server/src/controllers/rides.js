const Ride = require("../models/ride");

const addNewRide =async (req, res) => {
  Ride.create(req.body)
  res.send('ok')
};



module.exports={addNewRide}