import React, { useState } from 'react'
import Navbar from '../../Constants/Navbar/Navbar'
import Footer from '../../Constants/Footer'
import { Link } from 'react-router-dom'
import PackageModal from '../../Features/whitepage'
import Platinumpkg from '../../WeddingPackages/Platinumpkg'
import Silverpkg from '../../WeddingPackages/Silverpkg'
import Goldpkg from '../../WeddingPackages/Goldpkg'
import NewbornPricing from '../../Constants/Package/Babyshowerpkg'
import PricingGuide from '../../Constants/Package/Otherpkgs'

const Packages = () => {

  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      < Navbar />
      
      <section className=" md:h-[20vh] h-[10vh] w-full bg-white " >

      </section>

      <section className=' md:min-h-[160vh] h-[70vh] w-full bg-white ' >
        <div className="toppart h-[140vh] w-full ">
          <div className="img flex justify-center ">
            <img className=' md:h-[90vh] h-[50vh] w-[80%] md:border-4 border-none ' src="https://photos.smugmug.com/Wedding/i-84dvFBt/0/M6vX6rqZvb5rp3r4m38zvTkpThCLsQCTFjTZdfdFT/L/DSC09142-L.jpg" alt="" />
          </div>

          <div className="subcat md:h-[80vh] h-[10vh] w-full flex justify-center z-20 ">

            <div className="t1 md:h-[60vh] h-[30vh] w-[30%] relative flex flex-col -top-40 border-t-4 border-r-4 bg-white z-20 ">
              <h1 className=' md:text-[13vh] text-2xl text-black opacity-85 font-[font2] uppercase relative right-2' > Packages </h1>
              <p className=' text-black/30 relative md:text-[3vh] leading-2 md:leading-7 text-[1.3vh] md:-top-5  w-[95%] font-[font2] ' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates porro eos dolores enim soluta vel voluptatum, id, nisi natus quia dolore ipsa aliquam ipsum sint fugiat architecto maxime perspiciatis!
                Aut ullam minus reprehenderit fugit minus. Natus culpa sit pariatur odio ad quibusdam possimus, et dolor error distinctio nesciunt ea fugiat doloribus blanditiis.
              </p>
            </div>
            <div className="t1 md:h-[40vh] h-[8vh] w-[50%] flex justify-center bg-black z-20 ">
              <h1 className=' md:text-[22vh] text-[5vh] uppercase text-white ' > Studio97 </h1>
            </div>

          </div>

        </div>

      </section>


      <section className='pkgs md:h-[155vh] h-[200vh] bg-white ' >

        <div className="first h-[150vh] flex justify-center ">

          <div className="cards w-[97%] ">
            <div className="card flex justify-center flex-wrap relative md:gap-10 gap-4 ">
              {/* First Row : */}
              <div className="one md:h-[70vh] h-[40vh] md:w-[60%] flex justify-center w-full rounded-4xl ">
                <img className=' md:h-[70vh] h-[40vh] w-[90%] rounded-4xl' src="https://photos.smugmug.com/Wedding/i-MGkKhtF/0/K6X6BfMWvv7f3ZfrRhQfrPJswck7xj7KFf26qRZGr/L/DSC09175-L.jpg" alt="" />
              </div>



              <div className="one2 bg-[#f7eae4] md:h-[70vh] h-[50vh]  md:w-[30%] w-[90%] rounded-4xl ">
                <div className=' text-black font-[font2] md:h-[20vh] h-[15vh] md:text-[9vh] text-[7vh] flex justify-center opacity-85 items-center uppercase rounded-t-3xl ' > Wedding
                </div>

                <div className=' flex justify-center md:h-[30vh] h-[20vh] w-[99%] ' >
                  <div className="types w-[65%] ">
                    <h1 className=' text-black font-[font2] uppercase md:text-[5vh] text-[3vh] flex justify-center underline ' > Packages </h1>
                    <div className="pkgname font-[font3] font-bold flex md:h-[25vh] h-[15vh] text-black flex-col justify-center ">
                      <h1 className=' uppercase md:text-[3.8vh] text-[2.5vh] ' > Silver Package </h1>
                      <h1 className=' uppercase md:text-[3.8vh] text-[2.5vh] ' > Gold Package </h1>
                      <h1 className=' uppercase md:text-[3.8vh] text-[2.5vh] ' > Platinum Package </h1>
                    </div>
                  </div>

                  <div className="view w-[25%] ">
                    <h1 className=' text-black font-[font2] uppercase md:text-[5vh] text-[3vh] flex justify-center underline ' > Price </h1>
                    <div className="pkgname flex md:h-[25vh] h-[15vh] md:text-black text-green-950 flex-col justify-center ">
                      <h1 className=' uppercase md:text-[4vh] text-[3vh] ' > 1,00,000 </h1>
                      <h1 className=' uppercase md:text-[4vh] text-[3vh] ' > 1,80,000 </h1>
                      <h1 className=' uppercase md:text-[4vh] text-[3vh] ' > 2,30,000 </h1>
                    </div>
                  </div>
                </div>

                <div className="bottom">
                  <div className="button h-[10vh] flex justify-center ">
                    <button className=' border-2 md:h-[8vh] h-[6vh] md:w-[10vw] w-[40vw] text-black relative top-4 cursor-pointer hover:bg-black hover:text-white transition-all ease-in duration-200 rounded-3xl border-black '
                      onClick={() => setOpenModal(true)}
                    > View Packages </button>
                  </div>
                  <div className=' w-full' >
                    <h1 className=' text-black/85 w-full flex justify-center items-center relative md:top-4 ' > You can ask any of your&nbsp;<Link to='/help' className=' text-green-900 underline ' > Query Here </Link> </h1>
                  </div>
                </div>

              </div>

              <PackageModal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <section className="bg-white min-h-[115vh]  text-black p-16 rounded-3xl space-y-8">

                  <div className='ttl text-black font-[font2] md:h-[30vh] h-[20vh] md:text-[9vh] text-[5vh] flex justify-center opacity-85 md:items-center items-end underline uppercase rounded-t-3xl ' > Silver Package
                  </div>

                  < Silverpkg />

                </section>

                <section className="bg-white md:h-[125vh] h-[80vh]  p-16 rounded-3xl space-y-8">
                  <div className='ttl text-black font-[font2] md:h-[30vh] h-0 md:text-[9vh] text-[5vh] flex justify-center opacity-85 md:items-center items-end underline uppercase rounded-t-3xl ' > Gold Package
                  </div>
                  < Goldpkg />

                </section>

                <section className='bg-white md:h-[180vh] h-[155vh] p-16 rounded-3xl space-y-8'>
                  <div className='ttl text-black font-[font2] md:h-[30vh] h-0 md:text-[9vh] text-[4vh] flex justify-center opacity-85 md:items-center items-end underline uppercase rounded-t-3xl ' > Platinum Package
                  </div>

                  < Platinumpkg />

                </section>


              </PackageModal>

              {/* Pre-wedding  */}
              <div className="one bg-[#E4E6EA] md:h-[70vh] h-[50vh]  md:w-[30%] w-[90%] rounded-4xl ">
                <div className=' text-black font-[font2] md:h-[20vh] h-[15vh] md:text-[8vh] text-[5vh] flex justify-center opacity-85 items-center uppercase rounded-t-3xl ' >Pre-Wedding
                </div>

                <div className=' flex justify-center md:h-[30vh] h-[20vh] w-[99%] ' >
                  <div className="types w-[65%] ">
                    <h1 className=' text-black font-[font2] uppercase md:text-[5vh] text-[3.5vh] flex justify-center underline ' > Packages </h1>
                    <div className="pkgname font-[font3] font-bold flex md:h-[25vh] h-[15vh] text-black flex-col justify-center ">
                      <h1 className=' uppercase md:text-[3.8vh] text-[3.4vh] ' > Classy </h1>
                      <h1 className=' uppercase md:text-[3.8vh] text-[3.4vh] ' > Premium </h1>
                    </div>
                  </div>

                  <div className="view w-[25%] ">
                    <h1 className=' text-black font-[font2] uppercase md:text-[5vh] text-[3.5vh] flex justify-center underline ' > Price </h1>
                    <div className="pkgname flex md:h-[25vh] h-[15vh] text-black flex-col justify-center ">
                      <h1 className=' uppercase md:text-[4vh] text-[2.7vh] ' >₹ 30,000 </h1>
                      <h1 className=' uppercase md:text-[4vh] text-[2.7vh] ' >₹ 50,000 </h1>
                    </div>
                  </div>
                </div>

                <div className="bottom">
                  <div className="button h-[10vh] flex justify-center ">
                    <a href="tel:7777988897">
                      <button
                        className='border-2 md:h-[8vh] h-[6vh] md:w-[10vw] w-[40vw] text-black relative top-4 cursor-pointer 
               hover:bg-black hover:text-white transition-all ease-in duration-200 
               rounded-3xl border-black'
                      >
                        Contact Us
                      </button>
                    </a>

                  </div>
                  <div className=' w-full' >
                    <h1 className=' text-black/85 w-full flex justify-center items-center relative md:top-4 ' > You can ask any of your&nbsp;<Link to='/help' className=' text-green-900 underline ' > Query Here </Link> </h1>
                  </div>
                </div>

              </div>
              <div className="one md:h-[70vh] h-[40vh] md:w-[60%] flex justify-center rounded-4xl ">
                <img className='  md:h-[70vh] h-[40vh] w-[90%] rounded-4xl' src="https://photos.smugmug.com/Pre-Wedding/i-g6v3KLx/0/LPDjC5W3tM7WwccJVRBbLsTdwRBmD7sJG239jr7g3/L/JAYU-38-L.jpg" alt="" />
              </div>


              
              {/* <div className="one bg-black min-h-[70vh] min-w-[40%] rounded-4xl "></div>
              <div className="one bg-black min-h-[70vh] min-w-[50%] rounded-4xl "></div> */}
            </div>
          </div>


        </div>


      </section>

      <section className=' otherpackages md:h-[260vh] h-[400vh] w-full bg-[#FFFFFF] ' >

        <div className='pkgs md:h-[140vh] h-[140vh] w-full bg-[#FFFFFF] ' >
              <div className="babyshower">
                  < NewbornPricing />              
              </div>
        </div>

        <div className=' personalpkg h-[150vh] w-full ' >
                < PricingGuide />
        </div>


      </section>


      {/* < Footer /> */}
              <div className="footer w-full bg-white ">
          < Footer />
              </div>
    </>
  )
}

export default Packages
