"use client";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";

import { Gift, Target, Award, Zap } from "lucide-react";
 const BonusPage=()=>{

  const bonusCalendar = [
    {
      day: "Monday",
      bonuses: [
        { time: "6AM - 9AM", amount: "+$30" },
        { time: "4PM - 7PM", amount: "+$40" },
      ],
    },
    {
      day: "Tuesday",
      bonuses: [
        { time: "7AM - 10AM", amount: "+$25" },
        { time: "5PM - 8PM", amount: "+$35" },
      ],
    },
    {
      day: "Wednesday",
      bonuses: [
        { time: "6AM - 9AM", amount: "+$30" },
        { time: "4PM - 7PM", amount: "+$40" },
      ],
    },
    {
      day: "Thursday",
      bonuses: [
        { time: "7AM - 10AM", amount: "+$25" },
        { time: "5PM - 8PM", amount: "+$35" },
      ],
    },
    {
      day: "Friday",
      bonuses: [
        { time: "6AM - 9AM", amount: "+$35" },
        { time: "4PM - 8PM", amount: "+$50" },
      ],
    },
    {
      day: "Weekend",
      bonuses: [
        { time: "8PM - 2AM", amount: "+$60" },
        { time: "2PM - 6PM", amount: "+$45" },
      ],
    },
  ]
  return (
    <div className="pb-4">
      <CustomNavbar></CustomNavbar>
      <div className="max-w-6xl mx-auto mt-6">
        <div className="flex justify-center ">
          <h2 className="heading text-right text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 m-1">
            Driver Bonuses
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-6">
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Gift className="h-6 w-6 text-purple-400" />
              <div className="flex justify-center">
                <h2 className="heading text-right text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 m-1">
                  Sign Up Bonuses
                </h2>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              New drivers can earn up to $1000 bonus after completing their
              first 100 rides.
            </p>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Progress</span>
                <span className="text-purple-400">0/100 rides</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-purple-400 rounded-full h-2 w-0"></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="h-6 w-6 text-purple-400" />
              <div className="flex justify-center">
                <h2 className="heading text-right text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 m-1">
                  Quest Rewards
                </h2>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Complete quests to earn extra rewards on top of your regular
              earnings.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-300">
                <span>Complete 20 trips</span>
                <span>+$50</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Complete 40 trips</span>
                <span>+$120</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>5 trips in a row</span>
                <span>+$30</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>7 trips in a row</span>
                <span>+$50</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="h-6 w-6 text-purple-400" />
              <div className="flex justify-center">
                <h2 className="heading text-right text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 m-1">
                  Surge Pricing
                </h2>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Earn more during high-demand periods with surge pricing
              multipliers.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-300">
                <span>1.5x multiplier</span>
                <span>Busy</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>2x multiplier</span>
                <span>Very Busy</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>3x multiplier</span>
                <span>Super Busy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8">
          <div className="flex justify-center">
            <h2 className="heading text-right text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 m-1">
          Weekly Bonus Calender
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-4">
            {bonusCalendar.map((day) => (
              <div key={day.day} className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {day.day}
                </h3>
                <div className="space-y-2">
                  {day.bonuses.map((bonus, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-gray-300"
                    >
                      <span>{bonus.time}</span>
                      <span className="text-purple-400 ">{bonus.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
  export default BonusPage

