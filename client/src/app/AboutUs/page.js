import CustomNavbar from "@/Components/NavBar/page";
import { Avatar } from "@nextui-org/react";
import React from "react";

const aboutUs = () => {
  return (
    <div>
      <div>
        <CustomNavbar></CustomNavbar>
      </div>
      <div className=" pt-28 pl-20 ">
        <p className="text-3xl font-bold text-center">About Us</p>
        <div className="text-center text-gray-500  pt-5">
          Welcome to Express Rides, your go-to solution for fast, reliable, and
          <br></br>
          convenient transportation. Whether you’re commuting to work, heading
          to
          <br></br>
          the airport, or exploring the city, we are committed to providing a
          <br></br>
          seamless ride experience tailored to your needs.
        </div>
      </div>

      <div className=" pt-28 pl-20">
        <div className="flex  items-center justify-around">
          <div className="flex flex-col items-center gap-5">
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <p className="text-gray-400 text-center">
              “My motto is very simple. It doesn't cost <br></br>you a penny to
              be nice and kind, but it<br></br> will cost you everything if{" "}
              you're not. <br></br>If I'm free and somebody needs my help,
              <br></br> I'll be the first one to jump in, in a<br></br>{" "}
              heartbeat.”
            </p>
            <div className="flex flex-col text-center">
              <p className="text-gray-400 font-medium">- Taylor</p>
              <p className="text-gray-400 italic">
                Driving with ExpressRides since 2019
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              size="lg"
            />

            <p className="text-gray-500 text-center">
              “As a student, it’s hard to complete my <br></br>class work around
              a schedule. I started <br></br>driving more with ExpressRides and
              realized it<br></br> was the perfect opportunity to make <br></br>
              money and work on my own time! <br></br>Driving with ExpressRides
              gives me freedom in <br></br>my schedule to focus on school, which
              <br></br> is my main priority."
            </p>
            <div className="flex flex-col text-center">
              <p className="text-gray-400 font-medium">- Harry</p>
              <p className="text-gray-400 italic">
                Driving with ExpressRides since 2020
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <Avatar
              isBordered
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <p className="text-gray-400 text-center">
              “My motto is very simple. It doesn't cost <br></br>you a penny to
              be nice and kind, but it<br></br> will cost you everything if{" "}
              you're not. <br></br>If I'm free and somebody needs my help,
              <br></br> I'll be the first one to jump in, in a<br></br>{" "}
              heartbeat.”
            </p>
            <div className="flex flex-col text-center">
              <p className="text-gray-400 font-medium">- Marry</p>
              <p className="text-gray-400 italic">
                Driving with ExpressRides since 2015
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
