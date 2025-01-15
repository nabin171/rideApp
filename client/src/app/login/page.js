"use client";
import React from "react";
import { useFormik } from "formik";
import { Badge, Avatar, Image, Button, Input, button } from "@nextui-org/react";
import Link from "next/link";
import * as Yup from "yup";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import CustomNavbar from "@/Components/NavBar/page";
import Footer from "@/Components/Footer/page";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

const Login = () => {
  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
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
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        values
      );
      if (data)
        toast({
          title: data,
          action: (
            <ToastAction altText="Try again">Login successfully</ToastAction>
          ),
        });
    } catch (error) {
      toast({
        variant: "destructive",
        title: error?.response?.data,
        //  description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Invalid Email or Password</ToastAction>,
      });
    }
  };

      

  // Google Login functionality
  const handleGoogleLoginSuccess = (response) => {
    // Handle the success response after Google login
    const token = response.credential;
    // You can call an API to verify the token and fetch user data
    alert("Google login successful!");
  };

  const handleGoogleLoginError = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col  min-h-screen "
      >
        <CustomNavbar></CustomNavbar>

        <div className=" rounded-2xl    container hsl(var(--nextui-background) / 0.7) flex justify-center items-center min-h-screen min-w-full shadow-lg      ">
          <div className="box flex flex-col  gap-5 p-4 bg-gray-200">
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

            <p className="freetrial text-center text-black-100 ">
              Let's get started with your 30 days free trial
            </p>
            <div className="flex flex-col gap-5 ">
              <Input
                isRequired
                type="email"
                label="Email"
                placeholder="Enter your Email"
                className="max-w-xs"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email}
              <div>
                <Input
                  isRequired
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  className="max-w-xs"
                  placeholder="Enter your Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password}
              </div>
            </div>
            <p className="forgetPassword text-center text-black-100">
              Forgot Password?
            </p>

            <div className="bg-gray-800 rounded-xl flex justify-center">
              <Button
                type="submit"
                className=" text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500  to-blue-500 m-1"
              >
                Login
              </Button>
            </div>

            <div class="relative flex py-1 items-center">
              <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">OR</span>
              <div class="flex-grow border-t border-gray-400"></div>
            </div>
            {/* <Button className="bg-white w-full rounded-xl mt-1 flex justify-center">
              Sign Up with Google
            </Button> */}
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginError}
            />

            <p className="freetrial text-center text-black-100">
              Don't have an account yet?{" "}
              <span className="text-blue-600 underline ">
                {" "}
                <Link as={Button} href="/register">
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </form>
    </GoogleOAuthProvider>
  );
};

export default Login;
