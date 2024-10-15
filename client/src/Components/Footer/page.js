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
        <div>
          <img
            src="/mylogo.png"
            width={100}
            height={70}
            className="rounded m-1"
          ></img>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-gray-200">Driver</div>
          <div className="text-gray-400">
            <p>Earnings</p>
            <p>Cities</p>
            <p>Safety</p>
            <p>Bonus</p>
            <p>Application Requirements</p>
            <p>New Driver Guide</p>
            <p>Express Rewards</p>
            <p>Insurance</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-gray-200">Rider</div>
          <div className="text-gray-400">
            <p>Sign up to ride</p>
            <p>Business Profile</p>
            <p>Rewards</p>
            <p>Events</p>
            <p>Gift Cards</p>
            <p>Donate</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-gray-200">Get in touch</div>
            <div className="flex gap-2">
              <p>
                <FaFacebook
                  className="text-white "
                  onClick={() => router.push("https://www.facebook.com")}
                  size={20}
                />
              </p>
              <p>
                <FaInstagramSquare
                  className="text-white "
                  onClick={() => router.push("https://www.instagram.com")}
                  size={20}
                />
              </p>
              <p>
                <FaTwitter
                  className="text-white "
                  size={20}
                  onClick={() => router.push("https://www.twitter.com")}
                />
              </p>
              <p>
                <FaLinkedin
                  className="text-white "
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

            <div className="bg-indigo-300 w-32 rounded-xl flex justify-center">
              <button
                as={Link}
                className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1"
                href="/login"
                variant="flat"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <p>
            <MdLanguage size={20} className="text-white" />
          </p>
          <p className="text-white">EN</p>
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
