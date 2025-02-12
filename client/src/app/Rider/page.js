'use client'
import Footer from "@/Components/Footer/page";
import CustomNavbar from "@/Components/NavBar/page";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
const page = async() => {
  // const {data} = await axios.get('http://localhost:8000/rides?status=pending')


  
  // const [rides, setRides] =  useState([])
  // useEffect(()=>{
  //   const fetchRides = async() => {
  //     const {data} = await axios.get('http://localhost:8000/rides?status=pending')
  //     setRides(data)
  //   }
  //   fetchRides()
  // },[])
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      {JSON.stringify(data)}
      <div>
        <div className=" pt-20 flex justify-around ">
          <img src="/a9.png" width={600} height={400} className=""></img>
          <div className="flex flex-col w-1/2 gap-4">
            <h2 className="heading font-bold text-justify text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 ">
              Caring for every passenger, every ride.
            </h2>
            <p className="text-justify ">
              At Express Rides, we’re more than just a transportation service.
              we’re a community where everyone feels welcome. Your safety and
              respect are our top priorities. That’s why we uphold exceptional
              standards that begin long before your first ride. Our proactive
              safety measures are in place at all times, ensuring a secure
              experience from start to finish. Day or night, our dedicated team
              is here to provide genuine support when you need it most."
            </p>
          </div>
        </div>

        <div>
          <div className="flex pt-20 justify-center">
            <h2 className="heading font-bold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 ">
              Commitment to Safety
            </h2>
          </div>

          <div className="pt-10 flex justify-around">
            <div className="flex flex-col w-1/2">
              <ul className=" flex flex-col gap-4">
                <li className="flex flex-col gap-4">
                  <div className="flex">
                    <h2 className="flex heading  text-justify text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
                      How We Share the Ride
                    </h2>
                  </div>
                  <p className="text-justify">
                    At Express Rides, mutual respect is at the heart of every
                    ride. Discrimination is never tolerated, and anyone found
                    violating our policies may face permanent removal from the
                    platform. If at any point you feel unsafe, you are free to
                    cancel the ride. For more information, please review our
                    Community Guidelines.
                  </p>
                </li>

                <li className="flex flex-col gap-4">
                  <div className="flex">
                    <h2 className=" heading text-justify text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
                      Annual Driver Background Checks
                    </h2>
                  </div>
                  <p className="text-justify">
                    All Express Rides drivers must pass a thorough background
                    check before joining the platform. After their initial
                    screening, drivers are required to pass an annual background
                    check to remain active. We also continuously monitor for any
                    criminal convictions, and if necessary, we deactivate
                    drivers to maintain a safe environment.
                  </p>
                </li>

                <li className="flex flex-col gap-4">
                  <div className="flex">
                    <h2 className=" heading text-justify text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
                      Mandatory Driver Safety Education
                    </h2>
                  </div>
                  <p className="text-justify">
                    Every driver is required to complete a comprehensive safety
                    training program developed with leading safety
                    organizations. This program ensures drivers are
                    well-prepared to provide a safe experience for all riders.
                  </p>
                </li>

                <li className="flex flex-col gap-4">
                  <div className="flex">
                    <h2 className=" heading text-justify text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
                      Share Your Pronouns
                    </h2>
                  </div>
                  <p className="text-justify">
                    By adding your pronouns to your profile, you contribute to a
                    welcoming space where everyone feels acknowledged and
                    respected. This small but significant step helps foster an
                    inclusive community for all users of Express Rides.
                  </p>
                </li>
              </ul>
            </div>
            <img src="/a10.png" width={600} height={400} className=""></img>
          </div>
        </div>

        <div>
          <div className="flex pt-20 justify-center">
            <h2 className="heading font-bold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 ">
              Preemptive Safety Measures
            </h2>
          </div>

          <div className="pt-10 flex justify-around">
            <img src="/a11.png" width={600} height={400} className=""></img>
            <div className="flex flex-col w-1/2">
              <ul className=" flex flex-col gap-4">
                <li className="flex flex-col gap-4">
                  <div className="flex">
                    <h2 className="flex heading  text-justify text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
                      Smart Ride Check-In
                    </h2>
                  </div>
                  <p className="text-justify">
                    At Express Rides, we keep an eye on every ride for signs of
                    unusual activity, such as extended stops or unexpected route
                    changes. If something seems off, we’ll reach out to ensure
                    you're okay. You can also schedule a check-in to confirm
                    that you’ve arrived at your destination safely.
                  </p>
                </li>

                <li className="flex flex-col gap-4">
                  <div className="flex">
                    <h2 className=" heading text-justify text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
                      Share Your Location
                    </h2>
                  </div>
                  <p className="text-justify">
                    You can add trusted contacts to your safety settings,
                    allowing friends or family to track your location in real
                    time for added peace of mind. This way, your loved ones can
                    always know where you are during your ride.
                  </p>
                </li>

                <li className="flex flex-col gap-4">
                  <div className="flex">
                    <h2 className=" heading text-justify text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
                      Know Your Driver
                    </h2>
                  </div>
                  <p className="text-justify">
                    After you’re matched with a driver, you’ll receive details
                    like their name, profile photo, and overall rating. By
                    adding your photo to your profile, you make it easier for
                    your driver to identify you when they arrive.
                  </p>
                </li>

                <li className="flex flex-col gap-4">
                  <div className="flex">
                    <h2 className=" heading text-justify text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500">
                      Privacy Protection
                    </h2>
                  </div>
                  <p className="text-justify">
                    Your privacy matters to us. We never share your phone number
                    or personal information with drivers or other riders. After
                    the trip is over, your pickup and drop-off points remain
                    private, as they are hidden from the driver’s trip history.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
