'use client'
import { useFormik } from "formik";
import React from "react";
import { Badge, Avatar, Image, Button, Input } from "@nextui-org/react";
import { RadioGroup, Radio, Checkbox } from "@nextui-org/radio";
import Link from "next/link";
import * as Yup from "yup";
import { Axios } from "axios";
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
const Register = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword:"",
      email: "",
      username:"",
      gender:"",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const registerUser = async (values) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      values
    );
    if (data) alert("registered successfully");
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container flex hsl(var(--nextui-background) / 0.7) justify-center items-center min-h-screen  min-w-full shadow-lg"
    >
      <div className="bg-cyan-100 rounded-2xl">
        <div className="box flex flex-col  gap-5 p-4">
          <div className="flex justify-between">
            <img
              src="/hustle.png"
              width={90}
              height={30}
              className="rounded"
            ></img>
            <h2 className="heading text-right text-4xl text-black-200 text-green-500 pt-4">
              Hustle
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
              type="username"
              label="Username"
              placeholder="Enter your username"
              className="max-w-xs"
              id="username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username}
            <div>
              <Input
                isRequired
                type="password"
                label="Password"
                className="max-w-xs"
                placeholder="Create your password"
                id="createpassword"
                name="createpassword"
                onChange={formik.handleChange}
                value={formik.values.createpassword}
              />
              {formik.errors.createpassword}
            </div>
            <Input
              classNames="py-2"
              isRequired
              type="password"
              label="Confirm your Password"
              className="max-w-xs"
              placeholder="Enter your password"
              id="confirmpassword"
              name="confirmpassword"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />
            {formik.errors.confirmpassword}
          </div>
          <RadioGroup label="Select your gender" defaultValue="Male">
            <Radio value="buenos-aires">Male</Radio>
            <Radio value="sydney">Female</Radio>
            <Radio value="san-francisco">Others</Radio>
          </RadioGroup>

          <div className="button ">
            <Button type="submit" className="w-80" color="primary">
             
                Sign Up
             
            </Button>
          </div>
          <p className="freetrial text-center text-black-100">
            Already have an account yet?{" "}
            <span className="text-black-900">
              <Link href="/">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;
