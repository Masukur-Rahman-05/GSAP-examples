import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import DirUseGSAP from "./components/DirUseGSAP";
import ContextSafe from "./components/ContextSafe";
import { First } from "./components/First";
import { Perspectivce } from "./components/Perspectivce";
import { TextStagger } from "./components/TextStagger";
import { ScrollTriggerr } from "./components/ScrollTrigger";

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-black text-white p-10 flex justify-center items-center overflow-x-hidden">
      {/* <DirUseGSAP/> */}
      {/* <ContextSafe/> */}
      {/* <First/> */}
      {/* <Perspectivce/> */}
      {/* <TextStagger/> */}
      <ScrollTriggerr />
    </div>
  );
}

export default App;
