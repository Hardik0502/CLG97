import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {

  const [navclick, setnavclick] = useState(false);
  const navRef = useRef(null);

  useGSAP(() => {

    // Entry Animation

    gsap.from('.nav ,.navlink', {
      opacity: 0,
      y: -200,
      stagger: {
        each: 0.2,
        ease: 'power1.in',
        grid: 'auto'
      },
      duration: 1.5
    })


    // Scrolling Navbar hide/show


    let lastScroll = 0;  // It will store the previous scroll position. as you scroll down or up.

    ScrollTrigger.create({  // It will notice the scroll and fires events that we want.

      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        const currentScroll = self.scroll();

        if (currentScroll < 80) return;

        if (currentScroll > lastScroll) {
          gsap.to('.navbar', {
            y: '-100%',
            duration: 0.45,
            ease: 'power2.out',
          })
        }
        else {
          gsap.to('.navbar', {
            y: '0%',
            duration: 0.4,
            ease: 'power2.out'
          })
        }

        lastScroll = currentScroll; // It helps to update the last scroll whenever you are.

      }


    })

    // For Hamburger



    // const tl = gsap.timeline({ paused: true });

    if (!navRef.current) return;

    if (navRef.current) {
      //  navRef.current = gsap.timeline( { paused : true } );

      gsap.to(navRef.current, {
        yPercent: navclick ? 0 : 100,
        duration: 0.6,
        ease: 'power3.out'
      })
    }

  }, [navclick])



  return (
    <>
      <div className='  navbar hidden lg:block
  fixed
  top-0
  left-0
  w-full
  h-20
  sm:h-[70px]
  lg:h-[90px]
  z-50
  font-[font2]
  bg-white/40
  backdrop-blur-md
  shadow-lg transition-colors duration-300'>

        {/* <div className="nav flex h-full items-center justify-center ">

        <div className="links flex gap-[1vw] text-[20px] text-white items-center "> 
          
        <Link to='/' className='navlink '> Home </Link>                
        <Link to='/blogs' className='navlink'> Blogs </Link>                
        <h1 className=' text-[45px] bg-black px-8 py-6 '> STUDIO 97 </h1>
        <Link to='/help' className='navlink'> Help </Link>                
        <Link to='/about' className='navlink'> About </Link> 
        
            </div> */}
        {/* <div className="links flex gap-[1vw] text-[20px] text-whit "> */}
        {/* <Link to='/' className='navlink '> Home </Link>                
        <Link to='/blogs' className='navlink'> Blogs </Link>                
        <Link to='/help' className='navlink'> Help </Link>                
        <Link to='/about' className='navlink'> About </Link>                 */}
        {/* <a href="/"> Home </a>
          <a href="/blogs"> Blogs </a>
          <a href="/help"> Help </a>
          <a href="/about"> About </a> */}

        {/* </div>  */}

        {/* </div> */}

        <nav className='nav relative h-full w-full flex items-center justify-between lg:justify-center lg:gap-8 ' >
          <div className="leftLink text-[25px] font-[font3] flex gap-4 ">
            <Link to='/' className='navlink text-black drop-shadow-md hover:text-gray-300 transition-colors'>
              Home
            </Link>
            <Link to='/blogs' className='navlink text-black drop-shadow-md hover:text-gray-300 transition-colors'>
              Blogs
            </Link>
            <Link to='/package' className='navlink text-black drop-shadow-md hover:text-gray-300 transition-colors'>
              Packages
            </Link>
          </div>
          <div className="logo">
            <Link to='/' >
              <h1 className=' text-[26px]
      sm:text-[30px]
      md:text-[36px]
      lg:text-[55px]
      font-[font5]
      text-black
      drop-shadow-lg
      whitespace-nowrap'>
                STUDIO 97
              </h1>
            </Link>
          </div>
          <div className="rightLink text-[25px] flex gap-4 font-[font3]">
            <Link to='/help' className='navlink text-black drop-shadow-md hover:text-gray-300 transition-colors'>
              Help
            </Link>
            <Link to='/about' className='navlink text-black drop-shadow-md hover:text-gray-300 transition-colors'>
              About
            </Link>
          </div>
        </nav>

      </div>

      {!navclick && (
        <button className=' fixed top-[18px] right-[4vw]
    z-100
    w-15
    h-17
    text-[32px]
    lg:hidden bg-black '
          onClick={() => setnavclick(true)}
        >
          ☰
        </button>
      )}

      <div
        ref={navRef}
        className="
    mobile-nav
    fixed
    top-0
    left-0
    w-full
    h-screen
    bg-white
    z-90
    lg:hidden
  "
      //  style={{ transform: 'translateY(-100%)' }}
      >
        <div className="relative w-full h-full">

          {/* CLOSE BUTTON */}
          {navclick && (
            <button
              onClick={() => setnavclick(false)}
              className="
      absolute
      top-5
      w-15
      h-17
      right-[4vw]
      text-[32px]
      bg-black
    "
            >
              ✕
            </button>
          )}
          {/* LOGO */}
          <h1 className="
    absolute
    top-[18%]
    left-5
    flex
    underline
    justify-center
    items-center
    text-[12vw]
    font-[font2]
    text-black
  ">
            STUDIO 97
          </h1>

          {/* LINKS */}
          <div className="
    absolute
    top-[32%]
    w-full
    h-full
    flex
    flex-col
    text-[36px]
    font-[font3]
    text-black
  ">    
            <Link to="/" className=' h-20 flex justify-center items-center border-t border-black' >Home</Link>
            <Link to="/blogs" className='h-20 flex justify-center items-center border-t border-black' >Blogs</Link>
            <Link to="/package" className='h-20 flex justify-center items-center border-t border-black'>Packages</Link>
            <Link to="/help" className=' h-20 flex justify-center items-center border-t border-black'>Help</Link>
            <Link to="/about" className=' h-20 flex justify-center items-center border border-black' >About</Link>
          </div>

        </div>

      </div>

    </>
  )
}

export default Navbar