import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDoc, collection, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Backend/Firebase";
import emailjs from "@emailjs/browser";


const OrderRequest = () => {

  const location = useLocation();
  const { packageId } = location.state || {};

  const [packageData, setPackageData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackage = async () => {
      if (!packageId) return;

      const docRef = doc(db, "Packages", packageId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPackageData(docSnap.data());  // 👈 now this works
      }
    };

    fetchPackage();
  }, [packageId]);

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

    console.log("Submit clicked");

    if (!packageData) {
      alert("Package information missing. Please select a package again.");
      return;
    }

    try {
      await addDoc(collection(db, "orderRequests"), {
        fullname: form.fullname,
        email: form.email,
        address: form.address,
        phone: form.phone,
        message: form.message,
        packageName: packageData.name,
        price: packageData.price,
        startDate: range[0].startDate,
        endDate: range[0].endDate,
        status: "pending",
        payment: "pending",
        createdAt: new Date(),
      });

      setShowSuccess(true);

      // 2️⃣ Send Email
      await emailjs.send(
        "service_0utvlut",
        "template_np80z5e",
        {
          name: form.fullname,
          date: new Date(range[0].startDate).toLocaleDateString(),
          package: packageData.name,
          email: form.email
        },
        "9IqqgmAjIu0MgxsCE"
      )
        .then((res) => {
          console.log("Email sent successfully", res);
        })


    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!packageId) {
      navigate("/package", { replace: true });
    }
  }, [packageId, navigate]);

  useEffect(() => {
    if (showSuccess) {
      const handlePopState = () => {
        navigate("/package", { replace: true });
      };

      window.addEventListener("popstate", handlePopState);

      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [showSuccess, navigate]);


  return (
    <div className="h-screen w-screen bg-[#5a1d1d] flex items-center justify-center overflow-hidden">

      <div className="relative w-[85vw] h-[95vh] max-w-[1200px] bg-white rounded-3xl flex shadow-[0_50px_120px_rgba(0,0,0,0.25)] overflow-visible">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 h-[70%] md:h-full flex flex-col justify-center items-center">

          <div className="md:w-[80%] w-[85%] md:h-[98%] h-full flex flex-col justify-evenly">

            {/* PACKAGE BADGE */}
            <div className=" flex justify-end ">

              <div className=" border border-black/25 md:h-10 md:w-65 w-full flex justify-center items-center rounded-full text-base font-semibold shadow-md bg-white text-gray-800 tracking-wide">
                {packageData?.name} ~ ₹ {packageData?.price?.toLocaleString("en-IN")} /-
              </div>
            </div>

            <h2 className="md:text-xl font-semibold tracking-widest text-gray-800">
              ORDER REQUEST FORM
            </h2>

            {/* INPUTS */}
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              onChange={handleForm}
              className="md:h-11 h-10 placeholder:text-[15px] rounded-full border border-gray-300 bg-white text-gray-800 px-5 outline-none focus:border-black transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleForm}
              className="md:h-11 h-10 placeholder:text-[15px] rounded-full border border-gray-300 bg-white text-gray-800 px-5 outline-none focus:border-black transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (Whatsapp) "
              onChange={handleForm}
              className="md:h-11 h-10 placeholder:text-[15px] rounded-full border border-gray-300 bg-white text-gray-800 px-5 outline-none focus:border-black transition"
            />

            <input
              type="tel"
              name="address"
              placeholder="Address"
              onChange={handleForm}
              className="md:h-11 h-10 placeholder:text-[15px] rounded-full border border-gray-300 bg-white text-gray-800 px-5 outline-none focus:border-black transition"
            />

            {/* DATE RANGE */}
            <div className="relative  " ref={calendarRef}>

              <div
                onClick={() => setShowCalendar(!showCalendar)}
                className="md:h-11  rounded-full border border-gray-300 bg-white px-5 flex md:items-center items-end justify-between cursor-pointer hover:border-black transition"
              >
                <span className="text-gray-700 w-full relative md:left-2 md:text-sm md:top-0 top-2 left-2 text-[1.5vh] ">
                  {format(range[0].startDate, "dd MMMM")} -{" "}
                  {format(range[0].endDate, "dd MMMM")}
                </span>

                <CalendarDays size={22} className="text-gray-600 relative right-5 md:bottom-0 bottom-2 " />
                
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
              className="md:h-16 h-16 border placeholder:text-[12px] border-gray-300 rounded-lg bg-white text-gray-800 px-5 pt-3 outline-none resize-none focus:border-black transition"
            />

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className={`md:h-11 w-44  md:text-[3.4vh] text-[2vh] self-end rounded-full font-semibold tracking-wide transition-all duration-300 shadow-md ${isValid
                ? "bg-red-500 text-white hover:bg-red-600 hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              SEND REQUEST
            </button>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2 h-[30%] md:h-full">
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

        @keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.35s ease forwards;
}

      `}</style>

      {/* text-indent is used to give spacing where we want to start writting (giving space to the placeholder. ) */}


      {showSuccess && (
        <div className="fixed inset-0 z-9999 bg-black/85 backdrop-blur-md flex items-center justify-center">

          <div className="relative md:w-[70vw] w-[85vw] h-[90vh] bg-linear-to-b from-[#111] to-[#0a0a0a] rounded-[40px] shadow-[0_0_120px_rgba(212,175,55,0.15)] overflow-hidden">

            {/* OUTER GOLD FRAME */}
            <div className="absolute inset-0.5 rounded-[38px] border border-yellow-600/40"></div>

            {/* TOP DECORATIVE LINE */}
            <div className="absolute md:top-[8%] top-[4%] left-1/2 -translate-x-1/2 w-[140px] h-px bg-linear-to-r from-transparent via-yellow-600 to-transparent"></div>

            {/* BRAND */}
            <p className="absolute md:top-[12%] top-[8%] left-1/2 -translate-x-1/2 text-[12px] tracking-[8px] text-yellow-600 uppercase">
              Studio 97
            </p>

            {/* MAIN TITLE */}
            <h1 className="absolute md:top-[20%] top-[15%] left-1/2 -translate-x-1/2 text-center text-[30px] md:text-[42px] text-yellow-500 font-light leading-tight tracking-wide"
              style={{ fontFamily: "serif" }}>
              Thank You,
              <br />
              <span className="font-medium text-white ">{form.fullname}</span>
            </h1>

            {/* PACKAGE NAME BADGE */}
            <div className="absolute md:top-[45%] top-[34%] left-1/2 -translate-x-1/2 w-[200px] h-[42px] rounded-full border border-yellow-600/50 flex items-center justify-center text-yellow-500 tracking-[4px] text-[13px] uppercase bg-transparent">
              {packageData?.name}
            </div>

            {/* MESSAGE */}
            <p className="absolute md:top-[55%] top-[45%] left-1/2 -translate-x-1/2 w-[82%] text-center text-gray-400 text-[14px] md:text-[16px] leading-loose"
              style={{ fontFamily: "serif" }}>
              Your package request has been successfully received.
              <br />
              Our team will contact you via <span className="text-yellow-500">Email</span> or <span className="text-yellow-500">WhatsApp </span>
              regarding your order status (Accepted / Rejected / Pending).
              <br />
              We sincerely appreciate your patience and look forward to capturing your beautiful wedding moments.
            </p>

            {/* PREMIUM BUTTON */}
            <button
              onClick={() => navigate("/package", { replace: true })}
              className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-60 h-[52px] rounded-full border border-yellow-600 text-yellow-500 tracking-[5px] text-[13px] uppercase bg-transparent transition-all duration-500"
              style={{
                background: "linear-gradient(90deg, transparent 50%, rgba(212,175,55,0.15) 50%)",
                backgroundSize: "200% 100%",
                backgroundPosition: "right bottom"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundPosition = "left bottom"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundPosition = "right bottom"}
            >
              Continue
            </button>

            {/* BOTTOM DECOR LINE */}
            <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-[100px] h-px bg-linear-to-r from-transparent via-yellow-600 to-transparent"></div>

          </div>
        </div>
      )}


    </div>
  );
};

export default OrderRequest;