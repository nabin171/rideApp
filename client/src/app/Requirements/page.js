"use client";
import React from "react";
import { ClipboardList, FileText, Calendar, Smartphone } from "lucide-react";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";

const Requirements = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="max-w-6xl mx-auto mt-6">
        {/* Main Heading */}
        <div className="flex justify-center">
          <h1 className="heading text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-8">
            Application Requirements
          </h1>
        </div>

        {/* Requirements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <ClipboardList className="h-6 w-6 text-green-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Valid ID Proof
              </h3>
              <p className="text-gray-300 mt-2">
                Submit a government-issued ID such as a passport, driver’s
                license, or national ID.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <FileText className="h-6 w-6 text-purple-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Vehicle Registration
              </h3>
              <p className="text-gray-300 mt-2">
                Ensure your vehicle is registered and meets all local
                regulations.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <Calendar className="h-6 w-6 text-blue-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Minimum Age
              </h3>
              <p className="text-gray-300 mt-2">
                You must be at least 18 years old to apply and meet the minimum
                age requirements.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
            <Smartphone className="h-6 w-6 text-yellow-400 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                Smartphone with Internet
              </h3>
              <p className="text-gray-300 mt-2">
                You’ll need a smartphone with a stable internet connection to
                access the app.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <div className="flex justify-center">
            <h2 className="heading text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-6">
              Additional Information
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-800">
              <span className="text-gray-300">Background Check</span>
              <span className="text-gray-300">
                All applicants must pass a background screening process.
              </span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-800">
              <span className="text-gray-300">Vehicle Insurance</span>
              <span className="text-gray-300">
                Proof of valid vehicle insurance is mandatory.
              </span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-gray-300">Driving Experience</span>
              <span className="text-gray-300">
                A minimum of 1 year of driving experience is required.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Requirements;
