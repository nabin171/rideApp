// "use client";

// import React from "react";
// import { useFormik } from "formik";
// import { Badge, Avatar, Image, Button, Input } from "@nextui-org/react";
// import Link from "next/link";
// import * as Yup from "yup";
// const loginSchema = Yup.object().shape({
//   password: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });
// const page = () => {
//   const formik = useFormik({
//     initialValues: {
//       password: "",
//       confirmpassword:"",
//       username:"",
//       email: "",
//       gender: "",
//     },
//     validationSchema: loginSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   const registerUser = async (values) => {
//     const { data } = await axios.post(
//       `${process.env.NEXT_PUBLIC_API_URL}/register`,
//       values
//     );
//     if (data) alert("registered successfully");
//   };

//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className="container hsl(var(--nextui-background) / 0.7) flex justify-center items-center min-h-screen min-w-full shadow-lg"
//     >
//       <div className="bg-cyan-100 rounded-2xl">
//         <div className="box flex flex-col  gap-5 p-4">
//           <div className="flex justify-between">
//             <img
//               src="/hustle.png"
//               width={90}
//               height={30}
//               className="rounded"
//             ></img>
//             <h2 className="heading text-right text-4xl text-slate-500 pt-4">
//               Hustle
//             </h2>
//           </div>

//           <p className="freetrial text-center text-black-100 ">
//             Let's get started with your 30 days free trial
//           </p>
//           <div className="flex flex-col gap-5 ">
//             <Input
//               isRequired
//               type="email"
//               label="Email"
//               placeholder="Enter your Email"
//               className="max-w-xs"
//               id="email"
//               name="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//             />
//             {formik.errors.email}
//             <div>
//               <Input
//                 isRequired
//                 id="password"
//                 name="password"
//                 type="password"
//                 label="Password"
//                 className="max-w-xs"
//                 placeholder="Enter your Password"
//                 onChange={formik.handleChange}
//                 value={formik.values.password}
//               />
//               {formik.errors.password}
//             </div>
//           </div>
//           <p className="forgetPassword text-center text-black-100">
//             Forgot Password?
//           </p>
//           <div className="button ">
//             <Button type="submit" className="w-80" color="primary">
//               <Link as={Button} href="">
//                 Login
//               </Link>
//             </Button>
//           </div>

//           <div class="relative flex py-1 items-center">
//             <div class="flex-grow border-t border-gray-400"></div>
//             <span class="flex-shrink mx-4 text-gray-400">OR</span>
//             <div class="flex-grow border-t border-gray-400"></div>
//           </div>
//           <button className="bg white border py-1 w-full rounded-xl mt-1 flex justify-center ">
//             <svg
//               className="mr-3 text-sm"
//               xmlns="http://www.w3.org/2000/svg"
//               x="0px"
//               y="0px"
//               width="30"
//               height="25"
//               viewBox="0 0 48 48"
//             >
//               <path
//                 fill="#fbc02d"
//                 d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//               ></path>
//               <path
//                 fill="#e53935"
//                 d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//               ></path>
//               <path
//                 fill="#4caf50"
//                 d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//               ></path>
//               <path
//                 fill="#1565c0"
//                 d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//               ></path>
//             </svg>
//             Sign Up with Google
//           </button>
//           <button className="bg white border py-1 w-full rounded-xl mt-1 flex justify-center ">
//             <svg
//               className="mr-3 text-sm"
//               xmlns="http://www.w3.org/2000/svg"
//               x="0px"
//               y="0px"
//               width="30"
//               height="25"
//               viewBox="0 0 48 48"
//             >
//               <path
//                 fill="#ff5722"
//                 d="M6 6H22V22H6z"
//                 transform="rotate(-180 14 14)"
//               ></path>
//               <path
//                 fill="#4caf50"
//                 d="M26 6H42V22H26z"
//                 transform="rotate(-180 34 14)"
//               ></path>
//               <path
//                 fill="#ffc107"
//                 d="M26 26H42V42H26z"
//                 transform="rotate(-180 34 34)"
//               ></path>
//               <path
//                 fill="#03a9f4"
//                 d="M6 26H22V42H6z"
//                 transform="rotate(-180 14 34)"
//               ></path>
//             </svg>
//             Sign Up with Microsoft
//           </button>
//           <p className="freetrial text-center text-black-100">
//             Don't have an account yet?{" "}
//             <span className="text-black-900">
//               {" "}
//               <Link as={Button} href="/register">
//                 Sign Up
//               </Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default page;

"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useFormik } from "formik";
import { IoNotificationsCircle } from "react-icons/io5";
import { TbSettingsFilled } from "react-icons/tb";
import { CardHeader, CardBody, Image, Input } from "@nextui-org/react";
import { Divider, Tabs, Tab, Card } from "@nextui-org/react";
import { IoBarChartSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoWalletSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { HiMiniCurrencyDollar } from "react-icons/hi2";

import { MdLocationSearching } from "react-icons/md";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Checkbox,
} from "@nextui-org/react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";

import Link from "next/link";
import SideBar from "@/Components/SideBar/page";
import CustomNavbar from "@/Components/NavBar/page";

const home = () => {
  const router = useRouter();
  return (
    <div className="container min-w-full h-[100%] ">
      <div>
        <CustomNavbar></CustomNavbar>
      </div>

      <div className="flex pt-10">
        <div class="flex min-h-screen">
          <main class="flex-grow w-[17.5rem]  bg-gray-100 ">
            <SideBar />
          </main>

          <div className=" pl-3">
            <img
              src="/map.png"
              width={835}
              height={1000}
              className="rounded m-1"
            ></img>
          </div>

          <div className="flex flex-col gap-1 pl-2">
            <div className="flex gap-8 ">
              <div className="flex gap-2">
                <FaLocationDot size={20} />
                <p>2.6km</p>
              </div>
              <div className="flex gap-2">
                <FaClock size={20} />
                <p>10.m</p>
              </div>
              <div className="flex gap-2">
                <HiMiniCurrencyDollar size={20} />
                <p>160</p>
              </div>
            </div>
            <div className="rightbar flex flex-col">
              <div className="flex gap-2">
                <div className="circle flex flex-col items-center justify-center">
                  <div className="bg-blue-600 h-4 w-4 rounded-full flex items-center justify-center">
                    <div className="rounded-full bg-white h-2 w-2 items-center"></div>
                  </div>
                  <div className="line h-20  bg-slate-500 w-[1px] "></div>

                  <div className="bg-blue-600 h-4 w-4 rounded-full flex items-center justify-center">
                    <div className="rounded-full bg-white h-2 w-2 items-center"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-400 text-sm ">Pickup Point</p>
                    <p className="font-bold "> Pickup Point</p>
                    <div className="flex justify-center items-center">
                      <div className="line border-dashed border-1 h-[1px] bg-slate-500 w-[225px] pl-4"></div>
                      <p>
                        <MdLocationSearching size={20} />
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm ">Pickup Off</p>
                      <p className="font-bold "> Where you want to go? </p>
                    </div>
                    <div className="flex justify-between">
                      <Button className="bg-slate-100">
                        <Link as={Button} href="/">
                          Home
                        </Link>
                      </Button>
                      <Button className="bg-red-500 ">
                        <Link as={Button} href="/">
                          Office
                        </Link>
                      </Button>
                      <Button className="bg-slate-100">
                        <Link as={Button} href="/">
                          Others
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="font-bold "> Payment Method </p>
                <div className="flex">
                  <img
                    src="/pic1.png"
                    width={60}
                    height={20}
                    className="rounded m-1"
                  ></img>
                  <img
                    src="/mastercard.svg"
                    width={60}
                    height={10}
                    className="rounded m-1"
                  ></img>
                  <img
                    src="/paypal.svg"
                    width={60}
                    height={30}
                    className="rounded m-1"
                  ></img>
                  <img
                    src="/p4.png"
                    width={60}
                    height={30}
                    className="rounded m-1"
                  ></img>
                </div>
              </div>
              <div className="">
                <p className="font-bold "> Select Car </p>
                <div className="flex">
                  <img
                    src="/taxi2.jpeg"
                    width={120}
                    height={100}
                    className="rounded m-1"
                  ></img>
                  <img
                    src="/taxi2.jpeg"
                    width={120}
                    height={90}
                    className="rounded m-1"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
