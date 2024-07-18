const mongoose = require("mongoose");

const { Schema } = mongoose;

const rideSchema = new Schema({
  ridepickup: String,
  rideDestination: String,
  rideCharge: String,
  rideStatus: {
    type: String,
    enum: ["Pending", "Approved", "completed"],
  },
});
const ride = mongoose.model("ride", rideSchema);
module.exports = ride;
