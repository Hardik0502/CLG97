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
      
      <section className=" h-[20vh] w-full bg-white " >

      </section>

      <section className=' min-h-[160vh] w-full bg-white ' >
        <div className="toppart h-[140vh] w-full ">
          <div className="img flex justify-center ">
            <img className=' h-[90vh] w-[80%] border-4  ' src="https://photos.smugmug.com/Wedding/i-84dvFBt/0/M6vX6rqZvb5rp3r4m38zvTkpThCLsQCTFjTZdfdFT/L/DSC09142-L.jpg" alt="" />
          </div>

          <div className="subcat h-[80vh] w-full flex justify-center z-20 ">

            <div className="t1 h-[60vh] w-[30%] relative flex flex-col -top-40 border-t-4 border-r-4 bg-white z-20 ">
              <h1 className=' text-[13vh] text-black opacity-85 font-[font2] uppercase relative right-2' > Packages </h1>
              <p className=' text-black/30 relative text-[3vh] -top-8 w-[95%] font-[font2] ' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptates porro eos dolores enim soluta vel voluptatum, id, nisi natus quia dolore ipsa aliquam ipsum sint fugiat architecto maxime perspiciatis!
                Aut ullam minus reprehenderit fugit minus. Natus culpa sit pariatur odio ad quibusdam possimus, et dolor error distinctio nesciunt ea fugiat doloribus blanditiis.
              </p>
            </div>
            <div className="t1 h-[40vh] w-[50%] flex justify-center bg-black z-20 ">
              <h1 className=' text-[22vh] uppercase text-white ' > Studio97 </h1>
            </div>

          </div>

        </div>

      </section>


      <section className='pkgs h-[155vh] bg-white ' >

        <div className="first h-[150vh] flex justify-center ">

          <div className="cards w-[97%] ">
            <div className="card flex justify-center flex-wrap relative gap-10 ">
              {/* First Row : */}
              <div className="one min-h-[70vh] min-w-[60%] rounded-4xl ">
                <img className=' h-[70vh] w-full rounded-4xl' src="https://photos.smugmug.com/Wedding/i-MGkKhtF/0/K6X6BfMWvv7f3ZfrRhQfrPJswck7xj7KFf26qRZGr/L/DSC09175-L.jpg" alt="" />
              </div>



              <div className="one bg-[#f7eae4] min-h-[70vh] min-w-[30%] rounded-4xl ">
                <div className=' text-black font-[font2] h-[20vh] text-[9vh] flex justify-center opacity-85 items-center uppercase rounded-t-3xl ' > Wedding
                </div>

                <div className=' flex justify-center h-[30vh] w-[99%] ' >
                  <div className="types w-[65%] ">
                    <h1 className=' text-black font-[font2] uppercase text-[5vh] flex justify-center underline ' > Packages </h1>
                    <div className="pkgname font-[font3] font-bold flex h-[25vh] text-black flex-col justify-center ">
                      <h1 className=' uppercase text-[3.8vh] ' > Silver Package </h1>
                      <h1 className=' uppercase text-[3.8vh] ' > Gold Package </h1>
                      <h1 className=' uppercase text-[3.8vh] ' > Platinum Package </h1>
                    </div>
                  </div>

                  <div className="view w-[25%] ">
                    <h1 className=' text-black font-[font2] uppercase text-[5vh] flex justify-center underline ' > Price </h1>
                    <div className="pkgname flex h-[25vh] text-black flex-col justify-center ">
                      <h1 className=' uppercase text-[4vh] ' > 1,00,000 </h1>
                      <h1 className=' uppercase text-[4vh] ' > 1,80,000 </h1>
                      <h1 className=' uppercase text-[4vh] ' > 2,30,000 </h1>
                    </div>
                  </div>
                </div>

                <div className="bottom">
                  <div className="button h-[10vh] flex justify-center ">
                    <button className=' border-2 h-[8vh] w-[10vw] text-black relative top-4 cursor-pointer hover:bg-black hover:text-white transition-all ease-in duration-200 rounded-3xl border-black '
                      onClick={() => setOpenModal(true)}
                    > Check Details </button>
                  </div>
                  <div className=' w-full' >
                    <h1 className=' text-black/85 w-full flex justify-center items-center relative top-4 ' > You can ask any of your&nbsp;<Link to='/help' className=' text-green-900 underline ' > Query Here </Link> </h1>
                  </div>
                </div>

              </div>

              <PackageModal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <section className="bg-white min-h-[115vh]  text-black p-16 rounded-3xl space-y-8">

                  <div className='ttl text-black font-[font2] h-[30vh] text-[9vh] flex justify-center opacity-85 items-center underline uppercase rounded-t-3xl ' > Silver Package
                  </div>

                  < Silverpkg />

                </section>

                <section className="bg-white min-h-screen p-16 rounded-3xl space-y-8">
                  <div className='ttl text-black font-[font2] h-[30vh] text-[9vh] flex justify-center opacity-85 items-center underline uppercase rounded-t-3xl ' > Gold Package
                  </div>
                  < Goldpkg />

                </section>

                <section className='bg-white min-h-screen p-16 rounded-3xl space-y-8'>
                  <div className='ttl text-black font-[font2] h-[30vh] text-[9vh] flex justify-center opacity-85 items-center underline uppercase rounded-t-3xl ' > Platinum Package
                  </div>

                  < Platinumpkg />

                </section>


              </PackageModal>

              {/* Pre-wedding  */}
              <div className="one bg-[#E4E6EA] min-h-[70vh] min-w-[30%] rounded-4xl ">
                <div className=' text-black font-[font2] h-[20vh] text-[7vh] flex justify-center opacity-85 items-center uppercase rounded-t-3xl ' > PRE-Wedding
                </div>

                <div className=' flex justify-center h-[30vh] w-[99%] ' >
                  <div className="types w-[65%] ">
                    <h1 className=' text-black font-[font2] uppercase text-[5vh] flex justify-center underline ' > Packages </h1>
                    <div className="pkgname font-[font3] font-bold flex h-[25vh] text-black flex-col justify-center ">
                      <h1 className=' uppercase text-[3.8vh] ' > Classy </h1>
                      <h1 className=' uppercase text-[3.8vh] ' > Premium </h1>
                    </div>
                  </div>

                  <div className="view w-[25%] ">
                    <h1 className=' text-black font-[font2] uppercase text-[5vh] flex justify-center underline ' > Price </h1>
                    <div className="pkgname flex h-[25vh] text-black flex-col justify-center ">
                      <h1 className=' uppercase text-[4vh] ' >₹ 30,000 </h1>
                      <h1 className=' uppercase text-[4vh] ' >₹ 50,000 </h1>
                    </div>
                  </div>
                </div>

                <div className="bottom">
                  <div className="button h-[10vh] flex justify-center ">
                    <a href="tel:7777988897">
                      <button
                        className='border-2 h-[8vh] w-[10vw] text-black relative top-4 cursor-pointer 
               hover:bg-black hover:text-white transition-all ease-in duration-200 
               rounded-3xl border-black'
                      >
                        Contact Us
                      </button>
                    </a>

                  </div>
                  <div className=' w-full' >
                    <h1 className=' text-black/85 w-full flex justify-center items-center relative top-4 ' > You can ask any of your&nbsp;<Link to='/help' className=' text-green-900 underline ' > Query Here </Link> </h1>
                  </div>
                </div>

              </div>
              <div className="one min-h-[70vh] min-w-[60%] rounded-4xl ">
                <img className=' h-[70vh] w-full rounded-4xl' src="https://photos.smugmug.com/Pre-Wedding/i-g6v3KLx/0/LPDjC5W3tM7WwccJVRBbLsTdwRBmD7sJG239jr7g3/L/JAYU-38-L.jpg" alt="" />
              </div>


              
              {/* <div className="one bg-black min-h-[70vh] min-w-[40%] rounded-4xl "></div>
              <div className="one bg-black min-h-[70vh] min-w-[50%] rounded-4xl "></div> */}
            </div>
          </div>


        </div>


      </section>

      <section className=' otherpackages h-[260vh] w-full bg-[#FFFFFF] ' >

        <div className='pkgs h-[140vh] w-full bg-[#FFFFFF] ' >
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
