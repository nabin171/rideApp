import CustomNavbar from '@/Components/NavBar/page'
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'

const SignUpToRide = () => {
  return (
    <div>
      <div>
        {" "}
        <CustomNavbar></CustomNavbar>
      </div>
      <div className=" pt-20 flex justify-around ">
        <img src="/a9.png" width={600} height={400} className=""></img>
        <div>
          <h2 className=" pt-4 heading  text-right text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1">
           One App.<br></br>
           All the Rides
          </h2>
          <div className="bg-gray-800  rounded-xl w-56 text-center">
            <Button
              as={Link}
              className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1 "
              href="/register"
              variant="flat"
            >
              Sign Up As a Driver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpToRide