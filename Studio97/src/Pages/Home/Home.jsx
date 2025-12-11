import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Video from '../../Constants/Videopage/Video'
import Navbar from '../../Constants/Navbar/Navbar'
import CircularText from '../../Containers/CircularText'
import ScrollStack, { ScrollStackItem } from "../../Containers/ScrollStackItem";

const Home = () => {

  // useGSAP(()=>{
  //   gsap.to('.he',{
  //     height : '400px',
  //     x : 100,
  //     y : 100,
  //     delay : 0.5,
  //     color : 'black',
  //     yoyo : true,
  //     repeat : -1,
  //   })
  // })

  let Packages = [
    {
      pkgno: 1,
      pkgname: 'Baby Shower',
      price: 15000,
      img: '',
    },
    {
      pkgno: 2,
      pkgname: 'Pre-Wedding',
      price: 30000,
      img: '',
    },
    {
      pkgno: 3,
      pkgname: 'Birthday Shoot',
      price: 10000,
      img: '',
    },
    {
      pkgno: 4,
      pkgname: 'Wedding',
      price: 120000,
      img: '',
    }
  ];

  return (
    <div className=' font-[font1] h-screen w-full overflow-hidden '>
      < Video />
      <div className=' absolute inset-0 w-full h-full overflow-y-auto '>
        <section id='hero' className=' h-screen w-full relative '>
          < Navbar />

          <div className=' absolute top-24 bottom-6 right-16 flex flex-col opacity-90 rounded-[50px] bg-black h-[35vw] w-[90vw] ' >
            {/* <h1 className=' font-[font2] text-[8vw] text-white ' > Your Memories </h1>
          <h1 className=' font-[font2] text-[6vw] text-white ' > are our </h1>
          <h1 className=' font-[font2] text-[7vw] text-white ' > Responsibility. </h1> */}
            <CircularText
              text="S T U D I O  9 7 * S T U D I O  9 7 * S T U D I O  9 7 * "
              onHover="speedUp"
              spinDuration={20}
              className="custom-class relative top-28 left-10"
            />
          </div>
        </section>

        <section className=' w-full bg-black py-12 ' >
          <div className=" ">
            <div className="package flex justify-around flex-wrap p-12 ">
              {Packages.map((pkg) => {
                return <div key={pkg.pkgno} className=' border-2 h-[20vw] w-[20vw] p-12 rounded-4xl ' >
                  {/* <img src='' alt={pkg.pkgname} /> */}
                  <h1> {pkg.pkgname} </h1>
                  <h2> {pkg.price} </h2>
                </div>
              })}
            </div>
          </div>

        </section>

        
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