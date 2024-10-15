"use client"
import CustomNavbar from "@/Components/NavBar/page";
import { IoBarChartSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import { IoMdSettings } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import Footer from "@/Components/Footer/page";
import { useRouter } from "next/navigation";

const homepage = () => {
  const router = useRouter()
  return (
    <div className="relative ">
      <CustomNavbar></CustomNavbar>

      <div className="flex pt-10 pl-20 ">
        <div className="pic ">
          <img src="/p2.webp" width={720} height={1000}></img>
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
      <div className="flex pl-20 pt-28  ">
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
              <div onClick={() => router.push("https://www.instagram.com")} className="flex gap-2 cursor-pointer">
                <p className="font-semibold flex">How driver pay works </p>
                <p>
                  <FaArrowRight size={20} />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/r41.png" width={720} height={600}></img>
        </div>
      </div>
      <div className="footer pt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default homepage;
