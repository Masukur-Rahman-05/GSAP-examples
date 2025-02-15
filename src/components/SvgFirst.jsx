// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React, { useRef } from "react";

// export const SvgFirst = () => {
//   let path = `M 50 150 Q 450 150, 950 150`;
//   let FinalPath = `M 50 150 Q 450 150, 950 150`;

//   const svgRef = useRef();

//   const MouseEnter = (e) => {
//     console.log(e);
//     path = `M 50 150 Q ${e.pageX} ${e.pageY}, 950 150`

//     useGSAP(()=>{
//         gsap.to("svg path",{
//             attr:{d:path}

//         })
//     })
//   };
//   const MouseLeave = (e) => {
//     console.log(e);
//   };

//   return (
//     <div className="w-screen h-[400px] bg-gray-800 flex justify-center items-center ">
//       <svg
//         width="1000"
//         height="300"
//         // viewBox="0 0 800 200"
//         className="border-white border-2"
//         onMouseEnter={MouseEnter}
//         onMouseLeave={MouseLeave}
//       >
//         <path d="M 50 150 Q 450 150, 950 150" stroke="white" fill="none" />
//       </svg>
//     </div>
//   );
// };

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const SvgFirst = () => {
  const pathRef = useRef(null); // Reference for the <path>
  const svgRef = useRef(null); // Reference for the <svg>

  const MouseEnter = (e) => {
    const rect = svgRef.current.getBoundingClientRect(); // Get SVG position
    const relativeX = e.pageX - rect.left;
    const relativeY = e.pageY - rect.top;

    gsap.to(pathRef.current, {
      attr: { d: `M 50 150 Q ${relativeX} ${relativeY}, 950 150` },
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const MouseLeave = () => {
    gsap.to(pathRef.current, {
      attr: { d: "M 50 150 Q 450 150, 950 150" }, // Reset to original path
      duration: 0.5,
      ease: "elastic.out(1,0.3)",
    });
  };

  return (
    <div className="w-screen h-[400px] bg-gray-800 flex justify-center items-center">
      <svg
        ref={svgRef}
        width="1000"
        height="300"
        className="border-white border-2"
        onMouseMove={MouseEnter}
        onMouseLeave={MouseLeave}
      >
        <path
          ref={pathRef}
          d="M 50 150 Q 450 150, 950 150"
          stroke="white"
          fill="none"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
