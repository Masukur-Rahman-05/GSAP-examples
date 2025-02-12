import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import DirUseGSAP from "./components/DirUseGSAP";
import ContextSafe from "./components/ContextSafe";
import { First } from "./components/First";
import { Perspectivce } from "./components/Perspectivce";
import { TextStagger } from "./components/TextStagger";

function App() {
  

  return (
    <div className="w-screen h-screen bg-black text-white p-10 flex justify-center items-center">

      {/* <DirUseGSAP/> */}
      {/* <ContextSafe/> */}
      {/* <First/> */}
      {/* <Perspectivce/> */}
      <TextStagger/>
      
    </div>
  );
}

export default App;
