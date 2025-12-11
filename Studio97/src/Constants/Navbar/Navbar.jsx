import { useGSAP } from '@gsap/react'
import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const Navbar = () => {

  

  useGSAP(()=>{
    gsap.from('.nav , .navlink',{
        opacity : 0,
        y:-200,
        stagger : {
          each : 0.2,
          ease : 'power1.in',
          grid : 'auto'        
        },
        duration : 1
    })


  })

  return (
    <div className=' h-[6vw] w-full overflow-hidden absolute py-4 px-6 md:px-12 md:py-2 top-0 z-10 font-[font2] '>

      <div className="nav flex justify-between h-full w-full items-center">
        <h1 className=' text-[3.8vw] '> STUDIO 97 </h1>
            
        <div className="links text-[1.5vw] h-full items-center  flex gap-2 ">
        <Link to='/' className='navlink '> Home </Link>                
        <Link to='/blogs' className='navlink'> Blogs </Link>                
        <Link to='/help' className='navlink'> Help </Link>                
        <Link to='/about' className='navlink'> About </Link>                
          {/* <a href="/"> Home </a>
          <a href="/blogs"> Blogs </a>
          <a href="/help"> Help </a>
          <a href="/about"> About </a> */}
        
        </div>

      </div>
    </div>
  )
}

export default Navbar