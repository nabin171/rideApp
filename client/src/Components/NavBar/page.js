"use client";

import { useState, useEffect } from "react";
import { Car, Users, Info, Mail, LogIn, Zap } from "lucide-react";
import Link from "next/link"; // Link is already imported

export default function PremiumNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // remove token
    setLoggedIn(false); // update state
    window.location.href = "/"; // optional: redirect
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // or whatever key you used
    setLoggedIn(!!token); // true if token exists, false if not
  }, []);

  const navItems = [
    { href: "/river", label: "Driver", icon: Car },
    { href: "/rider", label: "Rider", icon: Users },
    { href: "/AboutUs", label: "About", icon: Info },
    { href: "/Contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      }
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="mx-2 sm:mx-4 lg:mx-8 xl:mx-12 px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with glow effect */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <Link
              href="/"
              className="relative flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 blur-lg transition-all duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-xl">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Express Rides
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Premium Transport</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/5 flex items-center space-x-2 text-white/80 group-hover:text-white"
                  >
                    <IconComponent className="w-5 h-5 group-hover:text-purple-400 transition-colors duration-200" />
                    <span className="font-medium tracking-wide">
                      {item.label}
                    </span>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-4/5 transition-all duration-300 rounded-full"></div>
                  </Link>
                );
              })}

              {/* Premium Login Button */}
              <div className="ml-4">
                {loggedIn ? (
                  <Link
                    href="/" // Use Link for internal navigation
                    className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-500 hover:via-purple-600 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden"
                  >
                    <LogIn className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Logout</span>
                  </Link>
                ) : (
                  <Link
                    href="/login" // Use Link for internal navigation
                    className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-500 hover:via-purple-600 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden"
                  >
                    <LogIn className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative group p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center w-6 h-6">
                <span
                  className={`block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white rounded-full mt-1 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white rounded-full mt-1 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-purple-500/20 shadow-2xl">
          <div className="px-6 py-8 space-y-4">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                    {item.label}
                  </span>
                  <div className="flex-1"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-all duration-300 group-hover:scale-150"></div>
                </Link>
              );
            })}

            <div className="pt-6 mt-6 border-t border-white/10">
              <Link
                href="/login" // Use Link for internal navigation
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <LogIn className="w-5 h-5" />
                <span>Login to Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { Car, Users, Info, Mail, LogIn, Zap, Shield } from "lucide-react";
// import Link from "next/link";

// export default function PremiumNavbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Toggle mobile menu
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Function to check token status
//   const checkAuthStatus = () => {
//     const token = localStorage.getItem("authToken");
//     setLoggedIn(!!token);
//   };

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("authToken"); // remove token
//     setLoggedIn(false); // update navbar state instantly

//     // Optional: Redirect to home page after logout
//     // window.location.href = "/";
//   };

//   // Check if user has token on app start AND listen for storage changes
//   useEffect(() => {
//     // Initial check
//     checkAuthStatus();

//     // Listen for storage changes (when user logs in from another tab/page)
//     const handleStorageChange = (e) => {
//       if (e.key === "authToken") {
//         checkAuthStatus();
//       }
//     };

//     // Listen for custom event (when user logs in on same page)
//     const handleAuthChange = () => {
//       checkAuthStatus();
//     };

//     window.addEventListener("storage", handleStorageChange);
//     window.addEventListener("authStatusChanged", handleAuthChange);

//     // Cleanup listeners
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//       window.removeEventListener("authStatusChanged", handleAuthChange);
//     };
//   }, []);

//   const navItems = [
//     { href: "/river", label: "Driver", icon: Car },
//     { href: "/rider", label: "Rider", icon: Users },
//     { href: "/AboutUs", label: "About", icon: Info },
//     { href: "/Contact", label: "Contact", icon: Mail },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
//       <div className="mx-4 lg:mx-8 px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3">
//             <div className="relative">
//               <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-lg"></div>
//               <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-xl">
//                 <Zap className="w-7 h-7 text-white" />
//               </div>
//             </div>
//             <div className="hidden sm:block">
//               <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
//                 Express Rides
//               </h1>
//               <p className="text-xs text-gray-400 -mt-1">Premium Transport</p>
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {navItems.map((item) => {
//               const IconComponent = item.icon;
//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="group relative px-6 py-3 rounded-xl flex items-center space-x-2 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
//                 >
//                   <IconComponent className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
//                   <span className="font-medium">{item.label}</span>
//                 </Link>
//               );
//             })}

//             {/* Login / Logout */}
//             {loggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-500 hover:via-purple-600 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
//               >
//                 <LogIn className="w-5 h-5" />
//                 <span>Logout</span>
//               </button>
//             ) : (
//               <Link
//                 href="/login"
//                 className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-500 hover:via-purple-600 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
//               >
//                 <LogIn className="w-5 h-5" />
//                 <span>Login</span>
//               </Link>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
//             >
//               <div className="flex flex-col w-6 h-6 justify-center items-center">
//                 <span
//                   className={`block h-0.5 w-6 bg-white rounded-full transition-transform ${
//                     isMenuOpen ? "rotate-45 translate-y-1" : ""
//                   }`}
//                 />
//                 <span
//                   className={`block h-0.5 w-6 bg-white rounded-full mt-1 transition-opacity ${
//                     isMenuOpen ? "opacity-0" : ""
//                   }`}
//                 />
//                 <span
//                   className={`block h-0.5 w-6 bg-white rounded-full mt-1 transition-transform ${
//                     isMenuOpen ? "-rotate-45 -translate-y-1" : ""
//                   }`}
//                 />
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20 shadow-2xl">
//           <div className="px-6 py-8 space-y-4">
//             {navItems.map((item, index) => {
//               const IconComponent = item.icon;
//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 transition-all duration-300"
//                 >
//                   <IconComponent className="w-5 h-5 text-purple-300" />
//                   <span className="text-white">{item.label}</span>
//                 </Link>
//               );
//             })}

//             {/* Login / Logout mobile */}
//             {loggedIn ? (
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   setIsMenuOpen(false);
//                 }}
//                 className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white p-4 rounded-xl font-semibold transition-all duration-300"
//               >
//                 <LogIn className="w-5 h-5" />
//                 <span>Logout</span>
//               </button>
//             ) : (
//               <Link
//                 href="/login"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white p-4 rounded-xl font-semibold transition-all duration-300"
//               >
//                 <LogIn className="w-5 h-5" />
//                 <span>Login</span>
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
