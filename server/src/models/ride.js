
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/rideExpressDb");
const { Schema } = mongoose;

const rideSchema = new Schema({
  price: Number,
  pickupCoords: String,
  destinationCoords: String,
  distance: Number,
  passengerId: {ref: 'User', type: Schema.Types.ObjectId},
  driverId: {ref: 'User', type: Schema.Types.ObjectId},
  status: {
    type: String,
    enum: ["Accepted", "Cancelled", "On The Way", "Picked Up", "Completed", "Pending"],
    default: "Pending",
  },
},
{
  timestamps: true
});
const Ride = mongoose.model("Ride", rideSchema);
module.exports=Ride