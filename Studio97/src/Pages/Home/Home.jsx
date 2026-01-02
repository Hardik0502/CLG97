import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Video from '../../Constants/Videopage/Video'
import Navbar from '../../Constants/Navbar/Navbar'
import CircularText from '../../Containers/CircularText'
import ScrollStack, { ScrollStackItem } from "../../Containers/ScrollStackItem";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Package from '../../Constants/Package/Package'
import TrueFocus from '../../Features/ScanText'
import PageDivider from '../../Features/PageDivider'


const Home = () => {

  // gsap.registerPlugin(ScrollTrigger );

  // let tl = gsap.timeline();


  // useGSAP(()=>{
  //   gsap.from('.pkg',{
  //     opacity : 0,
  //     // duration : 0.5,
  //     stagger : 0.5,
  //   })
  // })

  const scrollContainer = useRef(null);
  const scrollRef = useRef(null);

  return (
    <div className=' font-[font1] h-screen w-full '>
      <div ref={scrollContainer} className='scrolling-container absolute inset-0 w-full h-full '>
        <section id='hero' className=' h-screen w-full relative overflow-hidden '>
          < Navbar scrollContainer={scrollRef} />

          < Video />
          <div className=' absolute top-24 bottom-6 right-16 flex flex-col justify-between opacity-90 rounded-[50px] h-[35vw] w-[90vw] ' >
            {/* <div className="texts">
              <h1 className=' font-[font2] text-[8vw] text-white ' > Your Memories </h1>
              <h1 className=' font-[font2] text-[6vw] text-white ' > are our </h1>
              <h1 className=' font-[font2] text-[7vw] text-white ' > Responsibility. </h1>
            </div>
             */}

            {/* <div className="circletext">
              <CircularText
                text="S T U D I O  9 7 * S T U D I O  9 7 * S T U D I O  9 7 * "
                onHover="speedUp"
                spinDuration={20}
                className="custom-class relative top-28 left-10"
              />
            </div> */}

            <div className="relative bottom-8">
              <TrueFocus
                sentence="Studio 97"
                manualMode={false}
                blurAmount={5}
                borderColor="blue"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>


          </div>

          <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
            <PageDivider />
          </div>

        </section>

        <section className=' min-h-[200vh] w-full bg-white -mt-[120px] pt-40 relative z-0' >

          <div className='artboard-wrapper h-full w-full flex ' >
            
            <div className=" artboard img1 w-[50%] relative " >
              <img className=' h-[40vw] -rotate-12 border-2 border-blue-950 p-8 relative left-[12%] -top-[15%] z-20 ' src="https://photos.smugmug.com/Wedding/i-rTKVhpV/0/LkJzk5jzmZHNHBkSR7Fwvj87jkHdpTbZbwwhFrdrW/L/_A749597-L.jpg" alt="" />

{/* 
              <div className="txt">
                <h1
                  className="
                      absolute
                      top-[35%]
                      right-[10%]
                      -translate-y-1/2
                      font-[font4]
                      text-black/5
                      -rotate-10
                      -z-10
                      pointer-events-none
                      select-none

                      text-[clamp(6rem,25vw,16rem)]
                    "
                >
                  
                </h1>

                </div> */}

                </div>

              <div className="uptxt w-[50%] ">
                <h1 className=' text-[33px] top-[5%] absolute right-[8%] font-[font4] text-black' > A Life be more beautiful When you  <br /> are with STUDIO 97.  </h1>

                <h2 className='text-[28px] top-[15%] -translate-y-2 right-[3%] absolute font-[font1] text-black'>
                  Considered to be the epitome of Modern Photography and Filmmaking, <br /> HOTC has transformed the Indian Wedding landscape on a regular basis.<br /> For almost a decade House On The Clouds has been creating photographs <br /> and films which are timeless and <br /> have been etched in memories of thousands of people forever.
                </h2>

              </div>
          </div>


          <div className="w-full flex justify-center">
        <div
          className="
            relative
            w-[1440px]
            h-[820px]
            scale-[1]
            origin-top
          "
        >
          {/* ===== IMAGE (RIGHT SIDE) ===== */}
          <img
            src="https://photos.smugmug.com/Wedding/i-rTKVhpV/0/LkJzk5jzmZHNHBkSR7Fwvj87jkHdpTbZbwwhFrdrW/L/_A749597-L.jpg"
            alt="Wedding"
            className="
              absolute
              right-[90px]
              top-[90px]
              w-[480px]
              rotate-12
              border-2
              border-blue-950
              p-8
              z-30
            "
          />

          {/* ===== BACKGROUND 97 ===== */}
          {/* <h1
            className="
              absolute
              left-10
              top-1/2
              -translate-y-1/2
              text-[320px]
              font-[font4]
              text-black/5
              rotate-10
              pointer-events-none
              select-none
              z-0
            "
          >
            97
          </h1> */}

          {/* ===== TEXT BLOCK (LEFT SIDE) ===== */}
          <div className="absolute left-[120px] text-black top-[100px] w-[50%] z-10">
            <h1 className="text-[33px] font-[font4]  ">
              Your Journey Is Our Destiny. <br />
              Stay Tuned...
            </h1>

            <p className="text-[28px] leading-10 font-[font1]">
              Considered to be the epitome of Modern Photography and
              Filmmaking, HOTC has transformed the Indian Wedding landscape
              on a regular basis.
              <br />
              For almost a decade House On The Clouds has been creating
              photographs and films which are timeless and have been etched
              in memories of thousands of people forever.
            </p>
          </div>
        </div>
      </div>


        </section>

        <section className=' h-full w-full bg-black ' >
        </ section>

        <section className=' h-full w-full bg-white ' >
        </ section>

        <section className=' h-full w-full bg-black ' >
        </ section>

        <section className=' h-full w-full bg-white ' >
        </ section>




        {/* 
                    <ScrollStack>
            <ScrollStackItem>
                <h2>Card 1</h2>
                <p>This is the first card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
                <h2>Card 2</h2>
                <p>This is the second card in the stack</p>
            </ScrollStackItem>
            <ScrollStackItem>
                <h2>Card 3</h2>
                <p>This is the third card in the stack</p>
            </ScrollStackItem>
        </ScrollStack> */}


      </div>
    </div>
  )
}

export default Home