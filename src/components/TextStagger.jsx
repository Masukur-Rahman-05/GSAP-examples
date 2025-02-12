import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import  { useRef } from 'react'

export const TextStagger = () => {

    const textRef = useRef()
    const boxRef = useRef()

    const {contextSafe} = useGSAP()
    const timeLine = gsap.timeline()

    const animateText = contextSafe(()=>{
        timeLine.from('p',{
            opacity:0,
            y:90,
            duration:2,
            stagger:0.5,
        })
        .to(boxRef.current, {
            x:500,
            duration:3,
            rotateY:720,
        })
    })
  return (
    <div className='space-y-5'>
        <div ref={textRef} className='text-3xl'>
            <p>Hi, I am Masuk Rahman</p>
            <p>A full Stack developer</p>
            <p>A DevOps enthusiast</p>
            
            
        </div>

        <div ref={boxRef} className='w-[100px] h-[100px] bg-yellow-600'>

        </div>

        <button onClick={animateText} className='bg-white text-black px-10 py-2 hover:bg-red-500 hover:text-white '>Animate</button>
    </div>
  )
}
