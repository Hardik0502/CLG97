import React from 'react'
import { useNavigate } from 'react-router-dom';


const Silverpkg = ({ data }) => {

  const navigate = useNavigate();

  if (!data) return null;

  return (
    <>
      <section className=" inset-0 z-50 bg-black/60">

        <div className="relative mx-auto md:h-screen h-[80vh] w-full overflow-hidden md:gap-0 gap-2 bg-gray-200  flex  ">

          {/* LEFT CONTENT */}
          <div className="md:w-1/2 w-full md:h-screen h-[50vh] flex flex-col items-center justify-center">
            <h1 className="fade uppercase font-[Playfair Display] font-bold md:text-[10.5vh] text-[5vh] md:leading-[0.9] relative md:top-0 top-20 md:left-0 left-1.5 opacity-75 text-[#1a1a1a]">
              Wedding <br />
              Package <br />
              #1
            </h1>
            {/* <br /> */}
            <p className="fade relative left-6 md:top-2 top-20 italic text-[#020202]">
              Studio97 — timeless wedding stories, artfully captured.
            </p>
            <br />

            {/* PACKAGE */}
            <div className="fade relative md:top-0 top-20 md:left-0 left-1  ">

              <ul className="space-y-2 font-[Inter] md:text-[3.5vh] text-[2vh]  text-[#6b6b6b]">
                {/* <li>• 1 Traditional Photographer</li>
                            <li>• 1 Cinematographer</li>
                            <li>• 250 Photos album 12 x 36</li>
                            <li>• 2:00 Hour Full Length HD Video </li>
                            <li>• ( 2 ) 12 x 18 Photo Frame </li> */}
                {data.features?.map((items, index) => {
                  return <div key={index} className=' uppercase' >
                    <li>• {items.value} {items.label}  </li>
                  </div>
                })}
                <li className=' font-bold'>• Life time access link for all photos  </li>
              </ul>

              <button className="border-2
                border-[#C48A5A]
                md:text-[3.8vh]
                text-[2vh]
                relative md:top-4 top-10
                tracking-widest
                text-[#C48A5A]
                hover:bg-[#C48A5A]
                hover:text-white
                hover:cursor-pointer
                transition duration-500 "

                onClick={() => navigate("/order", {
                  state: {
                    packageName: "Silver",
                    price: 25000
                  }
                }) }


              >
                ₹ {data.price?.toLocaleString("en-IN")} /-
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE – CORRECT DIAGONAL CUT */}
          <div className="w-full h-full relative flex justify-center top-5">
            <img
              src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-CRsfJsJ/0/LX2cRttxLc8PxvbFzHKPQwH2BmNcm6vDdbsRjn7wg/L/_A749597-L.jpg"
              alt="Wedding"
              className="md:h-[75%] h-[45%] md:w-[55%] w-[90%] relative md:top-20 top-45 object-cover"
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
