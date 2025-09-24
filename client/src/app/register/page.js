"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

import axios from "axios";
import { useToast } from "@/Components/ui/toaster";
import {
  Zap,
  Mail,
  User,
  Lock,
  Eye,
  EyeOff,
  Car,
  Shield,
  Star,
  Users,
} from "lucide-react";

const PremiumRegister = () => {
  const router = useRouter();
  const { triggerToast } = useToast();
  const [showPassword, setShowPassword] = useState(false);

  const features = [
    { icon: Car, text: "Premium ride experience" },
    { icon: Shield, text: "Safe & secure rides" },
    { icon: Star, text: "5-star rated drivers" },
  ];

  const signUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username cannot exceed 20 characters")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers and underscore"
      )
      .required("Username is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain uppercase, lowercase, and number"
      )
      .required("Password is required"),
  });
  // Updated onSubmit function with better error handling and debugging
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);

      try {
        // Log the API URL for debugging
        console.log(
          "API URL:",
          `${process.env.NEXT_PUBLIC_API_URL}/user/register`
        );

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
          {
            username: values.username,
            email: values.email,
            password: values.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response:", response);

        if (response.status === 200 || response.status === 201) {
          triggerToast("Success", "User created successfully!");
          resetForm();
          router.push("/login");
        }
      } catch (error) {
        console.error("Registration error:", error);

        // More detailed error handling
        if (error.response) {
          // Server responded with error status
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          console.error("Error response headers:", error.response.headers);

          const errorMessage =
            error.response.data?.message ||
            error.response.data?.error ||
            `Registration failed (${error.response.status})`;
          triggerToast("Error", errorMessage);
        } else if (error.request) {
          // Request made but no response received
          console.error("No response received:", error.request);
          triggerToast(
            "Error",
            "No response from server. Please check your connection."
          );
        } else {
          // Something else happened
          console.error("Error message:", error.message);
          triggerToast("Error", "An unexpected error occurred.");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Alternative validation schema with more specific rules
  const alternativeSignUpSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username cannot exceed 20 characters")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers and underscore"
      )
      .required("Username is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain uppercase, lowercase, number, and special character"
      )
      .required("Password is required"),
  });

  // Debugging function to test API endpoint
  const testAPI = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/health`
      );
      console.log("API is reachable:", response);
    } catch (error) {
      console.error("API not reachable:", error);
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>

      {/* Main Container */}
      <div className="relative flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 xl:px-16 text-white">
          <div className="max-w-lg">
            {/* Logo */}
            <div className="group cursor-pointer mb-12 flex items-center space-x-4">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-xl">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Express Rides
                </h1>
                <p className="text-sm text-gray-400 -mt-1">
                  Premium Transport Experience
                </p>
              </div>
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <h2 className="text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Join the Future of
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                  Transportation
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience premium rides with cutting-edge technology. Safe,
                reliable, and convenient transportation at your fingertips.
              </p>

              {/* Features */}
              <div className="space-y-4 pt-8">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
                    <Car className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300">Premium ride experience</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300">Safe & secure rides</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
                    <Star className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300">5-star rated drivers</span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    500K+
                  </div>
                  <div className="text-sm text-gray-400">Happy Riders</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="text-sm text-gray-400">Active Drivers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    4.9★
                  </div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center space-x-3 justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Express Rides
                </h1>
              </div>
            </div>

            {/* Form Container */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Create Your Account
                  </h3>
                  <p className="text-gray-400">
                    Start your premium ride experience with a 30-day free trial
                  </p>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.email && !!formik.errors.email}
                      required
                      classNames={{
                        inputWrapper:
                          "pl-10 bg-gray-800/50 border-gray-600/50 hover:border-purple-500/50 focus-within:border-purple-500",
                        input: "text-white placeholder-gray-400 bg-transparent",
                      }}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  {/* Username */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      name="username"
                      placeholder="Choose a username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.username && !!formik.errors.username
                      }
                      required
                      classNames={{
                        inputWrapper:
                          "pl-10 bg-gray-800/50 border-gray-600/50 hover:border-purple-500/50 focus-within:border-purple-500",
                        input: "text-white placeholder-gray-400 bg-transparent",
                      }}
                    />
                    {formik.touched.username && formik.errors.username && (
                      <p className="text-red-400 text-sm mt-1">
                        {formik.errors.username}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-10">
                      <button
                        type="button"
                        aria-label="Toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Create password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.password && !!formik.errors.password
                      }
                      required
                      classNames={{
                        inputWrapper:
                          "pl-10 pr-10 bg-gray-800/50 border-gray-600/50 hover:border-purple-500/50 focus-within:border-purple-500",
                        input: "text-white placeholder-gray-400 bg-transparent",
                      }}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <p className="text-red-400 text-sm mt-1">
                        {formik.errors.password}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    disabled={formik.isSubmitting}
                    isLoading={formik.isSubmitting}
                  >
                    {formik.isSubmitting
                      ? "Creating Account..."
                      : "Create Account"}
                  </Button>

                  {/* Login Link */}
                  <div className="text-center pt-4">
                    <p className="text-gray-400">
                      Already have an account?{" "}
                      <Link
                        href="/login"
                        className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200 hover:underline"
                      >
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Terms */}
            <div className="text-center mt-6">
              <p className="text-xs text-gray-500">
                By creating an account, you agree to our{" "}
                <Link href="/terms" className="text-purple-400 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-purple-400 hover:underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumRegister;
