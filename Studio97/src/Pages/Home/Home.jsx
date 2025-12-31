import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Video from '../../Constants/Videopage/Video'
import Navbar from '../../Constants/Navbar/Navbar'
import CircularText from '../../Containers/CircularText'
import ScrollStack, { ScrollStackItem } from "../../Containers/ScrollStackItem";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Package from '../../Constants/Package/Package'
import TrueFocus from '../../Features/ScanText'


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



  return (
    <div className=' font-[font1] h-screen w-full overflow-hidden '>
      <div className='scrolling-container absolute inset-0 w-full h-full overflow-y-auto '>
        <section id='hero' className=' h-screen w-full relative overflow-hidden '>
          < Navbar />

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

            <TrueFocus
              sentence="Studio 97"
              manualMode={false}
              blurAmount={5}
              borderColor="blue"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />


          </div>
        </section>

        <section className=' h-full w-full bg-[#e6dfcf] ' >


          <div className=' flex justify-between ' >

            <div className=' font-[font2] uppercase h-[full] w-[50vw] ' >
              <h1 className=' text-[5vw] text-black' > The Spark of memories  </h1>
              <h3 className=' text-[1vw] font-stretch-50% text-black font-[font1] ' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat obcaecati repudiandae dignissimos dolor neque aut expedita voluptas, consequatur, odio quibusdam doloribus fuga inventore repellendus quae accusamus quaerat tenetur perferendis!
                Animi quo officiis reprehenderit quas consectetur neque quam officiis nostrum suscipit dignissimos provident accusantium
                maxime non optio, voluptate blanditiis ut quis? Reiciendis quaerat expedita repellendus.
                Enim nulla sed labore? </h3>
            </div>

            <div className=' ' >
              <img src="https://icon2.cleanpng.com/20240216/bbh/transparent-photographer-photographer-camera-tripod-orange-jac-photographer-in-orange-jacket-takes-picture-1710875624647.webp"
                className=' h-full w-[40vw] '
                alt="" />
            </div>
          </div>
          {/* <Package /> */}
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