import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react";


export const First = () => {

  const {contextSafe} = useGSAP();
  const boxRef = useRef()

  const animateBox = contextSafe(()=>{
    gsap.to(boxRef.current, {
      x:900,
      // z:-200,
      duration:4,
      rotateX:360,
      rotateY:960,
      backgroundColor:"white",
      borderRadius:"10%",
      scale:0.8,
      skew:30,
      transformOrigin:"center -90%",
      opacity:0.5,
      repeat: 4 , // -1 for infinite times of animation
      yoyo: true, //alter the direction
      
    })
  })
  return (
    <div className="flex flex-col justify-center items-center gap-10">
        <div ref={boxRef} className="w-[200px] h-[200px] bg-yellow-300"></div>
        <button onClick={animateBox} className="bg-white text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">Move</button>
    </div>
  )
}
