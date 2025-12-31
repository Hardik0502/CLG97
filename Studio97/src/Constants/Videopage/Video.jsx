import React from 'react'
import Navbar from '../Navbar/Navbar'

const Video = () => {
  return (
    <>
    <div >
        <video src='../src/Videos/videoplayback.mp4' className=' h-screen w-full relative object-cover ' muted autoPlay loop >
        </video>

    </div>
    </>
  )
}

export default Video