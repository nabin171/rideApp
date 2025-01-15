"use client";
import { use, useState, useref } from "react";
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
  skeleton,
  CircularProgress,
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
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { FaLocationArrow } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BsFillClockFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";

export default function Dashboard() {
  const [selectedVehicle, setSelectedVehicle] = useState("standard");
  const [weatherData] = useState({
    temperature: "25°C",
    condition: "Sunny",
    windSpeed: "10 km/h",
  });
  const mapStyles = { height: "100vh", width: "100%" };
  const defaultCenter = { lat: 27.6855, lng: 85.3448 }; // Broadway Infosys, Subidhanagar, Tinkune, Kathmandu, Nepal

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionResponse, setDirectionResponse] = useState(null);
  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress label="Loading..."  />
      </div>
    );
  }
  const vehicles = {
    economy: { price: 160, time: "10 min", icon: "🚗", color: "primary" },
    standard: { price: 200, time: "8 min", icon: "🚙", color: "secondary" },
    premium: { price: 300, time: "5 min", icon: "🚘", color: "success" },
  };
  return (
    <div className="min-h-screen bg-background">
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

          <GoogleMap
            center={defaultCenter}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={defaultCenter} />
          </GoogleMap>
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
                <Autocomplete>
                  <Input
                    startContent={<MapPin className="h-4 w-4" />}
                    label="From"
                    placeholder="Current Location"
                    variant="bordered"
                    type="text"
                  />
                </Autocomplete>
                <Autocomplete>
                  <Input
                    startContent={<MapPin className="h-4 w-4" />}
                    label="To"
                    placeholder="Destination"
                    variant="bordered"
                    type="text"
                  />
                </Autocomplete>
                <Divider className="my-4" />
                <div className="flex items-center gap-4">
                  <Chip
                    startContent={<BsFillClockFill className="h-4 w-4" />}
                    variant="flat"
                  >
                    10 mins
                  </Chip>
                  <Chip
                    startContent={<FaCarSide className="h-4 w-4" />}
                    variant="flat"
                  >
                    2.6 km
                  </Chip>
                  <Chip
                    startContent={<FaLocationArrow className="h-4 w-4" />}
                    variant="flat"
                    onClick={() => map.panTo(defaultCenter)}
                  >
                    Center
                  </Chip>
                  <Chip
                    startContent={<ImCross className="h-4 w-4" />}
                    variant="flat"
                    onClick={() => map.panTo(defaultCenter)}
                  >
                    Clear
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
