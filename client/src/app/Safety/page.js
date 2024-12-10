"use client";
import React from "react";
import { ShieldCheck, Heart, Eye, AlertTriangle } from "lucide-react";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";

const Safety = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="max-w-6xl mx-auto mt-6">
        {/* Main Heading */}
        <div className="flex justify-center">
          <h1 className="heading text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-8">
            Commitment to Safety
          </h1>
        </div>

        {/* Safety Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <ShieldCheck className="h-6 w-6 text-green-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Verified Drivers
              </h3>
              <p className="text-gray-300 mt-2">
                All drivers are thoroughly vetted and verified for your safety.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <Heart className="h-6 w-6 text-red-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                24/7 Support
              </h3>
              <p className="text-gray-300 mt-2">
                Our support team is available around the clock to assist you.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <Eye className="h-6 w-6 text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Real-Time Tracking
              </h3>
              <p className="text-gray-300 mt-2">
                Track your ride in real-time from pickup to drop-off.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Emergency Assistance
              </h3>
              <p className="text-gray-300 mt-2">
                Access emergency assistance directly from the app during your
                ride.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Tips Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <div className="flex justify-center">
            <h2 className="heading text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-6">
              Safety Tips for Riders
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-800">
              <span className="text-gray-300">Verify Your Driver</span>
              <span className="text-gray-300">
                Match the driver's details with the app before starting your
                ride.
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-800">
              <span className="text-gray-300">Share Your Trip</span>
              <span className="text-gray-300">
                Use the app to share your trip details with friends or family.
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-300">Trust Your Instincts</span>
              <span className="text-gray-300">
                If you ever feel unsafe, don't hesitate to cancel the ride.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Safety;
