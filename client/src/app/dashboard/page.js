// "use client";
// import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { useFormik } from "formik";
// import { IoNotificationsCircle } from "react-icons/io5";
// import { TbSettingsFilled } from "react-icons/tb";
// import { CardHeader, CardBody, Image, Input } from "@nextui-org/react";
// import { Divider, Tabs, Tab, Card } from "@nextui-org/react";
// import { IoBarChartSharp } from "react-icons/io5";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { IoWalletSharp } from "react-icons/io5";
// import { IoPerson } from "react-icons/io5";
// import { FaStar } from "react-icons/fa6";
// import { FaLocationDot, FaClock } from "react-icons/fa6";
// import { HiMiniCurrencyDollar } from "react-icons/hi2";

// import { MdLocationSearching } from "react-icons/md";

// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Button,
//   Checkbox,
// } from "@nextui-org/react";
// import { IoIosArrowDropdownCircle } from "react-icons/io";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownSection,
//   DropdownItem,
// } from "@nextui-org/dropdown";
// import { useRouter } from "next/navigation";

// import Link from "next/link";

// import CustomNavbar from "@/Components/NavBar/page";
// import LeftSideBar from "@/Components/SideBar/leftsidebar/page";
// import RightSideBar from "@/Components/SideBar/rightsidebar/page";

// const dashboard = () => {
//   const router = useRouter();
//   return (
//     <div className="container min-w-full h-[100%] bg-slate-200">
//       <div className=" bg-slate-800">
//         <CustomNavbar></CustomNavbar>
//       </div>

//       <div className="flex">
//         <div class="flex min-h-screen">
//           <main
//             style={{ height: "577px" }}
//             class="flex-grow w-[17.5rem]  bg-gray-100 "
//           >
//             <LeftSideBar />
//           </main>

//           <div className="">
//             <img src="/map.png" width={878} height={1100}></img>
//           </div>

  
//           <main
//             style={{ height: "577px" }}
//             class="flex-grow gap-8 w-[17.5rem]  bg-gray-100 "
//           >
//             <RightSideBar />
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default dashboard;



"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Tab,
  Tabs,
  Chip,
  Input,
  Avatar,
  Badge,
  Divider,
} from "@nextui-org/react";
import {
  MapPin,
  Clock,
  Car,
  CreditCard,
  Sun,
  Wind,
  Thermometer,
} from "lucide-react";
import { motion } from "framer-motion";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";

export default function Dashboard() {
  const [selectedVehicle, setSelectedVehicle] = useState("standard");
  const [weatherData] = useState({
    temperature: "25°C",
    condition: "Sunny",
    windSpeed: "10 km/h",
  });

  const vehicles = {
    economy: { price: 160, time: "10 min", icon: "🚗", color: "primary" },
    standard: { price: 200, time: "8 min", icon: "🚙", color: "secondary" },
    premium: { price: 300, time: "5 min", icon: "🚘", color: "success" },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      {/* <Navbar isBordered>
        <NavbarBrand>
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="font-bold text-inherit text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            RideHub
          </motion.p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Button variant="light">Dashboard</Button>
          </NavbarItem>
          <NavbarItem>
            <Button variant="light">History</Button>
          </NavbarItem>
          <NavbarItem>
            <Button variant="light">Settings</Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Avatar
              isBordered
              color="secondary"
              src="/placeholder.svg?height=32&width=32"
              size="sm"
            />
          </NavbarItem>
        </NavbarContent>
      </Navbar> */}
<CustomNavbar></CustomNavbar>
      <div className="container mx-auto py-6 px-4 grid gap-6 md:grid-cols-2">
        {/* Map Section */}
        <Card className="col-span-2 md:col-span-1">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md font-semibold">Live Map</p>
              <p className="text-small text-default-500">
                Track your ride in real-time
              </p>
            </div>
          </CardHeader>
          <CardBody className="p-0 aspect-video relative overflow-hidden">
            <div className="absolute inset-0 bg-black/5 backdrop-blur-sm">
              <div className="h-full w-full flex items-center justify-center text-default-500">
                Interactive Map View
              </div>
            </div>
          </CardBody>
        </Card>

        <div className="space-y-6">
          {/* Weather Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sun className="h-5 w-5" />
                <p className="text-md font-semibold">Weather Conditions</p>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-3 gap-4">
                <Chip
                  startContent={<Thermometer className="h-4 w-4" />}
                  variant="flat"
                  color="primary"
                >
                  {weatherData.temperature}
                </Chip>
                <Chip
                  startContent={<Sun className="h-4 w-4" />}
                  variant="flat"
                  color="warning"
                >
                  {weatherData.condition}
                </Chip>
                <Chip
                  startContent={<Wind className="h-4 w-4" />}
                  variant="flat"
                  color="secondary"
                >
                  {weatherData.windSpeed}
                </Chip>
              </div>
            </CardBody>
          </Card>

          {/* Vehicle Selection */}
          <Card>
            <CardHeader>
              <p className="text-md font-semibold">Select Your Ride</p>
            </CardHeader>
            <CardBody>
              <Tabs
                aria-label="Vehicle options"
                color="secondary"
                variant="bordered"
                className="w-full"
              >
                {Object.entries(vehicles).map(([type, details]) => (
                  <Tab
                    key={type}
                    title={type.charAt(0).toUpperCase() + type.slice(1)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-default-100 mt-4"
                    >
                      <div className="flex justify-between items-center">
                        <div className="text-2xl">{details.icon}</div>
                        <Badge color={details.color} variant="flat">
                          {details.time} away
                        </Badge>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-2xl font-bold">
                          ₹{details.price}
                        </span>
                        <Button
                          color={details.color}
                          variant="flat"
                          onClick={() => setSelectedVehicle(type)}
                        >
                          Select {type}
                        </Button>
                      </div>
                    </motion.div>
                  </Tab>
                ))}
              </Tabs>
            </CardBody>
          </Card>

          {/* Journey Details */}
          <Card>
            <CardHeader>
              <p className="text-md font-semibold">Journey Details</p>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <Input
                  startContent={<MapPin className="h-4 w-4" />}
                  label="From"
                  placeholder="Current Location"
                  variant="bordered"
                />
                <Input
                  startContent={<MapPin className="h-4 w-4" />}
                  label="To"
                  placeholder="Office"
                  variant="bordered"
                />
                <Divider className="my-4" />
                <div className="flex items-center gap-4">
                  <Chip
                    startContent={<Clock className="h-4 w-4" />}
                    variant="flat"
                  >
                    10 mins
                  </Chip>
                  <Chip
                    startContent={<Car className="h-4 w-4" />}
                    variant="flat"
                  >
                    2.6 km
                  </Chip>
                  <Chip
                    startContent={<CreditCard className="h-4 w-4" />}
                    variant="flat"
                  >
                    Cash
                  </Chip>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Action Button */}
          <Button
            color="secondary"
            size="lg"
            className="w-full"
            variant="shadow"
          >
            Confirm Booking
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

