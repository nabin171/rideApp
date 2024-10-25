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
import Link from "next/link";
import * as Yup from "yup";
import axios from "axios";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";

const SignUpToRide = () => {
  const signUpSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Too short")
      .required("Phone is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    vehicleType: Yup.string().required("Please select a vehicle type"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      vehicleType: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/register`,
          values
        );
        alert("Registered successfully");
      } catch (error) {
        console.error("Registration error", error);
        alert("Registration failed. Please try again.");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="min-h-screen w-full flex flex-col overflow-hidden">
      <CustomNavbar />

      <div className="w-full flex flex-grow items-center justify-center bg-gray-100 pt-10 pb-10">
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-3xl font-semibold text-center bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text mb-6">
            Sign Up as a Rider
          </h2>

          {/* Full Name */}
          <div className="mb-4">
            <Input
              isRequired
              type="text"
              label="Full Name"
              placeholder="Enter your Full Name"
              id="fullName"
              name="fullName"
              onChange={formik.handleChange}
              value={formik.values.fullName}
            />
            <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <Input
              isRequired
              type="email"
              label="Email"
              placeholder="Enter your email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <Input
              isRequired
              type="text"
              label="Phone Number"
              placeholder="Enter your phone number"
              id="phone"
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <Input
              isRequired
              type="password"
              label="Password"
              placeholder="Create your password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <Input
              isRequired
              type="password"
              label="Confirm Password"
              placeholder="Confirm your password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
          </div>

          {/* Vehicle Type */}
          <div className="mb-4">
            <Select
              isRequired
              name="vehicleType"
              label="Vehicle Type"
              onChange={(value) => formik.setFieldValue("vehicleType", value)}
              placeholder="Select vehicle type"
            >
              <SelectItem key="car" value="Car">Car</SelectItem>
              <SelectItem key="bike" value="Bike">Bike</SelectItem>
            </Select>
            <div className="text-red-500 text-sm">{formik.errors.vehicleType}</div>
          </div>

          {/* Submit Button */}
          <div className="bg-gray-800 rounded-xl flex justify-center mt-6">
            <Button
              type="submit"
              className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 m-1"
              variant="flat"
            >
              Sign Up
            </Button>
          </div>

          <p className="text-center text-black mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </form>
  );
};

export default SignUpToRide;
