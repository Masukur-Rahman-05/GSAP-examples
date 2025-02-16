import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useRef, useEffect } from "react";
import DirUseGSAP from "./components/DirUseGSAP";
import ContextSafe from "./components/ContextSafe";
import { First } from "./components/First";
import { Perspectivce } from "./components/Perspectivce";
import { TextStagger } from "./components/TextStagger";
import { ScrollTriggerr } from "./components/ScrollTrigger";
import { SvgFirst } from "./components/SvgFirst";
import { CursorDot } from "./components/CursorDot";
import { MenuBar } from "./components/MenuBar";

function App() {
  return (
    <div className="w-screen min-h-screen bg-black text-white overflow-x-hidden">
      {/* <DirUseGSAP/> */}
      {/* <ContextSafe/> */}
      {/* <First/> */}
      {/* <Perspectivce/> */}
      {/* <TextStagger/> */}
      {/* <ScrollTriggerr /> */}
      {/* <SvgFirst /> */}
      {/* <CursorDot /> */}
      <MenuBar />
    </div>
  );
}

export default App;
