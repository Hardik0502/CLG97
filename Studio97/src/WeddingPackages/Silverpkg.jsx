import React from 'react'

const Silverpkg = () => {
    return (
        <>
            <section className=" inset-0 z-50 bg-black/60">

                    <div className="relative mx-auto mt-[6vh] h-screen w-full overflow-hidden  bg-gray-200  flex  ">

                      {/* LEFT CONTENT */}
                      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
                        <h1 className="fade uppercase font-[Playfair Display] font-bold text-[10.5vh] leading-[0.9] opacity-75 text-[#1a1a1a]">
                          Wedding <br />
                          Package <br />
                          #1
                        </h1>
                        {/* <br /> */}
                        <p className="fade relative left-6 top-2 italic text-[#020202]">
                          Studio97 — timeless wedding stories, artfully captured.
                        </p>
                        <br />

                        {/* PACKAGE */}
                        <div className="fade mt-10">

                          <ul className="space-y-2 font-[Inter] text-[3.5vh] text-[#6b6b6b]">
                            <li>• 1 Traditional Photographer</li>
                            <li>• 1 Cinematographer</li>
                            <li>• 250 Photos album 12 x 36</li>
                            <li>• 2:00 Hour Full Length HD Video </li>
                            <li>• ( 2 ) 12 x 18 Photo Frame </li>
                            <li className=' font-bold'>• Life time access link for all photos  </li>
                          </ul>

                          <button className="border-2
                border-[#C48A5A]
                text-[3.8vh]
                relative top-4
                tracking-widest
                text-[#C48A5A]
                hover:bg-[#C48A5A]
                hover:text-white
                hover:cursor-pointer
                transition duration-500 ">
                            ₹ 1,00,000 /-
                          </button>
                        </div>
                      </div>

                      {/* RIGHT IMAGE – CORRECT DIAGONAL CUT */}
                      <div className="w-full h-full relative flex justify-center top-5">
                        <img
                          src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-CRsfJsJ/0/LX2cRttxLc8PxvbFzHKPQwH2BmNcm6vDdbsRjn7wg/L/_A749597-L.jpg"
                          alt="Wedding"
                          className="h-[75%] w-[55%] relative top-20 object-cover"
                        // style={{
                        //   clipPath: "polygon(1% 0%, 100% 0%, 100% 100%, 0% 100%)",
                        // }}
                        />
                      </div>
                    </div>
                  </section>
        </>
    )
}

export default Silverpkg
