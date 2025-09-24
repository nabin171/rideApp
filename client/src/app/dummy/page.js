"use client";
import React, { useState } from "react";

const page = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLoggedIn = () => {
    setLoggedIn(true);
  };
  const handleLoggedOut = () => {
    setLoggedIn(false);
  };
  return (
    <div className="pt-40">
      {loggedIn ? (
        <button onClick={handleLoggedOut} className="p-2 bg-black text-white">
          logout
        </button>
      ) : (
        <button onClick={handleLoggedIn} className="p-2 bg-black text-white">
          login
        </button>
      )}
    </div>
  );
};

export default page;
