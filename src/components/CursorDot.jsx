import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const CursorDot = () => {
  const dotRef = useRef();

  const MouseMove = (e) => {
    gsap.to(dotRef.current, {
      x: e.pageX, // Offset to center
      y: e.pageY, // Offset to center
      duration: 1,
      ease: "back.out(1.7)",
    });
  };
  const MouseEnter = (e) => {
    gsap.to(dotRef.current, {
      scale: 3,
      duration: 1,
      ease: "back.out(1.7)",
    });
  };
  const MouseLeave = (e) => {
    gsap.to(dotRef.current, {
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
    });
  };

  return (
    <div
      className="relative w-screen h-screen bg-black  "
      onMouseMove={MouseMove}
    >
      <div
        ref={dotRef}
        className="absolute z-30 w-[10px] h-[10px] bg-white rounded-full  pointer-events-none"
      ></div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-800 "
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}
      ></div>
    </div>
  );
};

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef, useState } from "react";

// export const CursorDot = () => {
//   const dotRef = useRef();
//   const dotSize = 10;
//   const [isHovering, setIsHovering] = useState(false);

//   const MouseMove = (e) => {
//     gsap.to(dotRef.current, {
//       x: e.pageX,
//       y: e.pageY,
//       duration: 1,
//       ease: "back.out(1.7)",
//     });
//   };

//   const MouseEnter = (e) => {
//     setIsHovering(true);
//     gsap.to(dotRef.current, {
//       scale: 4,
//       duration: 1,
//       ease: "back.out(1.7)",
//     });
//   };

//   const MouseLeave = (e) => {
//     setIsHovering(false);
//     gsap.to(dotRef.current, {
//       scale: 1,
//       duration: 1,
//       ease: "back.out(1.7)",
//     });
//   };

//   return (
//     <div
//       className="relative w-screen h-screen bg-black"
//       onMouseMove={MouseMove}
//     >
//       <div
//         ref={dotRef}
//         className="absolute z-30 flex items-center justify-center pointer-events-none"
//       >
//         <div className="w-[10px] h-[10px] bg-white rounded-full" />
//         {isHovering && (
//           <span
//             className="absolute text-white text-xs whitespace-nowrap"
//             style={{ transform: "translateY(20px)" }}
//           >
//             View More
//           </span>
//         )}
//       </div>
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-800"
//         onMouseEnter={MouseEnter}
//         onMouseLeave={MouseLeave}
//       />
//     </div>
//   );
// };
