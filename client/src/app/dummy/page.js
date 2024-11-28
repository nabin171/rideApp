// "use client";

// import React, { useState } from "react";
// import { Button, Divider } from "@nextui-org/react";

// const page = () => {
//   let [number, setNumber] = useState("");
//   let [numberBackUp, setNumberBackUp] = useState("");

//   const clear = () => {
//     setNumber("");
//     setNumberBackUp(number);
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div className="bg-black w-[14%]  flex flex-col gap-2 pb-2 ">
//         <p className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 ">
//           Calculator
//         </p>
//         <p className="rounded-3xl  flex justify-item-right text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
//           {number}
//         </p>

//         <div className="flex gap-2">
//           <Button onClick={clear} className="bg-orange-500">
//             AC{" "}
//           </Button>
//           <Button
//             className="bg-orange-500"
//             onClick={() => {
//               setNumber(number.slice(0, -1));
//             }}
//           >
//             ⌫{" "}
//           </Button>
//           <Button
//             className="bg-orange-500"
//             onClick={() => {
//               setNumber(number + "/");
//             }}
//           >
//             /{" "}
//           </Button>
//           <Button
//             className="bg-orange-500"
//             onClick={() => {
//               setNumber(eval(number / 100));
//             }}
//           >
//             %{" "}
//           </Button>
//         </div>

//         <div className="flex gap-2">
//           <Button
//             onClick={() => {
//               setNumber(number + "7");
//             }}
//           >
//             7{" "}
//           </Button>
//           <Button
//             onClick={() => {
//               setNumber(number + "8");
//             }}
//           >
//             8{" "}
//           </Button>
//           <Button
//             onClick={() => {
//               setNumber(number + "9");
//             }}
//           >
//             9{" "}
//           </Button>
//           <Button
//             className="bg-orange-500"
//             onClick={() => {
//               setNumber(number + "*");
//             }}
//           >
//             *{" "}
//           </Button>
//         </div>

//         <div className="flex gap-2">
//           <Button
//             onClick={() => {
//               setNumber(number + "4");
//             }}
//           >
//             4{" "}
//           </Button>
//           <Button
//             onClick={() => {
//               setNumber(number + "5");
//             }}
//           >
//             5{" "}
//           </Button>
//           <Button
//             onClick={() => {
//               setNumber(number + "6");
//             }}
//           >
//             6{" "}
//           </Button>
//           <Button
//             className="bg-orange-500"
//             onClick={() => {
//               setNumber(number + "-");
//             }}
//           >
//             -{" "}
//           </Button>
//         </div>

//         <div className="flex gap-2">
//           <Button
//             onClick={() => {
//               setNumber(number + 1);
//             }}
//           >
//             1{" "}
//           </Button>
//           <Button
//             onClick={() => {
//               setNumber(number + "2");
//             }}
//           >
//             2{" "}
//           </Button>
//           <Button
//             onClick={() => {
//               setNumber(number + "3");
//             }}
//           >
//             3{" "}
//           </Button>

//           <Button
//             className="bg-orange-500"
//             onClick={() => {
//               setNumber(number + "+");
//             }}
//           >
//             +{" "}
//           </Button>
//         </div>

//         <div className="flex gap-2">
//           <Button
//             onClick={() => {
//               setNumber(number + 0);
//             }}
//           >
//             0{" "}
//           </Button>
//           <Button
//             onClick={() => {
//               setNumber(number + ".");
//             }}
//           >
//             .{" "}
//           </Button>
//           <Button
//             onClick={() => {
//               setNumber(numberBackUp);
//             }}
//           >
//             ANS{" "}
//           </Button>
//           <Button
//             className="bg-orange-500"
//             onClick={() => {
//               setNumber(eval(number));
//             }}
//           >
//             {" "}
//             ={" "}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

import { Bell, Settings, MapPin, Clock, DollarSign } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex h-full">
      {/* Map Section */}
      <div className="flex-1 relative bg-gray-100">
        <div className="absolute top-4 left-4 right-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center p-3 border-b">
            <input
              type="search"
              placeholder="Search"
              className="flex-1 px-4 py-2 bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 p-4 bg-white rounded-lg shadow-sm max-w-md">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/placeholder.svg"
              alt="Taxi"
              width={200}
              height={120}
              className="rounded-lg"
            />
            <div>
              <div className="text-lg font-bold mb-1">TX - 363566355</div>
              <div className="text-gray-500">Yellow Taxis</div>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600">
            Details
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-96 border-l bg-white p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Bell className="h-6 w-6 text-gray-400" />
            <Settings className="h-6 w-6 text-gray-400" />
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="font-semibold">Jhon Smith</div>
              <div className="text-sm text-gray-500">Jhonsmith@gmail.com</div>
            </div>
            <Image
              src="/placeholder.svg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="flex justify-between mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-400" />
            <span>2.6 km</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-400" />
            <span>10m</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-gray-400" />
            <span>160</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="font-semibold mb-2">Pickup point</div>
            <div className="text-lg">Pisillo Cafe</div>
            <div className="text-gray-500">99 Nassau St, New York</div>
          </div>

          <div>
            <div className="font-semibold mb-2">Where you want to go?</div>
            <div className="flex gap-2 mb-2">
              <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                Home
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                Office
              </button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                Other
              </button>
            </div>
            <div className="text-lg">City Hall Park</div>
            <div className="text-gray-500">New York, NY 10007</div>
          </div>

          <div>
            <div className="font-semibold mb-4">Payment Method</div>
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="font-bold text-xs">VISA</span>
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="font-bold text-xs">GPay</span>
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="font-bold text-xs">PayPal</span>
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                <span className="font-bold text-xs">MC</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4">Select Car</div>
            <div className="flex gap-4">
              <div className="flex-1 p-3 border rounded-lg border-blue-500">
                <Image
                  src="/placeholder.svg"
                  alt="Economy"
                  width={100}
                  height={60}
                  className="mb-2"
                />
                <div className="text-sm">Economy</div>
                <div className="font-bold">$5.95</div>
              </div>
              <div className="flex-1 p-3 border rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Premium"
                  width={100}
                  height={60}
                  className="mb-2"
                />
                <div className="text-sm">Premium</div>
                <div className="font-bold">$8.95</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span>Spend Money</span>
              <span className="font-bold">$2,500.25</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Balance</span>
              <span className="font-bold">$147,000.00</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Cost Value</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-2 bg-green-400 rounded-full"></div>
                  <span>90%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Our Riders</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-yellow-400 rounded-full"></div>
                  <span>60%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Response</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-blue-400 rounded-full"></div>
                  <span>30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

