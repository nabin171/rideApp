import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-black w-full h-72  flex gap-40 pl-20 pt-10">
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
        <div className="text-gray-200">Download</div>
        <div className="text-gray-400">
          <p>Windows app</p>
          <p>Windows app</p>
          <p>Windows app</p>
          <p>Windows app</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-gray-200">Get in touch</div>
        <div className="flex gap-2">
          <p>
            <FaFacebook className="text-white " size={20} />
          </p>
          <p>
            <FaInstagramSquare className="text-white " size={20} />
          </p>
          <p>
            <FaTwitter className="text-white " size={20} />
          </p>
          <p>
            <FaLinkedin className="text-white " size={20} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
