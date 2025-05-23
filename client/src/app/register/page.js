"use client";
import { useFormik } from "formik";
import React from "react";
import {
  Badge,
  Avatar,
  Image,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { RadioGroup, Radio, Checkbox } from "@nextui-org/radio";
import Link from "next/link";
import * as Yup from "yup";
import axios from "axios";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const Register = () => {
  const { toast } = useToast();

  const signUpSchema = Yup.object().shape({
    cpassword: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    userName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: "",
      cpassword: "",
      gender: "",
    },
    validationSchema: signUpSchema, // Add this
    onSubmit: (values) => {
      registerUser(values);
    },
  });

  const registerUser = async (values) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        values
      );
      if (data)
        toast({
          title: data,
          action: (
            <ToastAction altText="Try again">Proceed to login</ToastAction>
          ),
        });
    } catch (error) {
      toast({
        variant: "destructive",
        title: error?.response?.data,
        //  description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <CustomNavbar></CustomNavbar>

      <div className="rounded-2xl container flex  hsl(var(--nextui-background) / 0.7) justify-center items-center min-h-screen  min-w-full shadow-lg ">
        <div className="box flex flex-col  gap-5 p-4 bg-gray-100 ">
          <div className="flex justify-between">
            <img
              src="/mylogo.png"
              width={90}
              height={30}
              className="rounded"
            ></img>
            <h2 className=" pt-4 heading  text-right text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1">
              Express Rides
            </h2>
          </div>

          <p className="freetrial text-center text-black-100">
            Let's get started with your 30 days free trial
          </p>
          <div className="flex flex-col gap-5 ">
            <Input
              isRequired
              type="email"
              label="Email"
              placeholder="Enter your email"
              className="max-w-xs"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email}
            <Input
              isRequired
              type="userName"
              label="UserName"
              placeholder="Enter your username"
              className="max-w-xs"
              id="userName"
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            {formik.errors.userName}
            <div>
              <Input
                isRequired
                type="password"
                label="Password"
                className="max-w-xs"
                placeholder="Create your password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password}
            </div>
            <Input
              classNames="py-2"
              isRequired
              type="password"
              label="Confirm your Password"
              className="max-w-xs"
              placeholder="Enter your password"
              id="cpassword"
              name="cpassword"
              onChange={formik.handleChange}
              value={formik.values.cpassword}
            />
            {formik.errors.cpassword}
          </div>

          <Select
            name="gender"
            label="Gender"
            onChange={(e) => formik.setFieldValue("gender", e.target.value)}
          >
            <SelectItem key="Male">Male</SelectItem>
            <SelectItem key="Female">Female</SelectItem>
            <SelectItem key="Others">Others</SelectItem>
          </Select>

          <div className="bg-gray-800 rounded-xl flex justify-center">
            <Button
              type="submit"
              className=" text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1"
            >
              Submit
            </Button>
          </div>

          <p className="freetrial text-center text-black-100">
            Already have an account yet?{" "}
            <span className=" text-blue-600 underline ">
              <Link href="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </form>
  );
};

export default Register;
