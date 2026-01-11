export default function NewbornPricing() {
  return (
    <section className="min-h-screen w-full bg-white flex justify-center">
      
      {/* PAGE */}
      <div className="w-[95%] bg-white text-[#2b2b2b]">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-[3vh] tracking-widest mb-2">
            STUDIO 97
          </p>

          <h1 className="text-[12vh] leading-none font-[font1] ">
            Baby Shower
          </h1>

          <p className="text-[3vh] tracking-wide underline relative top-4">
            PRICING GUIDE
          </p>
        </div>

        {/* PACKAGES */}
        <div className="grid grid-cols-2 gap-6 text-center text-sm mb-10">

          {/* PACKAGE 01 */}
          <div>
            <p className="font-semibold underline font-[font2] text-[3vh] mb-2">Packages 01 : &nbsp; ₹ 10,000/-</p>
            <ul className="space-y-1">
              <li>1 Traditional Photographer</li>
              <li>1 Traditional Videographer</li>
              <li>20 Minutes Video</li>
              <li>20 Edited Image </li>
               <div className="flex justify-end mt-16">
                            <button
                                className="
                border-2
                border-[#C48A5A]
                relative top-1
                text-[3.8vh]
                tracking-widest
                text-[#C48A5A]
                hover:bg-[#C48A5A]
                hover:text-white
                transition
              "
                            >
                                ₹ 10,000 /-
                            </button>
                        </div>
            </ul>
          </div>

          {/* PACKAGE 02 */}
          <div>
            <p className="font-semibold underline font-[font2] text-[3vh] mb-2">Packages 02 : &nbsp; ₹ 18,000/-</p>
            <ul className="space-y-1">
              <li>2 Traditional Photographer</li>
              <li>1 Traditional Videographer</li>
              <li>30 Minutes Video</li>
              <li>40 Edited Image </li> 
              <div className="flex justify-start mt-16">
                            <button
                                className="
                border-2
                border-[#C48A5A]
                relative top-1
                text-[3.8vh]
                tracking-widest
                text-[#C48A5A]
                hover:bg-[#C48A5A]
                hover:text-white
                transition
              "
                            >
                                ₹ 18,000 /-
                            </button>
                        </div><br />
            </ul>
          </div>

        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-3 gap-4 mb-10">

          {/* TOP ROW */}
          <img
            src="https://images.unsplash.com/photo-1528218635780-5952720c9729?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[180px] object-cover"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1546015720-b8b30df5aa27"
            className="w-full h-[180px] object-cover"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1569952547534-6c914b9da282?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk3fHx8ZW58MHx8fHx8"
            className="w-full h-[180px] object-cover"
            alt=""
          />

          {/* BOTTOM ROW */}
          <img
            src="https://images.unsplash.com/photo-1594150878496-a921e5af8907?q=80&w=609&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[180px] object-cover"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1458731909820-5850bdcaee0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGJhYnklMjBzaG93ZXJ8ZW58MHx8MHx8fDA%3D"
            className="w-full h-[180px] object-cover"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1741823000538-a5a1071b0f87?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJhYnklMjBzaG93ZXJ8ZW58MHx8MHx8fDA%3D"
            className="w-full h-[180px] object-cover"
            alt=""
          />
        </div>

        {/* FOOTER */}
        <div className="text-center text-xs relative top-4 ">
          <p className="italic mb-3">
            Book your Photography with us &amp; make your memory more beautiful.
          </p>

          <p>
            Phone : 7777988897 | Email : jp7777988897@gmail.com | www.studio97.com
          </p>
        </div>

      </div>
    </section>
  );
}
