"use client";

import React, { useState } from "react";
import { Button, Divider } from "@nextui-org/react";

const page = () => {
  let [number, setNumber] = useState("");
  let [numberBackUp, setNumberBackUp] = useState("");

  const clear = () => {
    setNumber("");
    setNumberBackUp(number);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-black w-[14%]  flex flex-col gap-2 pb-2 ">
        <p className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 ">
          Calculator
        </p>
        <p className="rounded-3xl  flex justify-item-right text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
          {number}
        </p>

        <div className="flex gap-2">
          <Button onClick={clear} className="bg-orange-500">
            AC{" "}
          </Button>
          <Button
            className="bg-orange-500"
            onClick={() => {
              setNumber(number.slice(0, -1));
            }}
          >
            ⌫{" "}
          </Button>
          <Button
            className="bg-orange-500"
            onClick={() => {
              setNumber(number + "/");
            }}
          >
            /{" "}
          </Button>
          <Button
            className="bg-orange-500"
            onClick={() => {
              setNumber(eval(number / 100));
            }}
          >
            %{" "}
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              setNumber(number + "7");
            }}
          >
            7{" "}
          </Button>
          <Button
            onClick={() => {
              setNumber(number + "8");
            }}
          >
            8{" "}
          </Button>
          <Button
            onClick={() => {
              setNumber(number + "9");
            }}
          >
            9{" "}
          </Button>
          <Button
            className="bg-orange-500"
            onClick={() => {
              setNumber(number + "*");
            }}
          >
            *{" "}
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              setNumber(number + "4");
            }}
          >
            4{" "}
          </Button>
          <Button
            onClick={() => {
              setNumber(number + "5");
            }}
          >
            5{" "}
          </Button>
          <Button
            onClick={() => {
              setNumber(number + "6");
            }}
          >
            6{" "}
          </Button>
          <Button
            className="bg-orange-500"
            onClick={() => {
              setNumber(number + "-");
            }}
          >
            -{" "}
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            1{" "}
          </Button>
          <Button
            onClick={() => {
              setNumber(number + "2");
            }}
          >
            2{" "}
          </Button>
          <Button
            onClick={() => {
              setNumber(number + "3");
            }}
          >
            3{" "}
          </Button>

          <Button
            className="bg-orange-500"
            onClick={() => {
              setNumber(number + "+");
            }}
          >
            +{" "}
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => {
              setNumber(number + 0);
            }}
          >
            0{" "}
          </Button>
          <Button
            onClick={() => {
              setNumber(number + ".");
            }}
          >
            .{" "}
          </Button>
          <Button
            onClick={() => {
              setNumber(numberBackUp);
            }}
          >
            ANS{" "}
          </Button>
          <Button
            className="bg-orange-500"
            onClick={() => {
              setNumber(eval(number));
            }}
          >
            {" "}
            ={" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
