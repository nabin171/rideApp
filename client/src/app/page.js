// "use client";
// import { useState, useEffect } from "react";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardHeader,
//   Input,
//   Chip,
//   Badge,
//   Divider,
// } from "@nextui-org/react";
// import {
//   MapPin,
//   Clock,
//   Car,
//   Navigation,
//   Search,
//   ArrowRight,
//   Zap,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// import axios from "axios";

// export default function HomePage() {
//   // const mapStyles = { height: "70vh", width: "100%" };
//   // const defaultCenter = { lat: 27.6855, lng: 85.3448 }; // Broadway Infosys, Kathmandu, Nepal

//   const [placesOutputFrom, setPlacesOutputFrom] = useState([]);
//   const [placesOutputTo, setPlacesOutputTo] = useState([]);
//   const [cordsFrom, setCordsFrom] = useState({});
//   const [cordsTo, setCordsTo] = useState({});
//   const [distanceData, setDistanceData] = useState(0);
//   const [fromValue, setFromValue] = useState("");
//   const [toValue, setToValue] = useState("");
//   const [estimatedTime, setEstimatedTime] = useState(0);
//   const [directions, setDirections] = useState(null);

//   const fetchDirections = async () => {
//     if (!cordsFrom.lat || !cordsTo.lat) return;

//     const directionsService = new window.google.maps.DirectionsService();

//     directionsService.route(
//       {
//         origin: { lat: cordsFrom.lat, lng: cordsFrom.lon },
//         destination: { lat: cordsTo.lat, lng: cordsTo.lon },
//         travelMode: window.google.maps.TravelMode.DRIVING, // you can change to WALKING, BICYCLING, etc.
//       },
//       (result, status) => {
//         if (status === window.google.maps.DirectionsStatus.OK) {
//           setDirections(result);
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       }
//     );
//   };

//   const fetchPlacesName = async (text, type) => {
//     if (!text) {
//       if (type === "from") {
//         setPlacesOutputFrom([]);
//       } else {
//         setPlacesOutputTo([]);
//       }
//       return;
//     }
//     try {
//       const { data } = await axios.get(
//         `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`
//       );

//       if (type === "from") {
//         setPlacesOutputFrom(data.results || []);
//       } else {
//         setPlacesOutputTo(data.results || []);
//       }
//     } catch (error) {
//       console.error("Error fetching places:", error);
//       if (type === "from") {
//         setPlacesOutputFrom([]);
//       } else {
//         setPlacesOutputTo([]);
//       }
//     }
//   };

//   useEffect(() => {
//     function deg2rad(deg) {
//       return deg * (Math.PI / 180);
//     }
//     function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//       var R = 6371; // Radius of the earth in km
//       var dLat = deg2rad(lat2 - lat1);
//       var dLon = deg2rad(lon2 - lon1);
//       var a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(deg2rad(lat1)) *
//           Math.cos(deg2rad(lat2)) *
//           Math.sin(dLon / 2) *
//           Math.sin(dLon / 2);
//       var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       var d = R * c; // Distance in km
//       return d;
//     }

//     if (cordsFrom.lat && cordsTo.lat) {
//       const distance = getDistanceFromLatLonInKm(
//         cordsFrom.lat,
//         cordsFrom.lon,
//         cordsTo.lat,
//         cordsTo.lon
//       );
//       setDistanceData(distance);

//       // Calculate estimated time (4 minutes per km)
//       const time = Math.round(distance * 4);
//       setEstimatedTime(time);
//     }
//   }, [cordsFrom, cordsTo]);

//   // Helper function to format time
//   const formatTime = (minutes) => {
//     const hours = Math.floor(minutes / 60);
//     const mins = minutes % 60;
//     return hours > 0 ? `${hours} hr ${mins} min` : `${mins} min`;
//   };

//   return (
//     <div className="h-screen overflow-hidden bg-gradient-to-br  from-black via-gray-900 to-black ">
//       {/* Hero Section */}
//       <div className="pt-24 pb-4 h-full flex flex-col">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-6"
//         >
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
//               Your Ride,
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
//               Your Way
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//             Experience premium transportation with real-time tracking, instant
//             booking, and reliable service
//           </p>
//         </motion.div>

//         {/* Main Content Container */}
//         <div className="mx-2 sm:mx-4 lg:mx-8 xl:mx-12 px-6 lg:px-8 flex-1">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full">
//             {/* Map Section */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="order-2 lg:order-1 h-full"
//             >
//               <Card className="shadow-2xl border-0 overflow-hidden bg-white/80 backdrop-blur-sm h-full">
//                 <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white p-4">
//                   <div className="flex items-center justify-between w-full">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
//                         <Navigation className="h-5 w-5" />
//                       </div>
//                       <div>
//                         <p className="text-xl font-bold">Live Route</p>
//                         <p className="text-xs opacity-90">
//                           Track your journey in real-time
//                         </p>
//                       </div>
//                     </div>
//                     {distanceData > 0 && (
//                       <div className="flex gap-2">
//                         <Badge
//                           color="warning"
//                           variant="flat"
//                           className="bg-white/20 text-white border-white/30 text-xs"
//                         >
//                           {Math.round(distanceData)} km
//                         </Badge>
//                         <Badge
//                           color="success"
//                           variant="flat"
//                           className="bg-white/20 text-white border-white/30 text-xs"
//                         >
//                           {formatTime(estimatedTime)}
//                         </Badge>
//                       </div>
//                     )}
//                   </div>
//                 </CardHeader>

//                 <div className="flex-1">
//                   <LoadScript
//                     googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
//                   >
//                     <GoogleMap
//                       mapContainerStyle={{ height: "100%", width: "100%" }}
//                       center={
//                         cordsFrom.lat
//                           ? { lat: cordsFrom.lat, lng: cordsFrom.lon }
//                           : defaultCenter
//                       }
//                       zoom={cordsFrom.lat && cordsTo.lat ? 12 : 13}
//                       options={{
//                         styles: [
//                           {
//                             featureType: "all",
//                             elementType: "geometry.fill",
//                             stylers: [{ saturation: -15 }, { lightness: 15 }],
//                           },
//                         ],
//                       }}
//                     >
//                       {cordsFrom.lat && (
//                         <Marker
//                           position={{ lat: cordsFrom.lat, lng: cordsFrom.lon }}
//                           title="Pickup Location"
//                           icon={{
//                             url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
//                           }}
//                         />
//                       )}
//                       {cordsTo.lat && (
//                         <Marker
//                           position={{ lat: cordsTo.lat, lng: cordsTo.lon }}
//                           title="Drop-off Location"
//                           icon={{
//                             url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                           }}
//                         />
//                       )}
//                       {directions && (
//                         <DirectionsRenderer directions={directions} />
//                       )}
//                     </GoogleMap>
//                   </LoadScript>
//                 </div>
//               </Card>
//             </motion.div>

//             {/* Booking Panel */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="order-1 lg:order-2 h-full overflow-y-auto"
//             >
//               <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm p-2 h-full">
//                 <CardBody className="p-6">
//                   {/* Booking Header */}
//                   <div className="text-center mb-6">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.6, type: "spring" }}
//                       className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-3"
//                     >
//                       <Zap className="h-6 w-6 text-white" />
//                     </motion.div>
//                     <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
//                       Book Your Ride
//                     </h2>
//                     <p className="text-gray-600 text-sm">
//                       Enter locations to get started
//                     </p>
//                   </div>

//                   {/* Enhanced Location Inputs */}
//                   <div className="space-y-4 mb-6">
//                     {/* From Location */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.7 }}
//                       className="relative"
//                     >
//                       <Input
//                         startContent={
//                           <div className="flex items-center gap-2">
//                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                             <MapPin className="h-4 w-4 text-green-600" />
//                           </div>
//                         }
//                         label="Pickup Location"
//                         placeholder="Where are you starting from?"
//                         variant="bordered"
//                         size="md"
//                         value={fromValue}
//                         onChange={(e) => {
//                           setFromValue(e.target.value);
//                           fetchPlacesName(e.target.value, "from");
//                         }}
//                         classNames={{
//                           inputWrapper:
//                             "border-2 hover:border-green-400 focus-within:border-green-500 bg-gradient-to-r from-green-50/50 to-transparent",
//                         }}
//                       />
//                       {placesOutputFrom.length > 0 && (
//                         <motion.div
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="absolute z-50 mt-2 max-h-40 w-full overflow-y-auto bg-white border-2 border-green-200 rounded-xl shadow-2xl"
//                         >
//                           {placesOutputFrom.map((item, index) => (
//                             <motion.div
//                               key={index}
//                               whileHover={{ backgroundColor: "#f0fdf4" }}
//                               className="p-3 cursor-pointer border-b border-gray-100 last:border-b-0 transition-all"
//                               onClick={() => {
//                                 setFromValue(item.formatted);
//                                 setCordsFrom({ lat: item.lat, lon: item.lon });
//                                 setPlacesOutputFrom([]);
//                               }}
//                             >
//                               <div className="flex items-center gap-2">
//                                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//                                 <MapPin className="h-3 w-3 text-green-600" />
//                                 <span className="text-xs font-medium text-gray-700">
//                                   {item.formatted}
//                                 </span>
//                               </div>
//                             </motion.div>
//                           ))}
//                         </motion.div>
//                       )}
//                     </motion.div>

//                     {/* Direction Arrow */}
//                     <div className="flex justify-center">
//                       <motion.div
//                         animate={{ y: [0, -3, 0] }}
//                         transition={{ repeat: Infinity, duration: 2 }}
//                         className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
//                       >
//                         <ArrowRight className="h-4 w-4 text-white rotate-90" />
//                       </motion.div>
//                     </div>

//                     {/* To Location */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.8 }}
//                       className="relative"
//                     >
//                       <Input
//                         startContent={
//                           <div className="flex items-center gap-2">
//                             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
//                             <MapPin className="h-4 w-4 text-red-600" />
//                           </div>
//                         }
//                         label="Drop-off Location"
//                         placeholder="Where are you heading?"
//                         variant="bordered"
//                         size="md"
//                         value={toValue}
//                         onChange={(e) => {
//                           setToValue(e.target.value);
//                           fetchPlacesName(e.target.value, "to");
//                         }}
//                         classNames={{
//                           inputWrapper:
//                             "border-2 hover:border-red-400 focus-within:border-red-500 bg-gradient-to-r from-red-50/50 to-transparent",
//                         }}
//                       />
//                       {placesOutputTo.length > 0 && (
//                         <motion.div
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="absolute z-50 mt-2 max-h-40 w-full overflow-y-auto bg-white border-2 border-red-200 rounded-xl shadow-2xl"
//                         >
//                           {placesOutputTo.map((item, index) => (
//                             <motion.div
//                               key={index}
//                               whileHover={{ backgroundColor: "#fef2f2" }}
//                               className="p-3 cursor-pointer border-b border-gray-100 last:border-b-0 transition-all"
//                               onClick={() => {
//                                 setToValue(item.formatted);
//                                 setCordsTo({ lat: item.lat, lon: item.lon });
//                                 setPlacesOutputTo([]);
//                               }}
//                             >
//                               <div className="flex items-center gap-2">
//                                 <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
//                                 <MapPin className="h-3 w-3 text-red-600" />
//                                 <span className="text-xs font-medium text-gray-700">
//                                   {item.formatted}
//                                 </span>
//                               </div>
//                             </motion.div>
//                           ))}
//                         </motion.div>
//                       )}
//                     </motion.div>
//                   </div>

//                   {/* Trip Info */}
//                   {distanceData > 0 && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ delay: 0.9 }}
//                     >
//                       <Card className="mb-4 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border-2 border-purple-200/50 shadow-lg">
//                         <CardBody className="p-4">
//                           <h3 className="text-lg font-bold mb-3 text-gray-800 text-center">
//                             Trip Summary
//                           </h3>
//                           <Divider className="mb-3" />
//                           <div className="grid grid-cols-3 gap-3 text-center">
//                             <div className="flex flex-col items-center">
//                               <div className="p-2 bg-blue-100 rounded-full mb-1">
//                                 <Car className="h-4 w-4 text-blue-600" />
//                               </div>
//                               <span className="text-lg font-bold text-blue-600">
//                                 {Math.round(distanceData)}
//                               </span>
//                               <span className="text-xs text-gray-600">km</span>
//                             </div>
//                             <div className="flex flex-col items-center">
//                               <div className="p-2 bg-green-100 rounded-full mb-1">
//                                 <Clock className="h-4 w-4 text-green-600" />
//                               </div>
//                               <span className="text-lg font-bold text-green-600">
//                                 {formatTime(estimatedTime).split(" ")[0]}
//                               </span>
//                               <span className="text-xs text-gray-600">
//                                 {formatTime(estimatedTime).includes("hr")
//                                   ? "hours"
//                                   : "mins"}
//                               </span>
//                             </div>
//                             <div className="flex flex-col items-center">
//                               <div className="p-2 bg-purple-100 rounded-full mb-1">
//                                 <span className="text-lg font-bold text-purple-600">
//                                   ₹
//                                 </span>
//                               </div>
//                               <span className="text-lg font-bold text-purple-600">
//                                 {Math.round(160 * distanceData)}
//                               </span>
//                               <span className="text-xs text-gray-600">
//                                 fare
//                               </span>
//                             </div>
//                           </div>
//                         </CardBody>
//                       </Card>
//                     </motion.div>
//                   )}

//                   {/* Action Buttons */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1.0 }}
//                     className="space-y-3"
//                   >
//                     <Button
//                       size="lg"
//                       className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white font-bold text-lg shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-3xl"
//                       startContent={<Search className="h-5 w-5" />}
//                       isDisabled={!fromValue || !toValue}
//                     >
//                       Find Available Rides
//                     </Button>

//                     <Button
//                       size="lg"
//                       variant="bordered"
//                       className="w-full py-5 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold text-base hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
//                     >
//                       Schedule for Later
//                     </Button>
//                   </motion.div>

//                   {/* Quick Locations */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1.1 }}
//                     className="mt-6"
//                   >
//                     <h4 className="text-base font-semibold text-gray-700 mb-3 text-center">
//                       Quick Access
//                     </h4>
//                     <div className="flex flex-wrap gap-2 justify-center">
//                       {["🏠 Home", "💼 Work", "✈️ Airport", "🏥 Hospital"].map(
//                         (location) => (
//                           <motion.div
//                             key={location}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                           >
//                             <Chip
//                               variant="flat"
//                               className="cursor-pointer bg-gradient-to-r from-gray-100 to-gray-200 hover:from-purple-100 hover:to-blue-100 transition-all duration-300 text-gray-700 hover:text-purple-700 px-3 py-1 text-xs"
//                               onClick={() => {
//                                 setToValue(location.split(" ")[1]);
//                                 fetchPlacesName(location.split(" ")[1], "to");
//                               }}
//                             >
//                               {location}
//                             </Chip>
//                           </motion.div>
//                         )
//                       )}
//                     </div>
//                   </motion.div>
//                 </CardBody>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import axios from "axios";

const Page = () => {
  const [pickup, setPickup] = useState("");

  const fetchPlacesName = async (text) => {
    if (!text) return;

    try {
      const { data } = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
          text
        )}&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`
      );

      console.log("Full Geoapify API Response:", data); // <-- This shows everything
      console.log("Results Array:", data.results); // <-- Only the array of places
      if (data.results && data.results.length > 0) {
        console.log("First Result Coordinates:", {
          lat: data.results[0].lat,
          lon: data.results[0].lon,
        });
      }
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  return (
    <div className="pt-20 px-4 max-w-md">
      <input
        type="text"
        placeholder="Type a location"
        value={pickup}
        onChange={(e) => {
          setPickup(e.target.value);
          fetchPlacesName(e.target.value);
        }}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default Page;
