import CustomNavbar from '@/Components/NavBar/page'
import { IoBarChartSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { BsCashCoin } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import { IoMdSettings } from "react-icons/io";

import { IoMdTime } from "react-icons/io";

const productlist = [
  { id: 1, productName: "hakins", price: 20 },
  { id: 2, productName: "hakiddns", price: 20 },
  { id: 2, productName: "hakiddsddns", price: 10 },
];

const homepage = () => {
  return (
    <div>
      <div className="nav">
        <CustomNavbar></CustomNavbar>
      </div>
      <div className="flex pt-10">
        <div className="pic ">
          <img src="/p21.png" width={720} height={1000}></img>
        </div>

        <div className=" w-1/2 flex flex-col justify-center align-middle items-center ">
          <p className="text-5xl font-sans font-medium">Let's Ride</p>

          <div className="flex  gap-4 pt-10 ">
            <div className="bg-gray-800 rounded-xl">
              <Button
                as={Link}
                className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1"
                href="/register"
                variant="flat"
              >
                Apply to drive
              </Button>
            </div>

            <div className="bg-gray-800  rounded-xl">
              <Button
                as={Link}
                className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1 "
                href="/register"
                variant="flat"
              >
                Sign up to drive
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pl-48 pt-28  ">
        <div className="flex flex-col w-1/2 gap-4">
          <p className="font-semibold">DRIVE WITH EXPRESS RIDES</p>
          <p className="text-3xl font-bold">
            Set your own hours. Earn on<br></br> your own terms.
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex gap-2">
              <p>
                <BsCashCoin size={20} />
              </p>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Reliable Earnings:</p>
                <p className="text-gray-500">
                  Make money, keep your tips, and cash out when you want.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <p>
                <IoMdTime size={20} />
              </p>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">A flexbile Schedule:</p>
                <p className="text-gray-500">
                  Be your own boss and drive whenever it works for you.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <p>
                <RxLightningBolt size={20} />
              </p>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Get paid instantly:</p>
                <p className="text-gray-500">
                  Cash out your earnings whenever you want.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="bg-gray-800 rounded-xl">
                <Button
                  as={Link}
                  className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1"
                  href="/register"
                  variant="flat"
                >
                  Apply to drive
                </Button>
              </div>
              <p className="font-semibold flex">How driver pay works </p>
              <p>
                <FaArrowRight size={20} />{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="/d1.png" width={720} height={600}></img>
        </div>
      </div>
      <div className="pl-48 pt-16">
        <div className="flex gap-24 items-center">
          <div className="flex flex-col items-center gap-5">
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <p className="text-gray-400 text-center">
              “My motto is very simple. It doesn't cost <br></br>you a penny to
              be nice and kind, but it<br></br> will cost you everything if{" "}
              you're not. <br></br>If I'm free and somebody needs my help,
              <br></br> I'll be the first one to jump in, in a<br></br>{" "}
              heartbeat.”
            </p>
            <div className="flex flex-col text-center">
              <p className="text-gray-400 font-medium">- Taylor</p>
              <p className="text-gray-400 italic">
                Driving with ExpressRides since 2019
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              size="lg"
            />

            <p className="text-gray-500 text-center">
              “As a student, it’s hard to complete my <br></br>class work around
              a schedule. I started <br></br>driving more with ExpressRides and
              realized it<br></br> was the perfect opportunity to make <br></br>
              money and work on my own time! <br></br>Driving with ExpressRides
              gives me freedom in <br></br>my schedule to focus on school, which
              <br></br> is my main priority."
            </p>
            <div className="flex flex-col text-center">
              <p className="text-gray-400 font-medium">- Harry</p>
              <p className="text-gray-400 italic">
                Driving with ExpressRides since 2020
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <p className="text-gray-400 text-center">
              “My motto is very simple. It doesn't cost <br></br>you a penny to
              be nice and kind, but it<br></br> will cost you everything if{" "}
              you're not. <br></br>If I'm free and somebody needs my help,
              <br></br> I'll be the first one to jump in, in a<br></br>{" "}
              heartbeat.”
            </p>
            <div className="flex flex-col text-center">
              <p className="text-gray-400 font-medium">- Marry</p>
              <p className="text-gray-400 italic">
                Driving with ExpressRides since 2015
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default homepage