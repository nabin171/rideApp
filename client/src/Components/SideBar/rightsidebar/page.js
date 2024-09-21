import { FaLocationDot, FaClock } from "react-icons/fa6";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { MdLocationSearching } from "react-icons/md";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import React from "react";
const RightSideBar = () => {
  return (
    <div className="flex flex-col gap-1 pl-2">
      <div className="flex gap-8 ">
        <div className="flex gap-2">
          <FaLocationDot size={20} />
          <p>2.6km</p>
        </div>
        <div className="flex gap-2">
          <FaClock size={20} />
          <p>10.m</p>
        </div>
        <div className="flex gap-2">
          <HiMiniCurrencyDollar size={20} />
          <p>160</p>
        </div>
      </div>
      <div className="rightbar flex flex-col">
        <div className="flex gap-2">
          <div className="circle flex flex-col items-center justify-center">
            <div className="bg-blue-600 h-4 w-4 rounded-full flex items-center justify-center">
              <div className="rounded-full bg-white h-2 w-2 items-center"></div>
            </div>
            <div className="line h-20  bg-slate-500 w-[1px] "></div>

            <div className="bg-blue-600 h-4 w-4 rounded-full flex items-center justify-center">
              <div className="rounded-full bg-white h-2 w-2 items-center"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-sm ">Pickup Point</p>
              <p className="font-bold "> Pickup Point</p>
              <div className="flex justify-center items-center">
                <div className="line border-dashed border-1 h-[1px] bg-slate-500 w-[225px] pl-4"></div>
                <p>
                  <MdLocationSearching size={20} />
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm ">Pickup Off</p>
                <p className="font-bold "> Where you want to go? </p>
              </div>
              <div className="flex justify-between">
                <Button className="bg-slate-100">
                  <Link as={Button} href="/">
                    Home
                  </Link>
                </Button>
                <Button className="bg-red-500 ">
                  <Link as={Button} href="/">
                    Office
                  </Link>
                </Button>
                <Button className="bg-slate-100">
                  <Link as={Button} href="/">
                    Others
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-bold "> Payment Method </p>
          <div className="flex">
            <img
              src="/pic1.png"
              width={60}
              height={20}
              className="rounded m-1"
            ></img>
            <img
              src="/mastercard.svg"
              width={60}
              height={10}
              className="rounded m-1"
            ></img>
            <img
              src="/paypal.svg"
              width={60}
              height={30}
              className="rounded m-1"
            ></img>
            <img
              src="/p4.png"
              width={60}
              height={30}
              className="rounded m-1"
            ></img>
          </div>
        </div>
        <div className="">
          <p className="font-bold "> Select Car </p>
          <div className="flex">
            <img
              src="/taxi2.jpeg"
              width={120}
              height={100}
              className="rounded m-1"
            ></img>
            <img
              src="/taxi2.jpeg"
              width={120}
              height={90}
              className="rounded m-1"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightSideBar;
