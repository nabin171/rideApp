import { IoBarChartSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import Link from "next/link";

import React from "react";

const LeftSideBar = () => {
  return (
    <div className="flex ">
      <div class="flex  w-7">
        <aside class="w-0.5 text-white p-4">
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

                <div className="flex gap-2">
                  <p>
                    <IoWalletSharp size={20} />
                  </p>
                  <p>Wallets</p>
                </div>
                <div className="flex gap-2">
                  <p>
                    <IoPerson size={20} />
                  </p>
                  <p>Audience</p>
                </div>
              </div>
              <div className="flex flex-col pt-10 pl-5 items-center gap-5">
                <FaStar size={60} className="" color="gold" />
                <p className="text-2xl">Go Premium Now!</p>
                <p className=" ">
                  Let's explore the full report of your Transport Service
                </p>
                <Button className="w-30 hover:bg-green-700" color="primary">
                  <Link as={Button} href="/">
                    Upgrade Now
                  </Link>
                </Button>
              </div>
            </div>
          </main>
        </aside>
      </div>
    </div>
  );
};

export default LeftSideBar;
