import React from 'react'

const Platinumpkg = ({ data }) => {

  if (!data) return null;

  const leftFeatures = data.features?.slice(0, 5);
  const rightFeatures = data.features?.slice(5);

  return (
    <>
      <section className="h-full w-full bg-[#e9e6df] flex justify-center items-center p-8">

        {/* PAGE CONTAINER (matches your screenshot scale) */}
        <div className="w-full bg-[#e9e6df] text-[#1a1a1a] font-serif">

          {/* HEADER */}
          <div className="text-center pt-10">
            <p className="md:text-[4vh] font-[font5] font-bold tracking-widest relative top-2 ">STUDIO 97 </p>

            <h1 className="md:text-[56px] text-[3vh] leading-[1.1] relative top-2 tracking-wide">
              WEDDING<br />
              PACKAGE #3
            </h1>

            <p className="relative top-2 md:text-[22px]">Price List</p>

            {/* ORNAMENT DIVIDER */}
            <div className="flex items-center justify-center mt-6">
              <div className="md:w-16 w-10 h-px bg-black" />
              <span className="mx-4 text-xl">❦</span>
              <div className="md:w-16 w-10 h-px bg-black" />
            </div>
          </div>

          {/* PRICE TABLE */}
          <div className="mt-12 border-t border-b border-black grid grid-cols-2 text-center">

            {/* STANDARD */}
            <div className="px-8 py-10 border-r border-black">
              <h3 className="md:text-2xl text-[2.5vh] underline mb-2">Photographer & Videographer </h3>
              <br />

              <ul className="space-y-2 md:text-[2.7vh] text-[2vh] font-[font6]">
                {/* <li>1 TRADITIONAL PHOTOGRAPPHER</li>
                            <li>1 CANDID PHOTOGRAPHER</li>
                            <li>1 CINEMATOGRAPHER</li>
                            <li>1 CANDID CINEMATOGRAPHER</li>
                            <li>1 DAY DRONE</li> */}

                {leftFeatures?.map((items, index) => {
                  return <div key={index} className=' uppercase' >
                    <li >• {items.value} {items.label} </li>
                  </div>
                })}

              </ul>
            </div>

            {/* PREMIUM */}
            <div className="px-8 md:h-[40vh] h-[50vh] py-10 border-r border-black">
              <h3 className="md:text-2xl text-[2.5vh] underline mb-2">ACCESORIES</h3>
              <br />

              <ul className="space-y-2 md:leading-6 relative md:top-0 top-6 leading-5 md:text-[2.7vh] text-[2vh] font-[font6] ">
                {/* <li> 300 PHOTOS ALBUM ( 12 X 36 )</li>
                            <li>2:00 HOUR FULL LENGTH HD VIDEO</li>
                            <li> ( 3 ) 12 X 18 PHOTO FRAME</li>
                            <li>60 SECONDS SHORT REEL</li>
                            <li>FULL WEDDING HIGHLIGHT</li> */}

                {rightFeatures?.map((items, index) => {
                  return <div key={index} className=' uppercase' >
                    <li > {items.value} {items.label} </li>
                  </div>
                })}
                <li className=' font-bold'>LIFE TIME PHOTO ACCESS LINK</li>
              </ul>
            </div>

          </div><br />

          {/* IMAGE STRIP */}
          <div className="mt-14">
            <img
              src="https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Wedding couple"
              className="w-full md:h-80 object-cover"
            />
          </div>

          {/* SPECIAL OFFER */}
          <div className="text-center h-[40vh] py-12  "> <br />
            <h3 className=" md:text-[6vh] text-[4vh] underline ">SPECIAL OFFER</h3><br />

            <p className=" md:text-[3vh] text-[2.5vh] w-full items-center leading-relaxed">
              In any Package Get&nbsp;<span className=' text-[3vh] text-black font-bold ' > 10,000 /- </span>&nbsp;off on Full Payment before Wedding. <br /> Book Your Shoot Now.
            </p><br />

            <p className="md:text-xs  text-[1.5vh] mt-6">Please contact us for more details.</p>
            <p className="font-[font6] font-bold md:text-2xl text-[4vh] ">7777988897</p>
          </div>

          <div className=' w-full h-full flex justify-end ' >

            <button onClick={() => navigate("/orderRequest", {
              state: {
                packageName: "Platinum",
                price: 25000
              }
            })
          }
              className="border-2
                border-[#C48A5A]
                md:text-[3.8vh]
                text-[3vh]
                font-[font6]
                relative md:bottom-4
                tracking-widest
                text-[#C48A5A]
                hover:bg-[#C48A5A]
                hover:text-white
                hover:cursor-pointer
                transition duration-500 ">
              ₹ {data.price?.toLocaleString("en-IN")} /-
            </button>
          </div>

        </div>
      </section>
    </>
  )
}

export default Platinumpkg
