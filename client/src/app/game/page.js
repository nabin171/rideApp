"use client"
import GameCard from '@/Components/gameCard'
import Winner from '@/Components/winner';
import { FireExtinguisher, Paperclip, Rocket } from 'lucide-react';
import React from 'react'
import { FaHandPaper } from "react-icons/fa";
import { FaHandRock } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { useSelector } from 'react-redux';


const Page = () => {
  const {userSelection}=useSelector(state=>state.game)
  return (
    <div>
      you selected:{userSelection}
      <GameCard icon={<FaHandRock />} item="rock"></GameCard>
      <GameCard icon={<FaHandPaper />} item="paper"></GameCard>
      <GameCard icon={<FaHandScissors />} item="scissor"></GameCard>
      VS
      <Winner></Winner>
    </div>
  );
}

export default Page