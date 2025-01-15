// "use client";
// import { useState, useEffect, useRef } from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Button,
//   Card,
//   CardBody,
//   CardHeader,
//   Tab,
//   Tabs,
//   Chip,
//   Input,
//   Avatar,
//   Badge,
//   Divider,
// } from "@nextui-org/react";
// import {
//   MapPin,
//   Clock,
//   Car,
//   CreditCard,
//   Sun,
//   Wind,
//   Thermometer,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import CustomNavbar from "@/Components/NavBar/page";
// import Footer from "@/Components/Footer/page";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import { FaLocationArrow } from "react-icons/fa";

// export default function Dashboard() {
//   const [selectedVehicle, setSelectedVehicle] = useState("standard");
//   const [weatherData] = useState({
//     temperature: "25°C",
//     condition: "Sunny",
//     windSpeed: "10 km/h",
//   });
//   const mapStyles = { height: "100vh", width: "100%" };
//   const defaultCenter = { lat: 27.6858, lng: 85.3449 }; // Broadway Infosys, Subidhanagar, Tinkune, Kathmandu, Nepal
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries: ["places"], // Make sure to include 'places' library
//   });
//   const [map, setMap] = useState(null);
//   const inputFromRef = useRef(null);
//   const inputToRef = useRef(null);

//   const vehicles = {
//     economy: { price: 160, time: "10 min", icon: "🚗", color: "primary" },
//     standard: { price: 200, time: "8 min", icon: "🚙", color: "secondary" },
//     premium: { price: 300, time: "5 min", icon: "🚘", color: "success" },
//   };

//   useEffect(() => {
//     if (isLoaded) {
//       // Initialize Autocomplete when Google Maps is loaded
//       const autocompleteFrom = new window.google.maps.places.Autocomplete(
//         inputFromRef.current
//       );
//       const autocompleteTo = new window.google.maps.places.Autocomplete(
//         inputToRef.current
//       );

//       // Add event listeners to handle the selection of places
//       autocompleteFrom.addListener("place_changed", () => {
//         const place = autocompleteFrom.getPlace();
//         if (place.geometry) {
//           console.log("Selected place for From:", place);
//         }
//       });

//       autocompleteTo.addListener("place_changed", () => {
//         const place = autocompleteTo.getPlace();
//         if (place.geometry) {
//           console.log("Selected place for To:", place);
//         }
//       });
//     }
//   }, [isLoaded]);

//   if (!isLoaded) {
//     return "Loading Map...";
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <CustomNavbar></CustomNavbar>
//       <div className="container mx-auto py-6 px-4 grid gap-6 md:grid-cols-2">
//         {/* Map Section */}
//         <Card className="col-span-2 md:col-span-1">
//           <CardHeader className="flex gap-3">
//             <div className="flex flex-col">
//               <p className="text-md font-semibold">Live Map</p>
//               <p className="text-small text-default-500">
//                 Track your ride in real-time
//               </p>
//             </div>
//           </CardHeader>

//           <GoogleMap
//             center={defaultCenter}
//             zoom={15}
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             onLoad={(map) => setMap(map)}
//           >
//             <Marker position={defaultCenter} />
//           </GoogleMap>
//         </Card>

//         <div className="space-y-6">
//           {/* Weather Card */}
//           <Card>
//             <CardHeader>
//               <div className="flex items-center gap-2">
//                 <Sun className="h-5 w-5" />
//                 <p className="text-md font-semibold">Weather Conditions</p>
//               </div>
//             </CardHeader>
//             <CardBody>
//               <div className="grid grid-cols-3 gap-4">
//                 <Chip
//                   startContent={<Thermometer className="h-4 w-4" />}
//                   variant="flat"
//                   color="primary"
//                 >
//                   {weatherData.temperature}
//                 </Chip>
//                 <Chip
//                   startContent={<Sun className="h-4 w-4" />}
//                   variant="flat"
//                   color="warning"
//                 >
//                   {weatherData.condition}
//                 </Chip>
//                 <Chip
//                   startContent={<Wind className="h-4 w-4" />}
//                   variant="flat"
//                   color="secondary"
//                 >
//                   {weatherData.windSpeed}
//                 </Chip>
//               </div>
//             </CardBody>
//           </Card>

//           {/* Vehicle Selection */}
//           <Card>
//             <CardHeader>
//               <p className="text-md font-semibold">Select Your Ride</p>
//             </CardHeader>
//             <CardBody>
//               <Tabs
//                 aria-label="Vehicle options"
//                 color="secondary"
//                 variant="bordered"
//                 className="w-full"
//               >
//                 {Object.entries(vehicles).map(([type, details]) => (
//                   <Tab
//                     key={type}
//                     title={type.charAt(0).toUpperCase() + type.slice(1)}
//                   >
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="p-4 rounded-lg bg-default-100 mt-4"
//                     >
//                       <div className="flex justify-between items-center">
//                         <div className="text-2xl">{details.icon}</div>
//                         <Badge color={details.color} variant="flat">
//                           {details.time} away
//                         </Badge>
//                       </div>
//                       <div className="mt-4 flex justify-between items-center">
//                         <span className="text-2xl font-bold">
//                           ₹{details.price}
//                         </span>
//                         <Button
//                           color={details.color}
//                           variant="flat"
//                           onClick={() => setSelectedVehicle(type)}
//                         >
//                           Select {type}
//                         </Button>
//                       </div>
//                     </motion.div>
//                   </Tab>
//                 ))}
//               </Tabs>
//             </CardBody>
//           </Card>

//           {/* Journey Details */}
//           <Card>
//             <CardHeader>
//               <p className="text-md font-semibold">Journey Details</p>
//             </CardHeader>
//             <CardBody>
//               <div className="space-y-4">
//                 <div>
//                   <Input
//                     ref={inputFromRef}
//                     startContent={<MapPin className="h-4 w-4" />}
//                     label="From"
//                     placeholder="Current Location"
//                     variant="bordered"
//                   />
//                 </div>
//                 <div>
//                   <Input
//                     ref={inputToRef}
//                     startContent={<MapPin className="h-4 w-4" />}
//                     label="To"
//                     placeholder="Office"
//                     variant="bordered"
//                   />
//                 </div>
//                 <Divider className="my-4" />
//                 <div className="flex items-center gap-4">
//                   <Chip
//                     startContent={<Clock className="h-4 w-4" />}
//                     variant="flat"
//                   >
//                     10 mins
//                   </Chip>
//                   <Chip
//                     startContent={<Car className="h-4 w-4" />}
//                     variant="flat"
//                   >
//                     2.6 km
//                   </Chip>
//                   <Chip
//                     startContent={
//                       <FaLocationArrow
//                         className="h-4 w-4"
//                         onClick={() => map.panTo(defaultCenter)}
//                       />
//                     }
//                     variant="flat"
//                   >
//                     {/* Your Chip content */}
//                   </Chip>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>

//           {/* Action Button */}
//           <Button
//             color="secondary"
//             size="lg"
//             className="w-full"
//             variant="shadow"
//           >
//             Confirm Booking
//           </Button>
//         </div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }

// //volt le deko

// import React, { useRef, useEffect, useState } from 'react';
// import { MapPin } from 'lucide-react';
// import { Input } from '@/components/ui/input';

// declare global {
//   interface Window {
//     google: any;
//   }
// }

// const LocationInput = () => {
//   const inputFromRef = useRef<HTMLInputElement>(null);
//   const inputToRef = useRef<HTMLInputElement>(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
//     script.async = true;
//     script.onload = () => {
//       setIsLoaded(true);
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   useEffect(() => {
//     let autocompleteFrom, autocompleteTo;

//     if (isLoaded && inputFromRef.current && inputToRef.current) {
//       autocompleteFrom = new window.google.maps.places.Autocomplete(
//         inputFromRef.current,
//         { types: ['geocode'] }
//       );
//       autocompleteTo = new window.google.maps.places.Autocomplete(
//         inputToRef.current,
//         { types: ['geocode'] }
//       );

//       autocompleteFrom.addListener('place_changed', () => {
//         const place = autocompleteFrom.getPlace();
//         if (place.geometry) {
//           console.log("Selected place for From:", place);
//         }
//       });

//       autocompleteTo.addListener('place_changed', () => {
//         const place = autocompleteTo.getPlace();
//         if (place.geometry) {
//           console.log("Selected place for To:", place);
//         }
//       });
//     }

//     return () => {
//       if (autocompleteFrom) {
//         window.google.maps.event.clearInstanceListeners(autocompleteFrom);
//       }
//       if (autocompleteTo) {
//         window.google.maps.event.clearInstanceListeners(autocompleteTo);
//       }
//     };
//   }, [isLoaded]);

//   return (
//     <>
//       <div className="relative">
//         <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//         <Input
//           ref={inputFromRef}
//           className="pl-10"
//           placeholder="From (Current Location)"
//         />
//       </div>
//       <div className="relative mt-4">
//         <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//         <Input
//           ref={inputToRef}
//           className="pl-10"
//           placeholder="To (Office)"
//         />
//       </div>
//     </>
//   );
// };

// export default LocationInput;
// "use client";
// import React, { useState } from "react";

// const page = () => {
//   const [color, setColor] = useState(true);

//   function colorChange() {
//     return setColor(!color);
//   }
//   if (color) {
//     <div className="bg-red-200">hh</div>;
//   } else {
//     <div className="bg-green-200">hh</div>;
//   }
//   return (
//     <div>
//       <p>You clicked {color} times</p>
//       <button onClick={colorChange()}>Click me</button>
//     </div>
//   );
// };

// export default page;
