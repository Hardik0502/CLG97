import { useGSAP } from '@gsap/react'
import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

  useGSAP(() => {

    // Entry Animation

    gsap.from('.nav , .navlink', {
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

        if(currentScroll < 80) return ;

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


  }, [])


  return (
    <div className='navbar w-full overflow-hidden fixed top-0 z-10 font-[font2] bg-black/30 '>

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

      <nav className='nav flex justify-center gap-5 items-center' >
        <div className="leftLink text-[20px] flex gap-3 ">
          <Link to='/' className='navlink '> Home </Link>
          <Link to='/blogs' className='navlink'> Blogs </Link>
        </div>
        <div className="logo">
          <h1 className=' text-[55px] text-black '> STUDIO 97 </h1>
        </div>
        <div className="rightLink text-[20px] flex gap-3 ">
          <Link to='/help' className='navlink '> Help </Link>
          <Link to='/about' className='navlink'> About </Link>
        </div>
      </nav>


    </div>
  )
}

export default Navbar