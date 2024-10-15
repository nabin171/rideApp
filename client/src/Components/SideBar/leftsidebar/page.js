import { IoBarChartSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import Link from "next/link";
  import {
    CircularProgress,
    Card,
    CardBody,
    CardFooter,
    Chip,
  } from "@nextui-org/react";
import React from "react";

const LeftSideBar = () => {
  return (
    <div className="flex ">
      <div class="flex  w-7">
        <aside class="w-0.5 text-white p-2">
          <main class="flex-grow  bg-gray-100 text-black">
            <div className="sidebar   w-[16.5rem]">
              <div className="rider-types flex justify-evenly gap-4">
                <div className="flex flex-col">
                  <p className="font-bold">Bike </p>
                  <p className="text-slate-600">5 Nearby</p>
                  <p className="font-bold">$5</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Standard </p>
                  <p className="text-slate-600">5 Nearby</p>
                  <p className="font-bold">$8</p>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Premium </p>
                  <p className="text-slate-600"> 5 Nearby</p>
                  <p className="font-bold">$9</p>
                </div>
              </div>

              <div class="relative flex py-4 items-center">
                <div class="flex-grow border-t border-gray-500"></div>
                <div class="flex-grow border-t border-gray-600"></div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                  <p>
                    <IoBarChartSharp size={20} />
                  </p>
                  <p>Report</p>
                </div>

                <div className="flex gap-2">
                  <p>
                    <RiMoneyRupeeCircleFill size={20} />
                  </p>
                  <p>Prices</p>
                </div>

    <Card className="w-[150px] h-[150px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          2800 Data points
        </Chip>
      </CardFooter>
    </Card>
  
                <div className="flex gap-2">
                  <p>
                    <IoPerson size={20} />
                  </p>
                  <p>Audience</p>
                </div>
              </div>
              <div className="flex flex-col pt-5 pl-5 items-center gap-5">
                <FaStar size={60} className="" color="gold" />
                <p className="text-2xl">Go Premium Now!</p>
                <p className=" ">
                  Let's explore the full report of your Transport Service
                </p>

                <div className="bg-gray-800  rounded-xl">
                  <Button
                    as={Link}
                    className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1 hover:bg-green-700"
                    href="/register"
                    variant="flat"
                  >
                    Upgrade Now
                  </Button>
                </div>

                
              </div>
            </div>
          </main>
        </aside>
      </div>
    </div>
  );
};

export default LeftSideBar;
