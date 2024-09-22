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
      <div className="flex p-16">
        <div className="pic ">
          <img src="/p2.png" width={700} height={1000}></img>
        </div>
        <div className="flex flex-col">
          <p className="text-5xl pt-10 pl-36 font-sans font-medium">
            Let's Ride
          </p>

          <div className="flex pl-36 pt-10 gap-4 ">
            <Button
              as={Link}
              className="text-xl bg-black rounded-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to blue-500"
              href="/register"
              variant="flat"
            >
              Apply to drive
            </Button>

            <Button
              as={Link}
              className="text-xl bg-black rounded-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to blue-500"
              href="/register"
              variant="flat"
            >
              Sign up to ride
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default homepage