"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  Zap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Car,
  Shield,
  Star,
  ArrowRight,
  LogIn,
  Chrome,
} from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

const PremiumLogin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const loginUser = async (values) => {
    setIsLoading(true);
    console.log("Attempting login with:", { email: values.email }); // Don't log password

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(process.env.NEXT_PUBLIC_API_URL);

      if (data) {
        // Store token if your backend provides one
        if (data.token) {
          localStorage.setItem("authToken", data.token);
          // Or use cookies/sessionStorage depending on your auth strategy
        }

        toast.success("Welcome back to Express Rides!");

        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);

      let errorMessage = "Login failed. Please try again.";

      if (error.response) {
        // Server responded with error status
        console.error("Error response:", error.response.data);
        errorMessage =
          error.response.data?.message ||
          error.response.data?.error ||
          `Login failed (${error.response.status})`;
      } else if (error.request) {
        // Request made but no response received
        errorMessage = "No response from server. Please check your connection.";
      }

      toast.error("Failed to login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/googlelogin`,
        {
          token: credentialResponse.credential,
        }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        toast.success("Logged in successfully");
        router.push("/"); // redirect to dashboard/home
      }
    } catch (err) {
      console.error(err);
      toast.error("Google login failed");
    }
  };

  const features = [
    { icon: Car, text: "Premium ride experience" },
    { icon: Shield, text: "Safe & secure platform" },
    { icon: Star, text: "5-star rated service" },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>

      {/* Main Container */}
      <div className="relative flex min-h-screen">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 xl:px-16">
          <div className="max-w-lg">
            {/* Logo */}
            <div className="group cursor-pointer mb-12">
              <div className="flex items-center space-x-4">
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
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <h2 className="text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Welcome Back to
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                  Premium Rides
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Sign in to continue your premium transportation experience. Your
                ride is just a click away.
              </p>

              {/* Features */}
              <div className="space-y-4 pt-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Welcome Back Message */}
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-6 mt-8">
                <h3 className="text-lg font-semibold text-white mb-2">
                  🎉 Welcome Back Bonus!
                </h3>
                <p className="text-gray-300 text-sm">
                  Get 20% off your next ride when you log in today. Limited time
                  offer for returning customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="inline-flex items-center space-x-3">
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
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-4">
                    <LogIn className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Welcome Back
                  </h3>
                  <p className="text-gray-400">
                    Sign in to your Express Rides account
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* Email Input */}
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

                  {/* Password Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-10">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Toggle password visibility"
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
                      placeholder="Enter your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.password && !!formik.errors.password
                      }
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

                  {/* Forgot Password Link */}
                  <div className="text-right">
                    <Link
                      href="/forgot-password"
                      className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    disabled={isLoading || formik.isSubmitting}
                    isLoading={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      "Signing In..."
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>

                  {/* Divider */}
                  <div className="relative flex py-4 items-center">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <span className="flex-shrink mx-4 text-gray-400 text-sm">
                      OR
                    </span>
                    <div className="flex-grow border-t border-gray-600"></div>
                  </div>

                  {/* Google Login Button */}

                  <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess} // function to handle backend verification
                    onError={() => toast.error("Google login failed")}
                    theme="outline"
                    size="large"
                    width="100%"
                  />

                  {/* Register Link */}
                  <div className="text-center pt-4">
                    <p className="text-gray-400">
                      Don't have an account?{" "}
                      <Link
                        href="/register"
                        className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-200 hover:underline"
                      >
                        Create account
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Security Notice */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center gap-2 text-xs text-gray-500 bg-gray-800/30 px-3 py-2 rounded-lg border border-gray-700/30">
                <Shield className="w-4 h-4 text-green-500" />
                Your connection is secured with 256-bit SSL encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumLogin;
