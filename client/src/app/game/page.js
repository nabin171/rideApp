"use client";
import GameCard from "@/Components/gameCard";
import Winner from "@/Components/winner";
import React from "react";
import { FaHandPaper } from "react-icons/fa";
import { FaHandRock } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { useSelector } from "react-redux";

const Page = () => {
  const { userSelection, selectionOptions } = useSelector(
    (state) => state.game
  );
  const computerSelection = Math.floor(Math.random() * 3);
  return (
    <div>
      you selected:{userSelection}
      {selectionOptions.map((item) => {
        return <GameCard  icon={<FaHandRock />} item={item} />;
      })}
      VS
      {computerSelection}
      <Winner></Winner>
    </div>
  );
};

export default Page;
