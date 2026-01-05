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
import CircularGallery from '../../Features/RoundGallery'
import { easeIn, easeOut } from 'motion/react'


const Home = () => {

  gsap.registerPlugin(ScrollTrigger );



  useGSAP(()=>{
    gsap.to('.cards',{
      scrollTrigger : {
        trigger : '.cards' ,
        // markers : true,
        start : 'top 5%',
        end : 'top 90%',
        scrub : 1,
      },
      delay : 0.5,
      duration : 1,
      transition : 'easeIn',
      background : 'black'
    })
  })

  const scrollContainer = useRef(null);
  const scrollRef = useRef(null);

  let memoData = [
    {
      link : 'https://photos.smugmug.com/Wedding/i-kBvBHkQ/0/NHxbCTVHd7Sz3Z2pP3p6M39wTWBqQbTKdXrqVx5qs/L/_DSC8406-L.jpg',
      name : 'Dipen + Varsha',
      date : '5th, Sept 2025 '
    },
    {
      link : 'https://photos.smugmug.com/Pre-Wedding/i-HRpqFmW/0/LMSxj2FZDQknVK75PHfWwvkGXc6CcqfPG5bfGRcJ6/L/JAYU-91-L.jpg',
      name : 'Kush + Natasha',
      date : '18th, Jan 2024 '
    },
    {
      link : 'https://photos.smugmug.com/Pre-Wedding/i-mRJSrmB/0/NK2HTkG7x8vMNzG2m5r5rDJfjbvwHZbfgL7dxTk5p/L/_DSC7655-L.jpg',
      name : 'Rahul + Jignasha',
      date : '8th, Apr 2025 '
    },
    {
      link : 'https://photos.smugmug.com/Wedding/i-WmCdC2g/0/MtXJmvLt9XVwKj3tPLGTMh7cDz4V9xpQhk9sHNGXg/L/DSC09298-L.jpg',
      name : 'Jayaraj + Riya',
      date : '17th, Dec 2025 '
    },
    {
      link : 'https://photos.smugmug.com/Wedding/i-HfrwtBv/0/LMrbQJrPgPmjdC6RmMXkqgGFFpFRS52RnRHXrhfr5/L/DSC00160-L.jpg',
      name : 'Yogesh + Neesha',
      date : '24th, May 2025 '
    },
  ]



  return (
    <div className=' font-[font1] h-screen w-full '>
      <div ref={scrollContainer} className='scrolling-container relative inset-0 w-full h-full '>
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

          <div className="absolute bottom-0 left-0 w-full z-0">
            <PageDivider />
          </div>

        </section>

        <section className=' min-h-[200vh] w-full bg-white relative z-0' >

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
              <h1 className=' text-[30px] top-[5%] absolute right-[8%] font-[font4] text-black' > A Life be more beautiful When you  <br /> are with STUDIO 97.  </h1>

              <h2 className='text-[22px] top-[15%] -translate-y-2 right-[8%] absolute font-[font1] text-black'>
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
                src="https://photos.smugmug.com/Wedding/i-NqnRsBb/0/MKTZk3XLcRm2ngP3Gh82LhS8XTqtsDvrMX6CB9ss8/L/DSC09787-L.jpg"
                alt="Wedding"
                className="
              absolute
              right-[98px]
              top-2.5
              w-[500px]
              rotate-15
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
              <div className="absolute left-[70px] text-black top-[100px] w-[50%] z-10">
                <h1 className="text-[30px] font-[font4]  ">
                  Your Journey Is Our Destiny. <br />
                  Stay Tuned...
                </h1>
                <br />

                <p className="text-[22px] leading-8 w-[80%] font-[font1]">
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

        <section className=' h-[50vw] relative bg-white ' >

          <div className=" h-full ">
            <img className=' inset-0 h-full w-full object-cover -z-10 ' src="https://photos.smugmug.com/Pre-Wedding/i-jv7BK6f/0/L79D9q5jmWhFzZMTpZQQJhZQjFBgxm4RSXTr4rd3T/L/JAYU-148-L.jpg" alt="" />
          </div>

            <div className="texts h-full w-full absolute top-0 flex flex-col justify-center items-center ">
              <h1 className=' text-[8vw] text-[#D8D8D8] ' > <span className=' text-red-800 font-[font4] ' >love</span>+<span className=' text-black font-[font5] ' > Memories  </span> </h1>
                <div className="para opacity-70 text-[1.2vw] w-full flex flex-col justify-between items-center ">
              <p className=' ' >
                Considered to be the epitome of Modern Photography and
                  Filmmaking, HOTC has transformed the Indian Wedding landscape
                  on a regular basis.
                  <br />
                  For almost a decade House On The Clouds has been creating
                  photographs and films which are timeless and have been etched
                  in  people forever.
                  <br />                  
              </p>
              <p>
                
                  For almost a decade House On The Clouds has been creating
                  photographs and films which are timeless and have been etched
                  in memories of thousands of people forever.
                  For almost a decade House On The Clouds has 
                  <br />
                  Considered to be the epitome of Modern Photography and
                  Filmmaking, HOTC has transformed the Indian Wedding landscape
                  on a regular basis.Considered to be the epitome of Modern Photography ...
                  <br />
                  <br />
                  For almost a decade House On The Clouds has been creating
                  photographs and films which are timeless and have been etched
                  in memories of thousands of people forever.
                  For almost a decade House On The Clouds has
                  <br />
                  Considered to be the epitome of Modern Photography and
                  Filmmaking, HOTC has transformed the Indian Wedding landscape
                  on a regular basis.Considered to be the 
                  epitome of Modern Photography and nkkdsnfdkfdnldsnkmldz fdlk
                  <br />
                  Considered to be the epitome of Modern Photography and
                  Filmmaking, HOTC has transformed the Indian Wedding landscape
                  on a regular basis.Considered to be the 
                  epitome of Modern Photography and nkkdsnfdkfdnldsnkmldz fdlk
                  <br />
                  Considered to be the epitome of Modern Photography and
                  Filmmaking, HOTC has transformed the Indian Wedding landscape
                  on a regular basis.Considered to be the 
                  epitome of Modern Photography and nkkdsnfdkfdnldsnkmldz fdlk
                  <br />
                  Considered to be the epitome of Modern Photography and
                  Filmmaking, HOTC has transformed the Indian Wedding landscape
                  on a regular basis.Considered to be the 
                  epitome of Modern Photography and nkkdsnfdkfdnldsnkmldz fdlk
                  <br />
                  <br />
                  <br /><br />
              </p>
              </div>

                <button className='btn h-[50px] border w-32 font-[font2] bg-white text-black  ' > Expolre More </button>

            </div>
          
            {/* <div className="absolute inset-0">
              <CircularGallery
                bend={3}
                borderRadius={0.04}
                scrollEase={0.01}
              />
            </div> */}
          

        </ section>

        <section className='blackpg h-[400vh] w-full bg-[#D8D8D8] ' >
              <div className="cards h-full w-full flex flex-col z-20 ">

                <div className="txt flex justify-center  ">
                <h1 className='relative text-red-900 text-[15vh] top-20 font-[font2]' > Memories </h1>
                </div>


                <div className="allcard relative h-[180vh] w-full flex flex-wrap justify-center  gap-10  ">
                
                {memoData.map((data,index)=>{
                  return <div key={index} className="card group h-[45%] w-[27%] cursor-pointer bg-white relative flex flex-col top-50   ">
                  <img className='subcard relative h-full w-full border-white ' src={data.link} alt="" />
                <h2 className='subtxt  text-white relative flex justify-around items-baseline left-2 text-xl top-1 font-[font2] group-hover:text-black  ' > {data.name}  <span className=' underline font-[font1] text-[22px] ' > {data.date} </span> </h2>
              </div>
                })}

              </div>
                </div>


                

        </ section>

        <section className=' h-[200vh] w-full bg-red-800 ' >

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