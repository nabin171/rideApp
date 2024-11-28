import Footer from '@/Components/Footer/page';
import CustomNavbar from '@/Components/NavBar/page'
import { IoIosCheckmarkCircle } from "react-icons/io";

import React from 'react'
import { FaStar } from "react-icons/fa6";
import { Button } from '@nextui-org/react';
import Link from 'next/link';
const page = () => {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <div className="flex justify-center">
        <h2 className=" pt-4 heading  text-right text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1">
          Introducing Our Best Drivers
        </h2>
      </div>
      <div className="flex justify-around">
        <div className=" pt-4">
          <div className="pic bg-gray-200 w-72 rounded-lg flex flex-col">
            <img src="/a1.png" width={300} height={200}></img>
            <div className="flex gap-2 pt-2">
              <p className="pl-20 text-gray-500">5.0</p>
              <p className="flex">
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
              </p>
            </div>
            <p className=" pl-20 font-bold text-xl">Jerry Gomez</p>
            <p className="pl-20 text-gray-600">Driving since 2018</p>
          </div>
        </div>
        <div className=" pt-4">
          <div className="pic bg-gray-200 w-72 rounded-lg flex flex-col">
            <img src="/a2.png" width={300} height={200}></img>
            <div className="flex gap-2 pt-2">
              <p className="pl-20 text-gray-500">4.0</p>
              <p className="flex">
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
              </p>
            </div>
            <p className=" pl-20 font-bold text-xl">Harry Styles</p>
            <p className="pl-20 text-gray-600">Driving since 2020</p>
          </div>
        </div>
        <div className=" pt-4">
          <div className="pic bg-gray-200 w-72 rounded-lg flex flex-col">
            <img src="/a3.png" width={300} height={200}></img>
            <div className="flex gap-2 pt-2">
              <p className="pl-20 text-gray-500">4.0</p>
              <p className="flex">
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
              </p>
            </div>
            <p className=" pl-20 font-bold text-xl">Tejas Mehta</p>
            <p className="pl-20 text-gray-600">Driving since 2019</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className=" pt-20">
          <div className="pic bg-gray-200 w-72 rounded-lg flex flex-col">
            <img src="/a4.png" width={300} height={200}></img>
            <div className="flex gap-2 pt-2">
              <p className="pl-20 text-gray-500">4.0</p>
              <p className="flex">
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
              </p>
            </div>
            <p className=" pl-20 font-bold text-xl">Nate Thompson</p>
            <p className="pl-20 text-gray-600">Driving since 2018</p>
          </div>
        </div>
        <div className=" pt-20">
          <div className="pic bg-gray-200 w-72 rounded-lg flex flex-col">
            <img src="/a5.png" width={300} height={200}></img>
            <div className="flex gap-2 pt-2">
              <p className="pl-20 text-gray-500">5.0</p>
              <p className="flex">
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
                <FaStar size={20} className="" color="gold" />
              </p>
            </div>
            <p className=" pl-20 font-bold text-xl">Arthur Roux</p>
            <p className="pl-20 text-gray-600">Driving since 2020</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="pt-20 pl-20 relative">
          <img src="/a7.png" width={700} height={200} className=""></img>
          <img
            src="/a6.png"
            width={250}
            height={200}
            className="absolute top-[3%]  left-[92%] transform -translate-x-1/2"
          ></img>
        </div>
        <div>
          <h2 className=" pt-20 heading  text-right text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1">
            Explore the Benefits of Joining Our Driver Team
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex gap-2 pt-20">
              <IoIosCheckmarkCircle size={30} className="" color="pink" />
              <p className="text-xl">Flexible Schedule</p>
            </div>
            <div className="flex gap-2">
              <IoIosCheckmarkCircle size={30} className="" color="pink" />
              <p className="text-xl"> Passenger Referrals</p>
            </div>
            <div className="flex gap-2">
              <IoIosCheckmarkCircle size={30} className="" color="pink" />
              <p className="text-xl">Training and Development</p>
            </div>
            <div className="flex gap-2">
              <IoIosCheckmarkCircle size={30} className="" color="pink" />
              <p className="text-xl">Exclusive Rewards and Incentives</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-20 flex justify-around">
        <div className="pl-20">
          <img src="/a8.png" width={700} height={200} className=""></img>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="heading  text-right text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 ">
            Wanna Become A Part of Our Dedicated Team of <br></br>ExpressRides Drivers?
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
      <Footer></Footer>
    </div>
  );
}

export default page