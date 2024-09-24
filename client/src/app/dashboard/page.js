"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useFormik } from "formik";
import { IoNotificationsCircle } from "react-icons/io5";
import { TbSettingsFilled } from "react-icons/tb";
import { CardHeader, CardBody, Image, Input } from "@nextui-org/react";
import { Divider, Tabs, Tab, Card } from "@nextui-org/react";
import { IoBarChartSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { HiMiniCurrencyDollar } from "react-icons/hi2";

import { MdLocationSearching } from "react-icons/md";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Checkbox,
} from "@nextui-org/react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";

import Link from "next/link";

import CustomNavbar from "@/Components/NavBar/page";
import LeftSideBar from "@/Components/SideBar/leftsidebar/page";
import RightSideBar from "@/Components/SideBar/rightsidebar/page";

const dashboard = () => {
  const router = useRouter();
  return (
    <div className="container min-w-full h-[100%] bg-slate-200">
      <div className=" bg-slate-800">
        <CustomNavbar></CustomNavbar>
      </div>

      <div className="flex">
        <div class="flex min-h-screen">
          <main
            style={{ height: "577px" }}
            class="flex-grow w-[17.5rem]  bg-gray-100 "
          >
            <LeftSideBar />
          </main>

          <div className="">
            <img src="/map.png" width={878} height={1100}></img>
          </div>

          <main
            style={{ height: "577px" }}
            class="flex-grow gap-8 w-[17.5rem]  bg-gray-100 "
          >
            <RightSideBar />
          </main>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
