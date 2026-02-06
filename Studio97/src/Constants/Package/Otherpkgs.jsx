export default function PricingGuide() {
    return (
        <section className="w-full md:h-screen bg-white flex justify-center items-center py-10">

            {/* WRAPPER */}
            <div className="md:w-[90%] w-[97%] grid md:grid-cols-2 gap-6">

                {/* LEFT CARD */}
                <div className="relative md:h-screen h-[120vh] overflow-hidden bg-black rounded-sm">

                    <img
                        src="https://images.unsplash.com/photo-1589434488848-abfcbd1f0388?q=80&w=395&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                    />

                    <div className="absolute inset-0 bg-black/30" />

                    <div className="relative z-10 h-full flex flex-col justify-between px-10 py-12 text-white">

                        <p className="md:text-xs relative top-2 left-3 tracking-widest uppercase">
                            STUDIO 97 PHOTOGRAPHY
                        </p>

                        <div>
                            <h1 className="md:text-[12vh] text-[10vh] relative left-3 leading-tight font-serif">
                                PRICING
                            </h1>
                            <p className="text-[6vh] italic relative left-3 font-serif">
                                guide
                            </p>
                        </div>

                        <div />
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="h-full bg-[#1c1c1c] text-white flex flex-col">

                    <div className=" md:h-[80%] h-[110vh] " >
                        {/* TOP IMAGE */}
                        <div className="relative h-[62%]">
                            <img
                                src="https://images.unsplash.com/photo-1706604845379-b5b4b1d4ea5d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="absolute inset-0 opacity-80 w-full h-full object-cover"
                            />

                            <div className="absolute h-full inset-0 bg-black/40" />

                            <div className="relative z-10 md:left-5 md:top-0 top-20 h-full flex flex-col items-start justify-center">
                                <h2 className="text-[36px] relative md:left-0 left-4 font-serif tracking-wide">
                                    PACKAGES
                                </h2>
                                <p className="italic uppercase relative md:left-0 left-4 text-sm mt-1">
                                    Personal Photoshoot
                                </p>
                                <p className="italic uppercase relative md:left-0 left-4 text-sm mt-1">
                                    Boys | Girls
                                </p>
                            </div>
                        </div>


                        {/* PACKAGES */}
                        <div className=" h-[40%] grid grid-cols-3 border-t border-[#3a3a3a]">

                            {/* GOLD */}
                            <div className="px-4 h-full py-6 flex flex-col justify-between text-center border-r border-[#3a3a3a]">
                                <div className="info">

                                    <h3 className="md:text-[3vh] tracking-widest text-white/90 font-[font2] relative top-1 mb-4">Birthday Shoot</h3>
                                    <ul className="md:text-[2.2vh] text-[2vh] flex flex-col items-start relative top-2 md:left-2 left-1  space-y-2 opacity-90">
                                        <li>Edited Photos</li>
                                        <li>Captured Pics are Not Provided</li>
                                        <li>With Setup</li>
                                        <li>Indoor / Outdoor</li>
                                    </ul>
                                </div>
                                <div className="price relative bottom-2 ">

                                    <button
                                        className="
                                    border-2
                                    border-white
                                    relative md:bottom-1 bottom-4
                                    md:text-[3.8vh] text-[3vh]
                                    tracking-widest
                                    text-white
                                    hover:bg-white
                                    hover:text-black
                                    transition
                                "
                                    >
                                        &nbsp;₹ 350 /-
                                    </button>

                                </div>
                            </div>

                            {/* SILVER */}
                            <div className="px-4 py-6 flex flex-col justify-between text-center border-r border-[#3a3a3a]">
                                <div className="info">

                                    <h3 className="text-[3vh] tracking-widest text-white/90 font-[font2] relative top-1 mb-4">Baby Shoot</h3>
                                    <ul className="md:text-[2.2vh] text-[2vh] flex flex-col items-start relative top-2 md:left-2 left-1 space-y-2 opacity-90">
                                        <li>Edited Photos</li>
                                        <li>Captured Pics are not Provided</li>
                                        <li>With Setup</li>
                                        <li>Indoor / Outdoor</li>
                                    </ul>
                                </div>
                                <div className="price relative bottom-2 ">

                                    <button
                                        className="
                                    border-2
                                    border-white
                                    relative md:bottom-1 bottom-4
                                    md:text-[3.8vh] text-[3vh]
                                    tracking-widest
                                    text-white
                                    hover:bg-white
                                    hover:text-black
                                    transition
                                "
                                    >
                                        &nbsp;₹ 500 /-
                                    </button>

                                </div>
                            </div>

                            {/* BRONZE */}
                            <div className="px-4 py-6 flex flex-col justify-between text-center border-r border-[#3a3a3a]">
                                <div className="info">

                                    <h3 className="md:text-[3vh] tracking-widest text-white/90 font-[font2] relative top-1 mb-4">Personal Shoot</h3>
                                    <ul className="md:text-[2.2vh] text-[2vh] flex flex-col items-start relative top-2 md:left-2 left-1 space-y-2 opacity-90">
                                        <li>Edited Photos</li>
                                        <li>Captured Pics are Not Provided</li>
                                        <li>Without Setup </li>
                                        <li>Indoor / Outdoor </li>
                                    </ul>
                                </div>
                                <div className="price relative bottom-2 ">

                                    <button
                                        className="
                                    border-2
                                    border-white
                                    relative md:bottom-1 bottom-4
                                    md:text-[3.8vh] text-[3vh]
                                    tracking-widest
                                    text-white
                                    hover:bg-white
                                    hover:text-black
                                    transition
                                "
                                    >
                                        &nbsp;₹ 150 /-
                                    </button>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className=" h-[20%] border- border-black w-full bg-white text-black" >
                        {/* <h1 className=" text-2xl relative left-2 font-[font6] " > Instructions : </h1> */}
                        <div className="text-center text-[2.5vh] relative top-5  ">
                            <p className=" mb-3">
                                Any Pic with Setup (Theme) - &nbsp;₹ 350&nbsp; |&nbsp; Without Setup (Theme) - &nbsp;₹ 150
                            </p>
                            <p className="italic mb-3">
                                Captured Photos are not provided.
                            </p>
                            <p className="italic mb-3">
                                You have to pay full payment first.&nbsp;Contact Us for more info.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
