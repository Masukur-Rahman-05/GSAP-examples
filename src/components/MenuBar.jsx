import { div } from "framer-motion/client";
import React from "react";

export const MenuBar = () => {
  return (
    <div className="relative w-screen h-screen bg-black  p-10">
      <div>LOGO</div>
      <div className="fixed w-[40%] h-full top-0 right-[0%] px-16 py-24 bg-slate-800 space-y-10">
        <p>Home</p>
        <p>Services</p>
        <p>Packages</p>
        <p>Contact</p>
        <p>About Us</p>
      </div>
    </div>
  );
};
