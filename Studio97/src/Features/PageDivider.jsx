import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const PageDivider = ({ scrollContainer }) => {

  const pathRef = useRef(null);

  useGSAP(() => {

    gsap.from(pathRef.current, {
      scaleX: 0,
      transformOrigin: "center",
      ease: "power3.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: pathRef.current,
        scroller: scrollContainer?.current || window,
        start: "top 85%",
      },

    })


  }, [])

  return (
    <div>
       <svg
      viewBox="0 0 1440 260"
      preserveAspectRatio="none"
      className="w-full h-[150px] z-50 block"
    >
      <polygon
        points="
          0,0
          0,0
          750,260
          1550,0
          1780,0
          1440,260
          0,260
        "
        fill="white"
      />

      </svg>
    </div>
  )
}

export default PageDivider
