import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Video from '../../Constants/Videopage/Video'
import Navbar from '../../Constants/Navbar/Navbar'


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
      <section id='hero' className=' h-full w-full absolute'>
        < Navbar />
        < Video />

        <div className=' absolute top-30 right-0 flex flex-col ' >
          <h1 className=' font-[font2] text-[8vw] text-white ' > Your Memories </h1>
          <h1 className=' font-[font2] text-[6vw] text-white ' > are our </h1>
          <h1 className=' font-[font2] text-[7vw] text-white ' > Responsibility. </h1>
        </div>

        <div className=" mt-56 ">
          <div className="package mt-56 flex justify-around flex-wrap p-12 ">
            {Packages.map((pkg)=>{
              return <div key={pkg.pkgno} className=' border-2 h-[20vw] w-[20vw] p-12 rounded-4xl ' >
                  {/* <img src='' alt={pkg.pkgname} /> */}
                  <h1> {pkg.pkgname} </h1>
                  <h2> {pkg.price} </h2>
                 </div>
            })}
          </div>
        </div>

      </section>


    </div>
  )
}

export default Home