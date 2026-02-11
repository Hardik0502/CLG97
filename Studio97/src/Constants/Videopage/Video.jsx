import React from 'react'
import Navbar from '../Navbar/Navbar'

const Video = () => {
  return (
    <>
    <div >
        <video src='https://res.cloudinary.com/ddhh0a3an/video/upload/v1770639319/videoplayback_nt00tk.mp4' className=' h-screen w-screen border-none relative object-cover ' muted autoPlay loop playsInline >
        </video>
    </div>
    </>
  )
}

export default Video