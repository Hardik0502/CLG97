import React from 'react'
import Navbar from '../Navbar/Navbar'

const Video = () => {
  return (
    <>
    <div >
        <video src='/Videos/videoplayback.mp4' className=' h-screen w-screen border-none relative object-cover ' muted autoPlay loop >
        </video>

    </div>
    </>
  )
}

export default Video