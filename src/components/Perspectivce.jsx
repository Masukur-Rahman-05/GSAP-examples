import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export const Perspectivce = () => {
    const boxRef = useRef();
    const {contextSafe} = useGSAP();

    const animateBox = contextSafe(()=>{
        gsap.to(boxRef.current,{
            transformPerspective:800,
            rotateY:300,
            duration:5,
            force3D:true,
        })
    })
  return (
    <div className="flex flex-col justify-center items-center gap-10 border-1 border-slate-500">
    <div ref={boxRef} className="w-[200px] h-[200px] bg-yellow-300"></div>
    <button onClick={animateBox} className="bg-white text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">Move</button>
</div>
  )
}
