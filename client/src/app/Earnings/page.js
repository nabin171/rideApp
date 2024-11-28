import React from 'react'
import { DollarSign, Clock, TrendingUp, Gift } from "lucide-react";
import CustomNavbar from '@/Components/NavBar/page';
import Footer from '@/Components/Footer/page';

const Earnings = () => {
return (
  <div>
    <CustomNavbar></CustomNavbar>
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        Driver Earnings
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
          <DollarSign className="h-6 w-6 text-purple-400 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              Base Fares
            </h3>
            <p className="text-gray-300 mt-2">
              Earn competitive base rates for every trip you complete.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
          <Clock className="h-6 w-6 text-purple-400 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              Flexible Payments
            </h3>
            <p className="text-gray-300 mt-2">
              Cash out your earnings up to 5 times per day with instant pay.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
          <TrendingUp className="h-6 w-6 text-purple-400 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              Surge Pricing
            </h3>
            <p className="text-gray-300 mt-2">
              Earn more during peak hours and high-demand periods.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 flex items-start space-x-4">
          <Gift className="h-6 w-6 text-purple-400 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-purple-400">
              Tips & Bonuses
            </h3>
            <p className="text-gray-300 mt-2">
              Keep 100% of your tips and earn extra through promotions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-purple-400">
          Weekly Earnings Breakdown
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between py-3 border-b border-gray-800">
            <span className="text-gray-300">Trip Earnings</span>
            <span className="text-white font-semibold">$500-700</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-800">
            <span className="text-gray-300">Tips</span>
            <span className="text-white font-semibold">$50-100</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-800">
            <span className="text-gray-300">Bonuses</span>
            <span className="text-white font-semibold">$100-200</span>
          </div>
          <div className="flex justify-between py-3">
            <span className="text-gray-300">Potential Weekly Total</span>
            <span className="text-purple-400 font-bold">$650-1000</span>
          </div>
        </div>
      </div>
    </div>
    <div><Footer></Footer></div>
  </div>
);
}

export default Earnings