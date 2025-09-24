"use client";
import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  Headphones,
  Shield,
  Star,
  CheckCircle2,
} from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/contact`,
          values
        );
        toast.success(response.data.message || "Message sent successfully!");
        resetForm();
      } catch (error) {
        console.error(error);
        toast.error("Failed to send message. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subDetails: "24/7 Customer Support",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "support@expressrides.com",
      subDetails: "We reply within 2 hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Express Avenue",
      subDetails: "Downtown, NY 10001",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7 Available",
      subDetails: "Always here for you",
    },
  ];

  const supportFeatures = [
    { icon: Headphones, text: "24/7 Live Support" },
    { icon: Shield, text: "Secure & Private" },
    { icon: Star, text: "5-Star Service" },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"></div>

      {/* Main Container */}
      <div className="relative flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 xl:px-16 text-white py-12">
          <div className="max-w-lg mx-auto lg:mx-0">
            {/* Logo */}
            <div className="group cursor-pointer mb-12 flex items-center justify-center lg:justify-start space-x-4">
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
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl xl:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Get In Touch
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                  With Our Team
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Have questions or need assistance? We're here to help you 24/7.
                Reach out and experience our premium customer service.
              </p>

              {/* Support Features */}
              <div className="space-y-4 pt-8">
                {supportFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center lg:justify-start space-x-4"
                  >
                    <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30">
                      <feature.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
                        <info.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm text-gray-300 mb-1">
                          {info.details}
                        </p>
                        <p className="text-xs text-gray-400">
                          {info.subDetails}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Form Container */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30 mb-4">
                    <MessageCircle className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-400">
                    We'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      required
                      classNames={{
                        inputWrapper:
                          "pl-10 bg-gray-800/50 border-gray-600/50 hover:border-purple-500/50 focus-within:border-purple-500",
                        input: "text-white placeholder-gray-400 bg-transparent",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      required
                      classNames={{
                        inputWrapper:
                          "pl-10 bg-gray-800/50 border-gray-600/50 hover:border-purple-500/50 focus-within:border-purple-500",
                        input: "text-white placeholder-gray-400 bg-transparent",
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Your phone number (optional)"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      classNames={{
                        inputWrapper:
                          "pl-10 bg-gray-800/50 border-gray-600/50 hover:border-purple-500/50 focus-within:border-purple-500",
                        input: "text-white placeholder-gray-400 bg-transparent",
                      }}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <Input
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      required
                      classNames={{
                        inputWrapper:
                          "bg-gray-800/50 border-gray-600/50 hover:border-purple-500/50 focus-within:border-purple-500",
                        input: "text-white placeholder-gray-400 bg-transparent",
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      required
                      name="message"
                      minRows={4}
                      classNames={{
                        inputWrapper:
                          "bg-gray-800/50 border-gray-600/50 hover:border-purple-500/50 focus-within:border-purple-500",
                        input: "text-white placeholder-gray-400 bg-transparent",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Response Time Info */}
                <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-white font-medium">
                        Quick Response Guaranteed
                      </p>
                      <p className="text-xs text-gray-400">
                        Our support team responds within 2 hours during business
                        hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-6">
              <p className="text-xs text-gray-500">
                Need immediate assistance?{" "}
                <span className="text-purple-400 font-medium">
                  Call us at +1 (555) 123-4567
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
