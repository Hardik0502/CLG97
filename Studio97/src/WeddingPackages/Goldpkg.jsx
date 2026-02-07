import React from 'react'

const Goldpkg = () => {
    return (
        <>
            <section className="w-full md:h-screen h-[65vh] bg-[#F7F2ED] flex items-center justify-center px-20">

                <div className="max-w-full w-full grid grid-cols-[1.05fr_1fr] md:gap-24 gap-2 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative ">

                        {/* Most Popular text */}
                        <p className="
            absolute
            md:-top-5 -top-1
            md:left-15 left-2
            md:text-[45px] text-[3vh]
            text-black/75
            font-[font1]
            z-10
          ">
                            Most Popular
                        </p>

                        {/* Arched image */}
                        <div className="
            md:w-[55%] w-[90%]
            md:h-[80%] 
            relative md:left-30 left-1
            overflow-hidden
            rounded-t-full
            
          ">
                            <img
                                src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-NthfqC2/0/LG4v5DcfSCN76xK29CH35QB8kPXpwq2zwfpsrLTdg/L/01-L.jpg"
                                alt="Wedding"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex flex-col h-full justify-between">

                        {/* Top content */}
                        <div>
                            <h2 className="
              md:text-[35px] text-[3vh]
              font-bold
              tracking-[0.2em]
              text-[#C48A5A]
              mb-12
            ">
                                WEDDING PACKAGE #2
                            </h2>

                            <ul className="
              space-y-8
              relative top-5
              md:text-[20px] text-[1.7vh]
              text-[#5A3A2B]
              leading-relaxed
              uppercase
            ">
                                <li >• 1 Traditional Photographer </li>

                                <li >• 1 Candid Photographer </li>

                                <li>
                                    • 1 cinematographer
                                </li>

                                <li>
                                    • 250 photos album 12 x 36
                                </li>

                                <li>• 2:00 hour full length hd video </li>

                                <li>• ( 2 ) 12 x 18 photo frame </li>

                                <li className=' font-bold' >• Life time access link for all photos </li>
                            </ul>
                        </div>

                        {/* PRICE BUTTON */}
                        <div className="flex justify-end mt-16">
                            <button
                                className="
                border-2
                border-[#C48A5A]
                relative md:top-1 top-10
                md:text-[3.8vh]
                tracking-widest
                text-[#C48A5A]
                hover:bg-[#C48A5A]
                hover:text-white
                transition
              "
                            >
                                ₹ 1,80,000 /-
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Goldpkg
