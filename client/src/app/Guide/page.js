"use client";
import React from "react";
import { MapPin, CheckCircle, Users, DollarSign } from "lucide-react";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";

const NewDriverGuide = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="max-w-6xl mx-auto mt-6">
        {/* Main Heading */}
        <div className="flex justify-center">
          <h1 className="heading text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-8">
            New Driver Guide
          </h1>
        </div>

        {/* Steps to Get Started */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <MapPin className="h-6 w-6 text-green-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Step 1: Register Your Account
              </h3>
              <p className="text-gray-300 mt-2">
                Sign up online by providing your basic details and required
                documents.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <CheckCircle className="h-6 w-6 text-purple-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Step 2: Pass Verification
              </h3>
              <p className="text-gray-300 mt-2">
                Complete the verification process, including background checks
                and vehicle inspection.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <Users className="h-6 w-6 text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Step 3: Attend Orientation
              </h3>
              <p className="text-gray-300 mt-2">
                Learn the basics of using the platform, safety guidelines, and
                tips for success.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <DollarSign className="h-6 w-6 text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Step 4: Start Earning
              </h3>
              <p className="text-gray-300 mt-2">
                Activate your account and start accepting ride requests to earn
                money.
              </p>
            </div>
          </div>
        </div>

        {/* Tips for Success */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <div className="flex justify-center">
            <h2 className="heading text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-6">
              Tips for Success
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-800">
              <span className="text-gray-300">Keep Your Vehicle Clean</span>
              <span className="text-gray-300">
                Provide a comfortable experience for riders.
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-800">
              <span className="text-gray-300">Be Punctual</span>
              <span className="text-gray-300">
                Arrive on time to build a good reputation.
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-300">Communicate Clearly</span>
              <span className="text-gray-300">
                Respond promptly to rider queries and updates.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewDriverGuide;
