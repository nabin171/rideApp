const mongoose = require("mongoose");
const { Schema } = mongoose;

const rideSchema = new Schema(
  {
    ridePickup: String,
    rideDestination: String,
    rideCharge: {
      type: Number,
      required: true,
      min: [0, "Ride charge cannot be negative"],
    },
    rideStatus: {
      type: String,
      enum: ["Pending", "Approved", "Completed"],
      default: "Pending",
    },
    rider: String,
    driver: String,
    paymentStatus: {
      type: String,
      enum: ["Pending", "Completed", "Failed"],
      default: "Pending",
    },
    pickupTime: Date,
    dropOffTime: Date,
  },
  { timestamps: true }
);

const Ride = mongoose.model("Ride", rideSchema);
module.exports = Ride;
