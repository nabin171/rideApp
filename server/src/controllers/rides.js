const Ride = require("../models/ride");

const addNewRide =async (req, res) => {
  Ride.create(req.body)
  res.send('ok')
};

const getRides =async (req, res) => {
  console.log(req.query.status)
  const data = await Ride.find( {"status":
  { $regex: new RegExp("^" + req.query.status.toLowerCase(), "i") } }
).populate('passengerId')
  console.log(data)
  res.json(data)
};




module.exports={addNewRide,getRides}