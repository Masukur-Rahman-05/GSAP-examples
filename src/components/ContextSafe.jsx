import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";

function ContextSafe() {
  const yellowRef = useRef();
  const [axis, setAxis] = useState(0);
  const [rotate, setRotate] = useState(0);
  const { contextSafe } = useGSAP(); // Correct way to access contextSafe

  // Animation function
  const animateBox = contextSafe(() => {
    gsap.to(yellowRef.current, {
      x: axis,
      duration: 2,
      rotate: rotate,
      backgroundColor: "blue",
    });
  });

  // Trigger animation when state changes
  useEffect(() => {
    animateBox();
  }, [axis, rotate, animateBox]);

  return (
    <div className="w-screen h-screen bg-black text-white p-10 flex flex-col justify-evenly items-center">
      <div className="w-[200px] h-[200px] bg-yellow-300" ref={yellowRef}></div>

      <button
        className="bg-white text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white"
        onClick={() => {
          setAxis(gsap.utils.random(-500, 500));
          setRotate(gsap.utils.random(360, 720));
        }}
      >
        Move
      </button>
    </div>
  );
}

export default ContextSafe;
