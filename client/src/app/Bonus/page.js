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
    
    <div>
        <CustomNavbar></CustomNavbar>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Driver Bonuses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Gift className="h-6 w-6 text-purple-400" />
              <h2 className="text-xl font-semibold text-purple-400">
                Sign-up Bonus
              </h2>
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
              <h2 className="text-xl font-semibold text-purple-400">
                Quest Rewards
              </h2>
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
              <h2 className="text-xl font-semibold text-purple-400">
                Surge Pricing
              </h2>
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
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">
            Weekly Bonus Calendar
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                      <span className="text-purple-400">{bonus.amount}</span>
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

