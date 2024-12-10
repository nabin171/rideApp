"use client";
import React from "react";
import { MapPin } from "lucide-react";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";

const Cities = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="max-w-6xl mx-auto mt-6">
        {/* Main Heading */}
        <div className="flex justify-center">
          <h1 className="heading text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-8">
            Cities We Operate In
          </h1>
        </div>

        {/* Cities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            "Kathmandu",
            "Pokhara",
            "Lalitpur",
            "Bhaktapur",
            "Biratnagar",
            "Chitwan",
          ].map((city) => (
            <div
              key={city}
              className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4"
            >
              <MapPin className="h-6 w-6 text-purple-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                  {city}
                </h3>
                <p className="text-gray-300 mt-2">
                  Enjoy seamless ride services in {city}, with reliable drivers
                  and competitive pricing.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <div className="flex justify-center">
            <h2 className="heading text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-6">
              More Cities Coming Soon!
            </h2>
          </div>
          <p className="text-center text-gray-300">
            We’re constantly expanding to bring our services to more
            destinations. Stay tuned for updates on new city launches!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cities;
