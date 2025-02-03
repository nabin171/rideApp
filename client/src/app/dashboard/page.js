"use client";
import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Tab,
  Tabs,
  Chip,
  Input,
  Badge,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
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
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";

export default function Dashboard() {
  const [selectedVehicle, setSelectedVehicle] = useState("standard");
  const [weatherData] = useState({
    temperature: "25°C",
    condition: "Sunny",
    windSpeed: "10 km/h",
  });
  const mapStyles = { height: "100vh", width: "100%" };
  const defaultCenter = { lat: 27.6855, lng: 85.3448 }; // Broadway Infosys, Kathmandu, Nepal
  const vehicles = {
    economy: { price: 100, time: "15 min", icon: "🚗", color: "primary" },
    standard: { price: 160, time: "12 min", icon: "🚙", color: "secondary" },
    premium: { price: 200, time: "10 min", icon: "🚘", color: "success" },
  };
  const [placesOutputFrom, setPlacesOutputFrom] = useState([]);
  const [placesOutputTo, setPlacesOutputTo] = useState([]);
  const [cordsFrom, setCordsFrom] = useState({});
  const [cordsTo, setCordsTo] = useState({});
  const [distanceData, setDistanceData] = useState(0);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  // Add a new state variable for estimated time
  const [estimatedTime, setEstimatedTime] = useState(0);
  const fetchPlacesName = async (text, type) => {
    if (!text) {
      if (type === "from") {
        setPlacesOutputFrom([]);
      } else {
        setPlacesOutputTo([]);
      }
      return;
    }
    try {
      const { data } = await axios.get(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&format=json&apiKey=490f9173e6a6441b98f94295be7b750d`
      );

      if (type === "from") {
        setPlacesOutputFrom(data.results || []);
      } else {
        setPlacesOutputTo(data.results || []);
      }
    } catch (error) {
      console.error("Error fetching places:", error);
      if (type === "from") {
        setPlacesOutputFrom([]);
      } else {
        setPlacesOutputTo([]);
      }
    }
  };

  useEffect(() => {
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1);
      var dLon = deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c; // Distance in km
      return d;
    }
    const distance = getDistanceFromLatLonInKm(
      cordsFrom.lat,
      cordsFrom.lon,
      cordsTo.lat,
      cordsTo.lon
    );
    setDistanceData(distance);

    // Calculate estimated time (4 minutes per km)
    const time = Math.round(distance * 4);
    setEstimatedTime(time);
  }, [cordsFrom?.lat, cordsTo?.lat]);

  // Helper function to format time
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours} hr ${mins} min` : `${mins} min`;
  };

  return (
    <div>
      <div className="Navbar">
        <CustomNavbar></CustomNavbar>
      </div>
      <div className="Container min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto py-8 px-4 grid gap-8 md:grid-cols-2"
        >
          {/* Map Section */}
          <Card className="col-span-2 md:col-span-1 rounded-2xl shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex flex-col">
                <p className="text-2xl font-bold">Live Map</p>
                <p className="text-md opacity-80">
                  Track your ride in real-time
                </p>
              </div>
            </CardHeader>

            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={mapStyles}
                center={defaultCenter}
                zoom={12}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            </LoadScript>
          </Card>

          <div className="space-y-8">
            {/* Weather Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="rounded-2xl shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-4">
                  <div className="flex items-center gap-2">
                    <Sun className="h-8 w-8" />
                    <h2 className="text-2xl font-bold">Weather Conditions</h2>
                  </div>
                </CardHeader>
                <CardBody className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                      <Thermometer className="h-10 w-10 text-red-500 mb-2" />
                      <span className="text-xl font-semibold">
                        {weatherData.temperature}
                      </span>
                      <span className="text-sm text-gray-500">Temperature</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Sun className="h-10 w-10 text-yellow-500 mb-2" />
                      <span className="text-xl font-semibold">
                        {weatherData.condition}
                      </span>
                      <span className="text-sm text-gray-500">Condition</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Wind className="h-10 w-10 text-blue-500 mb-2" />
                      <span className="text-xl font-semibold">
                        {weatherData.windSpeed}
                      </span>
                      <span className="text-sm text-gray-500">Wind Speed</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* Vehicle Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Card className="rounded-2xl shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4">
                  <h2 className="text-2xl font-bold">Select Your Ride</h2>
                </CardHeader>
                <CardBody className="p-6">
                  <Tabs
                    aria-label="Vehicle options"
                    color="primary"
                    variant="bordered"
                    className="w-full"
                  >
                    {Object.entries(vehicles).map(([type, details]) => (
                      <Tab
                        key={type}
                        title={
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{details.icon}</span>
                            <span className="font-semibold">
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </span>
                          </div>
                        }
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 mt-4 shadow-inner"
                        >
                          <div className="flex justify-between items-center mb-4">
                            <Badge
                              color={details.color}
                              variant="flat"
                              size="lg"
                            >
                              {formatTime(estimatedTime)} away
                            </Badge>
                            <span className="text-3xl font-bold text-gray-800">
                              Rs.{Math.round(details.price * distanceData)}
                            </span>
                          </div>
                          <Button
                            color={details.color}
                            className="w-full py-6 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                            variant="shadow"
                            onClick={() => setSelectedVehicle(type)}
                          >
                            <span className="text-lg">Select {type}</span>
                          </Button>
                        </motion.div>
                      </Tab>
                    ))}
                  </Tabs>
                </CardBody>
              </Card>
            </motion.div>

            {/* Journey Details */}
            <Card className="rounded-2xl shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
                <p className="text-xl font-bold">Journey Details</p>
              </CardHeader>
              <CardBody className="p-6">
                <div className="space-y-4">
                  <div>
                    <Input
                      startContent={<MapPin className="h-4 w-4" />}
                      label="From"
                      placeholder="Current Location"
                      variant="bordered"
                      value={fromValue}
                      onChange={(e) => {
                        setFromValue(e.target.value);
                        fetchPlacesName(e.target.value, "from");
                      }}
                    />
                    {placesOutputFrom.length > 0 && (
                      <div className="mt-2 max-h-40 overflow-y-auto border border-gray-200 rounded-md">
                        {placesOutputFrom.map((item, index) => (
                          <div
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setFromValue(item.formatted);
                              setCordsFrom({ lat: item.lat, lon: item.lon });
                              setPlacesOutputFrom([]);
                            }}
                          >
                            {item.formatted}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <Input
                      startContent={<MapPin className="h-4 w-4" />}
                      label="To"
                      placeholder="Search Destination"
                      variant="bordered"
                      value={toValue}
                      onChange={(e) => {
                        setToValue(e.target.value);
                        fetchPlacesName(e.target.value, "to");
                      }}
                    />
                    {placesOutputTo.length > 0 && (
                      <div className="mt-2 max-h-40 overflow-y-auto border border-gray-200 rounded-md">
                        {placesOutputTo.map((item, index) => (
                          <div
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setToValue(item.formatted);
                              setCordsTo({ lat: item.lat, lon: item.lon });
                              setPlacesOutputTo([]);
                            }}
                          >
                            {item.formatted}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Divider className="my-4" />
                  <div className="flex items-center justify-between gap-4">
                    <Chip
                      startContent={
                        <Clock className="h-5 w-5 text-yellow-400" />
                      }
                      variant="flat"
                      color="warning"
                      className="text-sm font-semibold"
                    >
                      {formatTime(estimatedTime)}
                    </Chip>

                    {/* Distance Info */}
                    <div className="flex items-center space-x-2">
                      <Chip
                        startContent={<Car className="h-5 w-5 text-blue-500" />}
                        variant="flat"
                        color="primary"
                        className="text-sm font-semibold"
                      >
                        {Math.round(distanceData)} km
                      </Chip>
                    </div>

                    {/* Payment Method */}
                    <Chip
                      startContent={
                        <CreditCard className="h-5 w-5 text-green-500" />
                      }
                      variant="flat"
                      color="success"
                      className="text-sm font-semibold"
                    >
                      Cash
                    </Chip>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Action Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full py-6 rounded-lg bg-gradient-to-r from-teal-400 to-indigo-500 text-white font-bold text-xl shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                Book Your Ride Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="Footer">
        <Footer></Footer>
      </div>
    </div>
  );
}
