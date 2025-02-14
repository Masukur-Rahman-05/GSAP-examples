// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger"; // ✅ Fixed import
// gsap.registerPlugin(ScrollTrigger);
// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";

// export const ScrollTriggerr = () => {
//   const containerRef = useRef();

//   useGSAP(
//     () => {
//       gsap.from("#Page1 .box", {
//         x: 300,
//         opacity: 0,
//         duration: 2,
//       });
//     },
//     { scope: containerRef }
//   );

//   useGSAP(
//     () => {
//       gsap.from("#Page2 .box", {
//         opacity: 0,
//         rotate: 360,
//         x: -500,
//         duration: 4,
//         scrollTrigger: {
//           trigger: "#Page2 .box",
//           start: "top 30%", // ✅ More natural scroll trigger point
//           toggleActions: "play none none reverse",
//           pin: true, // pin the component
//         },
//       });
//     },
//     { scope: containerRef }
//   );

//   useGSAP(
//     () => {
//       gsap.from("#Page3 .box", {
//         opacity: 0,
//         rotate: 760,
//         y: -100,
//         duration: 4,
//         force3D: true,
//         scrollTrigger: {
//           trigger: "#Page3 .box",
//           start: "top 30%", // ✅ More natural scroll trigger point

//           markers: true,
//           toggleActions: "play none none reverse",
//           scrub: 1, //It will be animated only in the range of start and end point (true , false, any number from 1 to 5 for smoothness)
//         },
//       });
//     },
//     { scope: containerRef }
//   );

//   useGSAP(() => {
//     gsap.to("#Page4 p", {
//       transform: "translateX(-200%)",
//       scrollTrigger: {
//         trigger: "#Page4",
//         markers: true,
//         start: "top 0%",
//         end: "top -150%",
//         scrub: 2,
//         pin: true,
//       },
//     });
//   });

//   return (
//     <div ref={containerRef} className="w-screen min-h-screen mx-auto">
//       <div
//         id="Page1"
//         className="w-screen h-screen bg-pink-200 flex justify-center items-center"
//       >
//         <div className="box w-[200px] h-[200px] bg-red-600"></div>
//       </div>

//       <div
//         id="Page4"
//         className="min-w-screen h-screen bg-green-200 flex justify-center items-center"
//       >
//         <p className="min-w-screen text-nowrap text-black text-[30vw]">
//           WELCOME TO THE NEW HOME
//         </p>
//       </div>
//       <div
//         id="Page2"
//         className="w-screen h-screen bg-orange-200 flex justify-center items-center"
//       >
//         <div className="box w-[200px] h-[200px] bg-black"></div>
//       </div>

//       <div
//         id="Page3"
//         className="w-screen h-[1000px] bg-blue-200 flex justify-center items-center"
//       >
//         <div className="box w-[200px] h-[200px] bg-violet-600"></div>
//       </div>
//     </div>
//   );
// };

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // ✅ Fixed import
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const ScrollTriggerr = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from("#Page1 .box", {
        x: 300,
        opacity: 0,
        duration: 2,
      });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.from("#Page2 .box", {
        opacity: 0,
        rotate: 360,
        x: -500,
        scrollTrigger: {
          trigger: "#Page2",
          start: "top 20%", // ✅ More natural scroll trigger point
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.from("#Page3 .box", {
        opacity: 0,
        rotate: 760,
        y: 200,

        force3D: true,
        scrollTrigger: {
          trigger: "#Page3",
          start: "top 10%", // ✅ More natural scroll trigger point
          markers: true,
          // toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      gsap.to("#Page4 p", {
        x: "-350vw", // ✅ Using `x` instead of `transform`
        delay: 2,
        duration: 4,

        scrollTrigger: {
          trigger: "#Page4",
          markers: true,
          start: "top 0%",
          end: "top -300%",
          scrub: 2,
          pin: true, // ✅ Pins the section while scrolling
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-screen min-h-screen mx-auto">
      <div
        id="Page1"
        className="w-screen h-screen bg-pink-200 flex justify-center items-center"
      >
        <div className="box w-[200px] h-[200px] bg-red-600"></div>
      </div>

      <div
        id="Page2"
        className="w-screen h-screen bg-orange-200 flex justify-center items-center"
      >
        <div className="box w-[200px] h-[200px] bg-black"></div>
      </div>

      <div
        id="Page3"
        className="w-screen h-[1000px] bg-blue-200 flex justify-center items-center"
      >
        <div className="box w-[200px] h-[200px] bg-violet-600"></div>
      </div>

      <div
        id="Page4"
        className="w-screen h-screen bg-green-200 flex justify-center items-center overflow-hidden "
      >
        <p className="w-screen text-nowrap text-black text-[30vw] font-bold  will-change-transform mx-10">
          WELCOME TO THE NEW HOME
        </p>
      </div>
    </div>
  );
};
