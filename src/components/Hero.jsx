import React, { use, useEffect } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {useState} from 'react'
import {heroVideo, smallHeroVideo} from '../utils/index.js'

const Hero = () => {
    useGSAP(()=>{
        gsap.to('#hero', {delay: 2, opacity: 1,},[]),
        gsap.to('#cta', {delay: 2,y:-50, opacity: 1},[])
    })

    const [videoSrc, setVideoSrc] = useState(window.innerWidth>760? heroVideo:smallHeroVideo)
   
    const handleSize =()=>{
        if(window.innerWidth>760){
            setVideoSrc(heroVideo)
        }else{
            setVideoSrc(smallHeroVideo)
        }
    }

    useEffect(
        ()=>{
            window.addEventListener('resize',handleSize);
            return ()=>{
                window.removeEventListener('resize',handleSize)
        }
        },[]
    )

  return (
    <section className='w-full nav-height bg-black'>
        <div className='h=5/6 w-full flex-center flex-col'>
            <p id='hero' className='hero-title'>iPhone 15 </p>
            <div>
            <video className='pointer-events-none'autoPlay loop muted playsInline={true} key={videoSrc}>
                <source  src={videoSrc} type="video/mp4"/>
            </video>
            </div>
        </div>
        <div  id='cta' className='flex flex-col items-center opacity-0'>
            <p className='font-thin text-xl'>The most powerful iPhone ever</p>
            <a href="#highlights" className='btn'>Buy Now</a>
        </div>
    </section>
  )
}

export default Hero