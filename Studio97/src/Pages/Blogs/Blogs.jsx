import React, { useEffect, useRef } from "react";
import Navbar from "../../Constants/Navbar/Navbar";
import gsap from "gsap";
import Masonry from "../../Features/Gallery";
import Footer from "../../Constants/Footer";


const Blogs = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-text", {
        opacity: 0,
        y: 32,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      });

      gsap.from(imagesRef.current, {
        opacity: 0,
        y: 48,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.18,
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      id: "1",
      img: "https://photos.smugmug.com/Pre-Wedding/i-P6vxR45/0/KqzM6t72SFHvKprQJXtNmBFkG9cMJZ9bVVLQhhQ2j/L/JAYU-111-L.jpg",
      height: 400,
    },
    {
      id: "2",
      img: "https://photos.smugmug.com/Pre-Wedding/i-mRx9PTG/0/Lrq9TrTLM9DxbnK446j7wvVXKFHn5pCJVhPfzKvCK/L/_DSC1354-L.jpg",
      height: 250,
    },
    {
      id: "3",
      img: "https://photos.smugmug.com/Pre-Wedding/i-kkcHWzD/0/LF7HMgnfrBkNFLsjK4hvKg8zQc8B3g5fbghSKTMW4/L/JAYU-98-L.jpg",
      height: 900,
    },
    {
      id: "4",
      img: "https://photos.smugmug.com/Wedding/i-ZJ5BxF2/0/KL5ks7ztq2346tHFBfwZJmNdtBQhFPDgZJPCR7Hp5/L/DSC00439-L.jpg",
      height: 500,
    },
    {
      id: "5",
      img: "https://photos.smugmug.com/Wedding/i-CTtpthc/0/NFSw92SLC8TwJdhJPVckPxL3xNfKTdZbcJ74xqcPq/L/DSC09252-L.jpg",
      height: 700,
    },
    {
      id: "6",
      img: "https://photos.smugmug.com/Wedding/i-9qKbpsR/0/Kx5WSPrqW5VnNvQXBLfnHs4h7VpRHNnZv6GztGVZr/L/DSC01590-L.jpg",
      height: 1000,
    },
    {
      id: "7",
      img: "https://photos.smugmug.com/Wedding/i-g5sS2MQ/0/K9VC9WcPwqMGNZBb9Wvx5Wgwm2fkC3zMw2B3wgNfb/L/untitled-381-L.jpg",
      height: 300,
    },
    {
      id: "8",
      img: "https://photos.smugmug.com/Wedding/i-S9fbtkr/0/KgBmTXb6zzTMBNQMx29fkg2KLWJL8hBzrdq45PNRz/L/untitled-294-L.jpg",
      height: 300,
    },
    {
      id: "9",
      img: "https://photos.smugmug.com/Wedding/i-m6Wtr6k/0/KvJVcDVC4Zb8ZF5k8rpQR7gLkNhmsGv6nNbPtV95H/L/untitled-285-L.jpg",
      height: 1100,
    },
    {
      id: "10",
      img: "https://photos.smugmug.com/Wedding/i-9QRxJRB/0/K7x59QNGPgc6JbNGvmg3Pkz9fzqBFH2f6fHpKshwH/L/_DSC9773-L.jpg",
      height: 700,
    },
    {
      id: "11",
      img: "https://photos.smugmug.com/Pre-Wedding/i-mRJSrmB/0/NK2HTkG7x8vMNzG2m5r5rDJfjbvwHZbfgL7dxTk5p/L/_DSC7655-L.jpg",
      height: 1000,
    },
    {
      id: "12",
      img: "https://photos.smugmug.com/Pre-Wedding/i-fgHwSDV/0/NbBKgN74g9kjBWmPCLKLFczJ4SXR755dgsGwdQK2F/L/JAYU-30-L.jpg",
      height: 900,
    },
    {
      id: "13",
      img: "https://photos.smugmug.com/Pre-Wedding/i-gdF9jJR/0/KfBzLrNRTbFPbKxPSzS8zxCn7LMsmtdBxTZMMwDxR/L/JAYU-41-L.jpg",
      height: 300,
    },
    {
      id: "14",
      img: "https://photos.smugmug.com/Wedding/i-Bbnbh6J/0/Kc3v9Lc3FXFh8hTvvK3TF8tPBLcHbLRvSzvwkX7Gw/L/01-L.jpg",
      height: 1000,
    },
    {
      id: "15",
      img: "https://photos.smugmug.com/Wedding/i-9JL9DGS/0/KFHPL6LL2VQL7C5LjHXPtZWPr6SxvQkGqW99jm6FW/L/_DSC8486-L.jpg",
      height: 400,
    },
    {
      id: "16",
      img: "https://photos.smugmug.com/Pre-Wedding/i-FXFfPDB/0/MWm2q3KVSwcbrhVzD5VFt3DQsVG4vX73QwWkhdfWg/L/JAYU-95-L.jpg",
      height: 700,
    },
    {
      id: "17",
      img: "https://photos.smugmug.com/Pre-Wedding/i-Rn8vFGc/0/MhZvXWD6KTcXrhN7QS45CxskS2p8NjGmLHv8Hg89Z/L/_DSC8269-L.jpg",
      height: 500,
    },
    {
      id: "18",
      img: "https://photos.smugmug.com/Pre-Wedding/i-jv7BK6f/0/L79D9q5jmWhFzZMTpZQQJhZQjFBgxm4RSXTr4rd3T/L/JAYU-148-L.jpg",
      height: 700,
    },
    {
      id: "19",
      img: "https://photos.smugmug.com/Pre-Wedding/i-nnL3hrc/0/LMKF9PCMSPnCNFxg8LPgVJ5cznvDNVStgdkpCG7BT/L/_DSC1225-L.jpg",
      height: 300,
    },
    {
      id: "20",
      img: "https://photos.smugmug.com/Wedding/i-KjD9JjT/0/NhC2mxgWpBd25bQNQDVjGL5VXpDP8595tmKvW2hxL/L/_DSC0018-L.jpg",
      height: 300,
    },
    {
      id: "21",
      img: "https://photos.smugmug.com/Wedding/i-kBvBHkQ/0/NHxbCTVHd7Sz3Z2pP3p6M39wTWBqQbTKdXrqVx5qs/L/_DSC8406-L.jpg",
      height: 1200,
    },
    {
      id: "22",
      img: "https://photos.smugmug.com/Wedding/i-4bVR2pw/0/M2vrzFkmrtdmJr5m5kHCTdd26VZczwFrxQNNbMqQ2/L/DSC09758-L.jpg",
      height: 700,
    },
    {
      id: "23",
      img: "https://photos.smugmug.com/Wedding/i-ccdDbv3/0/K2X928XtFzmGG6FL3XLfmwK6DmMpDBjPNvMWxk2N9/L/DSC08813-L.jpg",
      height: 800,
    },
    {
      id: "24",
      img: "https://photos.smugmug.com/Wedding/i-rkWjq9t/0/KRjdgmKrLZnGZpxvBjQQKhG6VZPqFk6LxckZJrMGQ/L/58-L.jpg",
      height: 300,
    },
    {
      id: "26",
      img: "https://photos.smugmug.com/Pre-Wedding/i-Qv8Sxc9/0/LNd5sGdvDWsFXWkfncXMF3Zg6WpLrSxr8mNmGbGWH/L/_DSC1480-L.jpg",
      height: 900,
    },
    {
      id: "27",
      img: "https://photos.smugmug.com/Pre-Wedding/i-HdJRcPs/0/NGvHPwskrHfRKQgB7hc746wmFKKbD5cXMTCQ8HznS/XL/JAYU-163-XL.jpg",
      height: 300,
    },
    {
      id: "28",
      img: "https://photos.smugmug.com/Pre-Wedding/i-fzpNgBD/0/MfjBzkjr2hsvv3QmkD98Np2zLqJ8FLf9fdJR7W5VV/L/JAYU-113-L.jpg",
      height: 400,
    },
    {
      id: "29",
      img: "https://photos.smugmug.com/Wedding/i-NqnRsBb/0/MKTZk3XLcRm2ngP3Gh82LhS8XTqtsDvrMX6CB9ss8/L/DSC09787-L.jpg",
      height: 700,
    },
    {
      id: "30",
      img: "https://photos.smugmug.com/Wedding/i-2qmwXpB/0/Nf5bPmpnFTfVMMKDms68BW5BX4Jgw8GkQ8P8XbJHd/L/DSC00091-L.jpg",
      height: 900,
    },
    {
      id: "31",
      img: "https://photos.smugmug.com/Wedding/i-mxTvG6j/0/MbgMX5qZmbn9jcvLfjb5NdvBbtcPNQrFbgTWWvk6M/L/DSC00844-L.jpg",
      height: 400,
    },
    {
      id: "32",
      img: "https://photos.smugmug.com/Pre-Wedding/i-GC6Ltfb/0/LwWmFX38SHPQPWwDbSTh8ZrJ6hHSb7F6SfQ7xxKpq/L/JAYU-125-L.jpg",
      height: 900,
    },

  ];

  return (
    <>
      <Navbar />

      <section className=" md:h-[20vh] w-full bg-white " >

      </section>

      <section
        ref={containerRef}
        className="
          w-full
          md:min-h-[250vh] h-[150vh]
          bg-[#F6F6F4]
        "
      >
        <div className="
          md:max-w-[1400px]
          w-full
          mx-auto
          px-20
          grid
          grid-cols-[1fr_1.15fr]
          items-center
          md:gap-28
          gap-5
          relative top-20
        ">

          {/* LEFT CONTENT */}
          <div className="flex flex-col md:w-full relative top-0 md:left-10 left-3 ">
            <p className="fade-text md:text-sm text-[10px] text-gray-500 mb-10">
              Studio 97 Presentes,
            </p>

            <h1 className="fade-text text-black font-[font3] md:text-[56px] text-[27px] leading-[1.06] font-light mb-10">
              Welcome to this
              <br />
              Exclusive
              <br />
              Blog section
            </h1>

            <p className="fade-text text-gray-600/80 max-w-md mb-14 md:leading-relaxed leading-5 ">
              We are the only one who cure your memories, emotions and your
              criteria to meet up.
            </p>

            <div className="fade-text flex relative top-4 gap-4">
              <button className="
                h-10 w-35
                rounded-full
                bg-black
                text-white
                transition
                hover:scale-105
              ">
                Start journey →
              </button>
            </div>
            <br /><br /><br />
            <div className="meaning text-black">

              <div className="s flex justify-between items-center ">
                <h1 className=" md:text-8xl text-5xl "> S </h1>
                <span className=" md:text-7xl text-2xl cd:w-[32vw] w-[40vw] uppercase text-white bg-black " > Supportive </span>
              </div>
              <div className="s flex justify-between items-center ">
                <h1 className=" md:text-8xl text-5xl  "> T </h1>
                <span className=" md:text-7xl text-2xl cd:w-[32vw] w-[40vw] uppercase text-white bg-black " > Technical </span>
              </div>
              <div className="s flex justify-between items-center ">
                <h1 className=" md:text-8xl text-5xl  "> U </h1>
                <span className=" md:text-7xl text-2xl cd:w-[32vw] w-[40vw] uppercase text-white bg-black " > Unique </span>
              </div>
              <div className="s flex justify-between items-center ">
                <h1 className=" md:text-8xl text-5xl  "> D </h1>
                <span className=" md:text-7xl text-2xl cd:w-[32vw] w-[40vw] uppercase text-white bg-black " > Detailed </span>
              </div>
              <div className="s flex justify-between items-center ">
                <h1 className=" md:text-8xl relative md:left-4 left-2 text-5xl  "> I </h1>
                <span className=" md:text-7xl text-2xl cd:w-[32vw] w-[40vw] uppercase text-white bg-black " > Intuitive </span>
              </div>
              <div className="s flex justify-between items-center ">
                <h1 className=" md:text-8xl relative md:right-2 right-1 text-5xl  "> O </h1>
                <span className=" md:text-7xl text-2xl cd:w-[32vw] w-[40vw] uppercase text-white bg-black " > Organized </span>
              </div>
              <div className="s flex justify-between items-center ">
                <h1 className=" md:text-8xl text-5xl  "> 9 </h1>
                <span className=" md:text-7xl text-2xl cd:w-[32vw] w-[40vw] uppercase text-white bg-black " > Nine </span>
              </div>
              <div className="s flex justify-between items-center ">
                <h1 className=" md:text-8xl text-5xl  "> 7 </h1>
                <span className=" md:text-7xl text-2xl cd:w-[32vw] w-[40vw] uppercase text-white bg-black " > Seven </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="flex flex-col md:w-full w-[60%] gap-12 relative md:top-0 top-8 md:right-4 ">
            {["https://photos.smugmug.com/Pre-Wedding/i-fzpNgBD/0/MfjBzkjr2hsvv3QmkD98Np2zLqJ8FLf9fdJR7W5VV/L/JAYU-113-L.jpg",
              "https://photos.smugmug.com/Wedding/i-KjD9JjT/0/NhC2mxgWpBd25bQNQDVjGL5VXpDP8595tmKvW2hxL/L/_DSC0018-L.jpg",
              "https://photos.smugmug.com/Wedding/i-mxTvG6j/0/MbgMX5qZmbn9jcvLfjb5NdvBbtcPNQrFbgTWWvk6M/L/DSC00844-L.jpg",
              "https://photos.smugmug.com/Wedding/i-84dvFBt/0/M6vX6rqZvb5rp3r4m38zvTkpThCLsQCTFjTZdfdFT/L/DSC09142-L.jpg"].map((img, i) => (
                <div
                  key={i}
                  ref={(el) => (imagesRef.current[i] = el)}
                  className="
                  relative
                  md:h-[260px]
                  h-35
                  md:w-full w-40
                  rounded-[26px]
                  overflow-hidden
                  group
                "
                >
                  <img
                    src={img}
                    alt=""
                    className="
                    w-full h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                  />

                  <div className="
                  absolute
                  bottom-6
                  right-6
                  w-11
                  h-11
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  shadow-md
                  transition
                  group-hover:scale-110
                ">
                    ↗
                  </div>
                </div>
              ))}
          </div>

        </div>

      </section>

      <section
        className="
    bg-[#F6F6F4]
    w-full
    relative
    md:h-[500vh]
    h-[290vh]
  "
      >


        <div className="gallery w-full relative">
          <Masonry
            items={items}
            ease="power4.out"
            animateFrom="top"
          />
        </div>
      </section>

      <div className="footer relative w-full">
        < Footer />
      </div>

    </>
  );
};

export default Blogs;
