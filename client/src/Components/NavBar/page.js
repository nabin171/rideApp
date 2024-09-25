"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { IoMdSettings } from "react-icons/io";
import { HiSupport } from "react-icons/hi";

import { FaBoltLightning } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { MdFeedback } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

import { Navbar as NextUINavbar, Button } from "@nextui-org/react";
import {
  FaChevronDown,
  FaLock,
  FaChartLine,
  FaBolt,
  FaServer,
  FaUserTag,
  FaBalanceScale,
} from "react-icons/fa"; // Importing icons from react-icons

const CustomNavbar = () => {
  const icons = {
    chevron: <FaChevronDown size={16} />,
    scale: <FaBoltLightning className="text-warning" size={30} />,
    lock: <RiCalendarScheduleLine className="text-success" size={30} />,
    activity: <MdPayment className="text-secondary" size={30} />,
    flash: <MdOutlineStarRate className="text-primary" size={30} />,
    server: <FaHistory className="text-success" size={30} />,
    user: <FaCircleUser className="text-danger" size={30} />,
  };
  const user = {
    settings: <IoMdSettings size={16} />,
    wallet: <FaWallet size={16} />,
    promo: <IoMdPricetags size={16} />,
    support: <HiSupport size={16} />,
    help: <MdFeedback size={16} />,
    logout: <IoLogOut size={16} />,
  };

  return (
    <NextUINavbar className="bg-black ">
      <Button className="bg-black" as={Link} href="/">
        <NavbarBrand>
          <img
            src="/mylogo.png"
            width={100}
            height={70}
            className="rounded m-1"
          ></img>
        </NavbarBrand>
      </Button>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-pink-400 text-base   "
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Our Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="On-Demand Rides:"
              description="Users can request a ride immediately, and the app connects them with the nearest available driver."
              startContent={icons.scale}
            >
              On-Demand Rides
            </DropdownItem>
            <DropdownItem
              key="Ride Scheduling:"
              description="Plan your rides in advance by scheduling them at a specific time and date."
              startContent={icons.lock}
            >
              Ride Scheduling
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ExpressRides offers a variety of payment options, including credit cards, debit cards, and digital wallets."
              startContent={icons.activity}
            >
              Payment Options
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="You can rate your drivers after each ride, helping to maintain quality standards."
              startContent={icons.flash}
            >
              Driver Ratings:
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Access your past ride history, including details like dates, times, fares, and driver information."
              startContent={icons.server}
            >
              Ride History:
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Button
            as={Link}
            className=" bg-clip-text text-base text-transparent bg-gradient-to-r from-pink-500 to-blue-500"
            href="/login"
            variant="flat"
          >
            Driver
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            className=" bg-clip-text text-base text-transparent bg-gradient-to-r from-pink-500 to-blue-500"
            href="/login"
            variant="flat"
          >
            Rider
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            className=" bg-clip-text text-base text-transparent bg-gradient-to-r from-pink-500 to-blue-500"
            href="/AboutUs"
            variant="flat"
          >
            About Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className=" bg-clip-text text-base text-transparent bg-gradient-to-r from-pink-500 to-blue-500"
            href="/login"
            variant="flat"
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-clip-text text-base text-transparent bg-gradient-to-r from-pink-500 to-blue-500"
            href="/register"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">karki0008@gmail.com</p>
            </DropdownItem>

            <DropdownItem
              key="On-Demand Rides:"
              description=""
              startContent={user.settings}
            >
              My settings
            </DropdownItem>

            <DropdownItem
              key="On-Demand Rides:"
              description=""
              startContent={user.wallet}
            >
              Wallet
            </DropdownItem>

            <DropdownItem
              key="On-Demand Rides:"
              description=""
              startContent={user.promo}
            >
              Promocode
            </DropdownItem>

            <DropdownItem
              key="On-Demand Rides:"
              description=""
              startContent={user.support}
            >
              Support
            </DropdownItem>
            <DropdownItem
              key="On-Demand Rides:"
              description=""
              startContent={user.help}
            >
              Help and Feedback
            </DropdownItem>

            <DropdownItem
              key="On-Demand Rides:"
              description=""
              startContent={user.logout}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NextUINavbar>
  );
};

export default CustomNavbar;
