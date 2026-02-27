import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../Backend/Firebase";



const OrderRequest = () => {

  const location = useLocation();
  const { packageName, price } = location.state || {};

  const calendarRef = useRef(null);

  const [showCalendar, setShowCalendar] = useState(false);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isValid =
    form.fullname &&
    form.email &&
    form.address &&
    form.phone &&
    range[0].startDate &&
    range[0].endDate;


  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSubmit = async () => {

  if (!packageName || !price) {
    alert("Package information missing. Please select a package again.");
    return;
  }

  try {
    await addDoc(collection(db, "orderRequests"), {
      fullname: form.fullname,
      email: form.email,
      address : form.address,
      phone: form.phone,
      message: form.message,
      packageName: packageName,
      price: price,
      startDate: range[0].startDate,
      endDate: range[0].endDate,
      status: "pending",
      payment: "pending",
      createdAt: new Date(),
    });

    alert("Request Sent Successfully");

  } catch (error) {
    console.error(error);
  }
};

// const start = order.startDate?.toDate?.();
// const end = order.endDate?.toDate?.();


  return (
    <div className="h-screen w-screen bg-[#5a1d1d] flex items-center justify-center overflow-hidden">

      <div className="relative w-[85vw] h-[95vh] max-w-[1200px] bg-white rounded-3xl flex shadow-[0_50px_120px_rgba(0,0,0,0.25)] overflow-visible">

        {/* LEFT SIDE */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center">

          <div className="w-[80%] h-[98%] flex flex-col justify-evenly">

            {/* PACKAGE BADGE */}
            <div className=" flex justify-end ">

              <div className=" border border-black/25 h-10 w-65 flex justify-center items-center rounded-full text-base font-semibold shadow-md bg-white text-gray-800 tracking-wide">
                {packageName} ~ ₹ {price?.toLocaleString("en-IN")} /-
              </div>
            </div>

            <h2 className="text-xl font-semibold tracking-widest text-gray-800">
              ORDER REQUEST FORM
            </h2>

            {/* INPUTS */}
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              onChange={handleForm}
              className="h-11 rounded-full border border-gray-300 bg-white text-gray-800 px-5 outline-none focus:border-black transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleForm}
              className="h-11 rounded-full border border-gray-300 bg-white text-gray-800 px-5 outline-none focus:border-black transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleForm}
              className="h-11 rounded-full border border-gray-300 bg-white text-gray-800 px-5 outline-none focus:border-black transition"
            />

            <input
              type="tel"
              name="address"
              placeholder="Address"
              onChange={handleForm}
              className="h-11 rounded-full border border-gray-300 bg-white text-gray-800 px-5 outline-none focus:border-black transition"
            />

            {/* DATE RANGE */}
            <div className="relative" ref={calendarRef}>

              <div
                onClick={() => setShowCalendar(!showCalendar)}
                className="h-11 rounded-full border border-gray-300 bg-white px-5 flex items-center justify-between cursor-pointer hover:border-black transition"
              >
                <span className="text-gray-700 relative left-2 text-sm">
                  {format(range[0].startDate, "dd/MM/yyyy")} -{" "}
                  {format(range[0].endDate, "dd/MM/yyyy")}
                </span>

                <CalendarDays size={22} className="text-gray-600 relative right-5" />
              </div>

              {showCalendar && (
                <div className="absolute -top-40 left-0 z-50 shadow-2xl bg-white rounded-xl">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    rangeColors={["#16a34a"]}
                    minDate={today}
                  />
                </div>
              )}
            </div>

            {/* QUERY BOX */}
            <textarea
              name="message"
              placeholder="Write your query (optional)"
              onChange={handleForm}
              className="h-16 border border-gray-300 rounded-lg bg-white text-gray-800 px-5 pt-3 outline-none resize-none focus:border-black transition"
            />

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className={`h-11 w-44 self-end rounded-full font-semibold tracking-wide transition-all duration-300 shadow-md ${isValid
                  ? "bg-red-500 text-white hover:bg-red-600 hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              SEND REQUEST
            </button>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-1/2 h-full">
          <img
            src="https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HQmsKvw/0/KnwrQB6pnGgTMK5Lv87Q7g5hLbSS4m8Z67XGcgBLZ/L/DSC09298-L.jpg"
            alt="wedding"
            className="w-full h-full object-cover rounded-r-3xl"
          />
        </div>

      </div>

      {/* MOBILE */}
      <style>{`
        @media (max-width: 768px) {
          .flex {
            flex-direction: column;
          }
          .w-1\\/2 {
            width: 100% !important;
            height: 50% !important;
          }
        }
        
        input, textarea {
          text-indent : 10px;    
        }

      `}</style>

      {/* text-indent is used to give spacing where we want to start writting (giving space to the placeholder. ) */}
    </div>
  );
};

export default OrderRequest;