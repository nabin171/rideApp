"use client";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
  FaCopyright,
} from "react-icons/fa";
import { MdEmail, MdLanguage, MdSend } from "react-icons/md";
import {
  Car,
  Users,
  Shield,
  Gift,
  MapPin,
  Award,
  CreditCard,
  Heart,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const PremiumFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  const driverLinks = [
    { label: "Earnings", href: "/Earnings", icon: Award },
    { label: "Cities", href: "/Cities", icon: MapPin },
    { label: "Safety", href: "/Safety", icon: Shield },
    { label: "Bonus", href: "/Bonus", icon: Gift },
    { label: "Requirements", href: "/Requirements", icon: Car },
    { label: "New Driver Guide", href: "/Guide", icon: Users },
  ];

  const riderLinks = [
    { label: "Sign up to ride", href: "/SignUpToRide", icon: Users },
    { label: "Business Profile", href: "/", icon: Award },
    { label: "Rewards", href: "#", icon: Gift },
    { label: "Events", href: "#", icon: MapPin },
    { label: "Gift Cards", href: "#", icon: CreditCard },
    { label: "Donate", href: "#", icon: Heart },
  ];

  const socialLinks = [
    {
      Icon: FaFacebook,
      url: "https://www.facebook.com",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      Icon: FaInstagramSquare,
      url: "https://www.instagram.com",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      Icon: FaTwitter,
      url: "https://www.twitter.com",
      label: "Twitter",
      color: "hover:bg-sky-600",
    },
    {
      Icon: FaLinkedin,
      url: "https://www.linkedin.com",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="mx-2 sm:mx-4 lg:mx-8 xl:mx-12 px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {/* Logo Section */}

          <div className="lg:col-span-1 space-y-6">
            <div className="group cursor-pointer">
              <div className="flex items-center space-x-3">
                <Link
                  href="/"
                  className="relative flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-xl">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                      Express Rides
                    </h1>
                    <p className="text-xs text-gray-400 -mt-1">
                      Premium Transport
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Your trusted ride-sharing partner. Safe, reliable, and convenient
              transportation at your fingertips with cutting-edge technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
                <div className="text-xl font-bold text-white">500K+</div>
                <div className="text-xs text-gray-400">Happy Riders</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <div className="text-xl font-bold text-white">50K+</div>
                <div className="text-xs text-gray-400">Active Drivers</div>
              </div>
            </div>
          </div>

          {/* Driver Section */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 group cursor-pointer">
                <Car className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-200" />
                Driver
                <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent ml-3"></div>
              </h3>
            </div>
            <div className="space-y-3">
              {driverLinks.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="group relative flex items-center space-x-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-transparent transition-all duration-300 hover:translate-x-2"
                  >
                    <IconComponent className="w-4 h-4 text-blue-400/70 group-hover:text-blue-300 transition-colors duration-200" />
                    <span className="text-gray-400 hover:text-white text-sm transition-colors duration-200 group-hover:font-medium">
                      {item.label}
                    </span>
                    <ArrowRight className="w-3 h-3 text-transparent group-hover:text-blue-400 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 pointer-events-none"></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Rider Section */}
          <div className="space-y-6">
            <div className="relative">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 group cursor-pointer">
                <Users className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                Rider
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent ml-3"></div>
              </h3>
            </div>
            <div className="space-y-3">
              {riderLinks.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="group relative flex items-center space-x-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-transparent transition-all duration-300 hover:translate-x-2"
                  >
                    <IconComponent className="w-4 h-4 text-blue-400/70 group-hover:text-blue-300 transition-colors duration-200" />
                    <span className="text-gray-400 hover:text-white text-sm transition-colors duration-200 group-hover:font-medium">
                      {item.label}
                    </span>
                    <ArrowRight className="w-3 h-3 text-transparent group-hover:text-blue-400 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                    {/* Underline animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 pointer-events-none"></span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Connect & Newsletter Section */}
          <div className="space-y-8">
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></span>
                Connect With Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(({ Icon, url, label, color }, index) => (
                  <div
                    key={index}
                    className={`group relative p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl ${color} transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-1 border border-gray-700/50 hover:border-purple-500/50`}
                    onClick={() => handleSocialClick(url)}
                    aria-label={label}
                  >
                    <Icon
                      className="text-gray-300 group-hover:text-white transition-colors duration-200"
                      size={20}
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white flex items-center gap-2">
                <MdEmail className="text-purple-400" size={20} />
                Stay Updated
              </h4>
              <div className="relative">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubscribed}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:from-green-600 disabled:to-green-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:shadow-purple-500/25"
                  >
                    {isSubscribed ? (
                      <>
                        <span className="text-sm">✓</span>
                        Subscribed!
                      </>
                    ) : (
                      <>
                        <MdSend size={16} />
                        Subscribe
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-3 p-3 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
              <MdLanguage className="text-purple-400" size={20} />
              <select className="bg-transparent text-white text-sm focus:outline-none cursor-pointer flex-1">
                <option value="en" className="bg-gray-800">
                  English
                </option>
                <option value="es" className="bg-gray-800">
                  Español
                </option>
                <option value="fr" className="bg-gray-800">
                  Français
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-blue-900/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-gray-400">
              <div className="p-2 bg-gray-800/50 rounded-full">
                <FaCopyright size={14} className="text-purple-400" />
              </div>
              <span className="text-sm">
                2024 Express Rides. All rights reserved.
              </span>
            </div>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
