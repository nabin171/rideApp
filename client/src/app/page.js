import CustomNavbar from '@/Components/NavBar/page'
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
    </div>
  );
} 

export default homepage