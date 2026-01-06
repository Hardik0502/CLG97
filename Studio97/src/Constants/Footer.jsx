import React from 'react'
import { Instagram } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Facebook } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=' h-[40vh] relative w-full border-black border-4 border-b-20  rounded-[100px] bg-[#F0E9E0] ' >
          <div className=' h-full ' >

            {/* <div className="absolute inset-0 pointer-events-none h-full w-full z-0">
            <LastPageDivider />
          </div> */}

            <div className="footer relative top-2 h-full flex justify-around items-center opacity-85 ">
              <div className="info flex justify-center items-center flex-col ">
                <h1 className=' text-5xl text-orange-900 uppercase font-[font2] ' > Jayu Prajapati </h1> <br />
                <div className="other text-xl ">
                  <p className=' font-[font2] text-black ' >
                    <span className=' text-2xl ' > 7777988897 </span>
                  </p>
                  <p className='font-[font2] text-black' >
                    <span className=' text-2xl ' > jp7777988897@gmail.com </span>
                  </p>
                </div>
              </div>
              <div className="add">
                <p className='font-[font2] text-black text-[25px] ' >
                  <span className=' text-orange-800 text-[20px] ' >  </span>  &nbsp; 1st floor, Besides Raghuvir Society <br />&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Anand - 388001
                </p>
              </div>
              <div className="logo h-full z-2">
                <img className=' h-[80%] relative w-full pointer-events-none ' src=".././public/logo.png" alt="" />
                <div className=' relative bottom-10 flex gap-5 justify-center items-center left-5 z-20 ' >
                  <a
                    href="https://www.instagram.com/studio_97__/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram color="black" className="cursor-pointer h-9 w-7 hover:bg-red-800 transition" />
                  </a>

                  <a
                    href="https://wa.me/7777988897"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp
                      size={28}
                      className="cursor-pointer text-black h-9 w-7 hover:bg-green-600 transition"
                    />
                  </a>

                  <a
                    href="https://www.facebook.com/captianjayu97/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook color="black" className="cursor-pointer h-9 w-7  hover:bg-blue-800 transition " />
                  </a>

                </div>
              </div>

            </div>

          </div>
        </ section>
  )
}

export default Footer
