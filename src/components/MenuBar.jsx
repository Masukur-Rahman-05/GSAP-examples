import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import gsap from "gsap";

export const MenuBar = () => {
  const menuIconRef = useRef();
  const menuBarRef = useRef();
  const closeIconRef = useRef();

  const timeLine = gsap.timeline();

  useGSAP(() => {
    timeLine
      .to(menuBarRef.current, {
        right: "0%",
        duration: 0.8,
        ease: "power2.out",
      })
      .from("#menuBar p", {
        opacity: 0,
        duration: 0.3,
        x: 300,
        stagger: 0.1,
      });
  });
  timeLine.pause();

  const openMenu = () => {
    timeLine.play();
  };
  const closeMenu = () => {
    timeLine.reverse();
  };

  return (
    <div className="relative w-screen h-screen bg-black flex justify-between items center  p-10">
      <div>LOGO</div>
      <CiMenuFries
        ref={menuIconRef}
        className="text-3xl font-bold text-white cursor-pointer"
        onClick={openMenu}
      />
      <div
        ref={menuBarRef}
        id="menuBar"
        className="fixed w-[40%] h-full top-0 right-[-40%] px-16 py-24 bg-slate-800 space-y-10"
      >
        <IoCloseSharp
          onClick={closeMenu}
          ref={closeIconRef}
          className="absolute top-[5%] right-[10%] text-3xl cursor-pointer"
        />
        <p>Home</p>
        <p>Services</p>
        <p>Packages</p>
        <p>Contact</p>
        <p>About Us</p>
      </div>
    </div>
  );
};
