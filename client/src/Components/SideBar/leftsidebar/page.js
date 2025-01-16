// "use client"
// import { IoBarChartSharp } from "react-icons/io5";
// import { RiMoneyRupeeCircleFill } from "react-icons/ri";
// import { IoWalletSharp } from "react-icons/io5";
// import { IoPerson } from "react-icons/io5";
// import { FaStar } from "react-icons/fa6";
// import { Button } from "@nextui-org/react";
// import Link from "next/link";
//   import {
//     CircularProgress,
//     Card,
//     CardBody,
//     CardFooter,
//     Chip,
//   } from "@nextui-org/react";
// import React from "react";

// const LeftSideBar = () => {
//   return (
//     <div className="flex ">
//       <div className="flex  w-7">
//         <aside className="w-0.5 text-white p-2">
//           <main className="flex-grow  bg-gray-100 text-black">
//             <div className="sidebar   w-[16.5rem]">
//               <div className="rider-types flex justify-evenly gap-4">
//                 <div className="flex flex-col">
//                   <p className="font-bold">Bike </p>
//                   <p className="text-slate-600">5 Nearby</p>
//                   <p className="font-bold">$5</p>
//                 </div>
//                 <div className="flex flex-col">
//                   <p className="font-bold">Standard </p>
//                   <p className="text-slate-600">5 Nearby</p>
//                   <p className="font-bold">$8</p>
//                 </div>
//                 <div className="flex flex-col">
//                   <p className="font-bold">Premium </p>
//                   <p className="text-slate-600"> 5 Nearby</p>
//                   <p className="font-bold">$9</p>
//                 </div>
//               </div>

//               <div className="relative flex py-4 items-center">
//                 <div className="flex-grow border-t border-gray-500"></div>
//                 <div className="flex-grow border-t border-gray-600"></div>
//               </div>

//               <div className="flex flex-col gap-8">
//                 <div className="flex gap-2">
//                   <p>
//                     <IoBarChartSharp size={20} />
//                   </p>
//                   <p>Report</p>
//                 </div>

//                 <div className="flex gap-2">
//                   <p>
//                     <RiMoneyRupeeCircleFill size={20} />
//                   </p>
//                   <p>Prices</p>
//                 </div>

//                 <div className="flex gap-2">
//                   <p>
//                     <IoPerson size={20} />
//                   </p>
//                   <p>Audience</p>
//                 </div>
//               </div>
//               <div className="flex flex-col pt-5 pl-5 items-center gap-5">
//                 <FaStar size={60} className="" color="gold" />
//                 <p className="text-2xl">Go Premium Now!</p>
//                 <p className=" ">
//                   Let's explore the full report of your Transport Service
//                 </p>

//                 <div className="bg-gray-800  rounded-xl">
//                   <Button
//                     as={Link}
//                     className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1 hover:bg-green-700"
//                     href="/register"
//                     variant="flat"
//                   >
//                     Upgrade Now
//                   </Button>
//                 </div>

//               </div>
//             </div>
//           </main>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default LeftSideBar;

//mero code yo mathi ko ho hai

"use client";
import { Card } from "@nextui-org/react";
import { IoBarChartSharp, IoWalletSharp, IoPerson } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";

export default function LeftSideBar() {
  return (
    <div className="p-6 bg-white h-full">
      <div className="space-y-1 mb-8">
        <Card className="p-2">
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="font-bold">Bike</div>
              <div className="text-xs text-gray-500">15 min/ride</div>
              <div className="font-bold">$5.95</div>
            </div>
            <div className="text-center border-x">
              <div className="font-bold">Standard</div>
              <div className="text-xs text-gray-500">2 min/ride</div>
              <div className="font-bold">$8.95</div>
            </div>
            <div className="text-center">
              <div className="font-bold">Premium</div>
              <div className="text-xs text-gray-500">1 min/ride</div>
              <div className="font-bold">$9.95</div>
            </div>
          </div>
        </Card>
      </div>

      <nav className="space-y-2">
        <Link
          href="/dashboard/report"
          className="flex items-center gap-3 text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100"
        >
          <IoBarChartSharp className="h-5 w-5" />
          Report
        </Link>
        <Link
          href="/dashboard/prices"
          className="flex items-center gap-3 text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100"
        >
          <RiMoneyRupeeCircleFill className="h-5 w-5" />
          Prices
        </Link>
        <Link
          href="/dashboard/wallets"
          className="flex items-center gap-3 text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100"
        >
          <IoWalletSharp className="h-5 w-5" />
          Wallets
        </Link>
        <Link
          href="/dashboard/audience"
          className="flex items-center gap-3 text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100"
        >
          <IoPerson className="h-5 w-5" />
          Audience
        </Link>
      </nav>

      <div className="mt-auto pt-8">
        <Card className="bg-gray-50 p-4">
          <div className="text-center">
            <FaStar className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Go Premium Now!</h3>
            <p className="text-sm text-gray-600 mb-3">
              Let's explore the full report of your Transport Service
            </p>
            <button className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600">
              Upgrade Now
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
