import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import DirUseGSAP from "./components/DirUseGSAP";
import ContextSafe from "./components/ContextSafe";
import { First } from "./components/First";

function App() {
  

  return (
    <div className="w-screen h-screen bg-black text-white p-10 flex flex-col justify-evenly items-center">

      {/* <DirUseGSAP/> */}
      {/* <ContextSafe/> */}
      <First/>
      
    </div>
  );
}

export default App;
