import { useContext } from "react";
import { Link} from "react-router-dom";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Brand from "../Brand/Brand";
import Banner3 from "./Banner3";
import Slide from "../Slider/Slider";
import Banner4 from "./Banner4";
import Contact from "../Contact/Contact";
import UpArraow from "../UpArraow2";
import UpArrow from "../Update/UpArrow";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TopProduct from "../TopProduct/TopProduct";
import NewArival from "../NewArival/NewArival";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home() {
  window.scrollTo(0,0)

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
  };

  // const {name} = useContext(AuthProvideContext)
  return (

    <>
     {/* <div data-aos="fade-up"
     data-aos-duration="3000">
     <Carousel
     
     className=" pt-4  text-center flex justify-center flex-col lg:px-24">
                <div>
                    <img src="https://www.gadgetmonkeybd.com/public/uploads/all/WOh2tZ5sVdJpSCu39fxLa0FFIRCbkhmop9VewU9Y.jpg" />
                   
                </div>
                <div>
                    <img src="https://www.gadgetmonkeybd.com/public/uploads/all/AT82vTRU91c5z4ftoLXSassyJQl07XDoBGtvC1Kz.jpg" />
                  
                </div>
                <div>
                    <img src="https://www.gadgetmonkeybd.com/public/uploads/all/1WjNGP6SsssOdaK4wGWY3o0jIiTn4fOMDIsWVUlg.jpg" />
                  
                </div>
                <div>
                    <img src="https://www.gadgetmonkeybd.com/public/uploads/all/JMwviK7LCMV0aJ9DbRMpHFJU9GmFO3G8g7l53LMc.jpg" />
                  
                </div>
            </Carousel>
     </div>
     */}
     <div className=" pb-10">

     <Slider className="  pt-6" {...settings}>
      <div>
        <img className="w-full lg:px-24" src="https://www.gadgetmonkeybd.com/public/uploads/all/WOh2tZ5sVdJpSCu39fxLa0FFIRCbkhmop9VewU9Y.jpg" alt="Product 1" />
        
      </div>
      <div>
        <img className="w-full lg:px-24" src="https://www.gadgetmonkeybd.com/public/uploads/all/AT82vTRU91c5z4ftoLXSassyJQl07XDoBGtvC1Kz.jpg" alt="Product 2" />
       
      </div>
      <div>
        <img className="w-full lg:px-24" src="https://www.gadgetmonkeybd.com/public/uploads/all/JMwviK7LCMV0aJ9DbRMpHFJU9GmFO3G8g7l53LMc.jpg" alt="Product 3" />
      </div>
      <div>
                    <img className="w-full lg:px-24" src="https://www.gadgetmonkeybd.com/public/uploads/all/1WjNGP6SsssOdaK4wGWY3o0jIiTn4fOMDIsWVUlg.jpg" />
                  
                </div>
    </Slider>
     </div>

   

      <Banner />

      <TopProduct />
      <Brand />
      <NewArival />

      {/* <Banner3 /> */}
      <Banner4 />
      <Contact />
    
         
        </>
         
    
  );
}


{/* <div   className=' lg:my-0 my-20 mb-20 px-6 lg:px-24 lg:h-[80vh] md:px-10 flex flex-col lg:flex-row justify-center gap-20 lg:gap-44 items-center'>
<div>
    <h2 className='text-3xl  lg:text-5xl font-bold '>Tech Essentials at <br />Gadget World</h2>
    <p className=' text-gray-600 lg:w-[500px] pt-6 pb-6'>Discover the Ultimate Tech Playground at Gadget World: Your One-Stop Shop for Apple, Samsung, OnePlus, Google, and More!  </p>
    <Link to="/register"><button className=' bg-blue-700 text-white px-6 py-3 rounded-lg '>Get Started</button></Link>
</div>
<div>
    <img className='lg:w-[100%] md:w-[70%] mx-auto' src="https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Apple-Products-expected-to-launch-in-2023.png" alt='User'/>
</div>
</div> */}