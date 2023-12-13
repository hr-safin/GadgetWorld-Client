import { useState } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

const Slide = () => {
    

  return (
    <div className=" lg:px-24 px-6 pb-20">
        <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://d61s2hjse0ytn.cloudfront.net/images/web/slider/Pixel_8_Pro_Banner.webp" className="w-full rounded-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://gadgetmonkeybd.com/public/uploads/all/WOh2tZ5sVdJpSCu39fxLa0FFIRCbkhmop9VewU9Y.jpg" className="w-full rounded-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://gadgetmonkeybd.com/public/uploads/all/AT82vTRU91c5z4ftoLXSassyJQl07XDoBGtvC1Kz.jpg" className="w-full rounded-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://images.summitmedia-digital.com/spotph/images/2020/12/23/best-gadget-releases-640-1608722767.jpg" className="w-full rounded-md" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Slide