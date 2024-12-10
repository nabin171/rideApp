'use client'
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Divider } from "@nextui-org/react";
import { FaCopyright } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter()
  return (
    <div className="flex flex-col bg-black">
      <div className=" w-full h-72 flex gap-32 pl-20 pt-10">
        <Button className="bg-black" as={Link} href="/">
          <img
            src="/mylogo.png"
            width={100}
            height={70}
            className="rounded m-1 cursor-pointer"
          ></img>
        </Button>

        <div className="flex flex-col gap-2">
          <div
            className="text-gray-200 cursor-pointer"
            onClick={() => router.push("/Driver")}
          >
            Driver
          </div>

          <div className="text-gray-400">
            <p
              className="cursor-pointer"
              onClick={() => router.push("/Earnings")}
            >
              Earnings
            </p>

            <p
              className="cursor-pointer"
              onClick={() => router.push("/Cities")}
            >
              Cities
            </p>

            <p
              className="cursor-pointer"
              onClick={() => router.push("/Safety")}
            >
              Safety
            </p>

            <p className="cursor-pointer" onClick={() => router.push("/Bonus")}>
              Bonus
            </p>
            <p
              className="cursor-pointer"
              onClick={() => router.push("/Requirements")}
            >
              Requirements
            </p>
            <p className="cursor-pointer" onClick={() => router.push("/Guide")}>
              New Driver Guide
            </p>


            <p className="cursor-pointer">Express Rewards</p>
            <p className="cursor-pointer">Insurance</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-gray-200">Rider</div>
          <div className="text-gray-400">
            <p
              className="cursor-pointer"
              onClick={() => router.push("/SignUpToRide")}
            >
              Sign up to ride
            </p>
            <p className="cursor-pointer">Business Profile</p>
            <p className="cursor-pointer">Rewards</p>
            <p className="cursor-pointer">Events</p>
            <p className="cursor-pointer">Gift Cards</p>
            <p className="cursor-pointer">Donate</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-gray-200">Get in touch</div>
            <div className="flex gap-2">
              <p>
                <FaFacebook
                  className="text-white cursor-pointer"
                  onClick={() => router.push("https://www.facebook.com")}
                  size={20}
                />
              </p>
              <p>
                <FaInstagramSquare
                  className="text-white cursor-pointer"
                  onClick={() => router.push("https://www.instagram.com")}
                  size={20}
                />
              </p>
              <p>
                <FaTwitter
                  className="text-white cursor-pointer"
                  size={20}
                  onClick={() => router.push("https://www.twitter.com")}
                />
              </p>
              <p>
                <FaLinkedin
                  className="text-white cursor-pointer"
                  onClick={() => router.push("https://www.linkedln.com")}
                  size={20}
                />
              </p>
            </div>
          </div>
          <div className="flex  flex-col gap-4">
            <Input
              type="email"
              placeholder="Enter your email address "
              className="max-w-xs w-60 "
              id="email"
              name="email"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <MdEmail />
                </div>
              }
            />

            <div className="bg-gray-300 w-32 rounded-xl flex justify-center">
              <button
                as={Link}
                className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1"
                href="/#"
                variant="flat"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <p className="cursor-pointer">
            <MdLanguage size={20} className="text-white" />
          </p>
          <p className="text-white cursor-pointer">EN</p>
        </div>
      </div>
      <div>
        <div class="">
          <hr class="border-t-2 border-gray-700 w-full" />
        </div>
        <div className="flex gap-2 justify-center pt-2 pb-2">
          <FaCopyright className="text-gray-400 " size={20} />
          <p className="text-gray-400">Copyright,All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
