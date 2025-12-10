import React from 'react'
import Navbar from '../Navbar/Navbar'

const Video = () => {
  return (
    <>
    <div >
        <video src='../src/Videos/video1.mp4' className=' h-full w-full relative ' muted autoPlay loop >
        </video>

    </div>
    </>
  )
}

export default Video