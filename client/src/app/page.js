import CustomNavbar from '@/Components/NavBar/page'
import { IoBarChartSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'

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
      <div className="flex pl-48 pt-28 bg-gray-100 ">
        <div className='flex flex-col w-1/2 gap-4'>
          <p className="font-semibold">DRIVE WITH EXPRESS RIDES</p>
          <p className="text-3xl font-bold">Set your own hours. Earn on<br></br> your own terms.</p>
          

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
                </div>



        </div>
        <div>

        </div>
      </div>
    </div>
  );
} 

export default homepage