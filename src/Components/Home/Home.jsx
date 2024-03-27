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

  return (

    <>

     <div className=" pb-10">

     <Slider className="  pt-6" {...settings}>
      <div>
        <img className="lg:w-full h-[200px]  md:h-[400px] lg:h-[500px]  lg:px-24 px-4" src="https://i.postimg.cc/0Nw639Vy/macbook.jpg" alt="Product 1" />
        
      </div>
      <div>
        <img className="lg:w-full h-[200px] md:h-[400px] lg:h-[500px]  lg:px-24 px-4" src="https://i.postimg.cc/Y23vTnzY/GAdget.jpg" alt="Product 2" />
       
      </div>
      <div>
        <img className="lg:w-full h-[200px] md:h-[400px] lg:h-[500px]  lg:px-24 px-4" src="https://i.postimg.cc/3RZw5NmY/samsung.jpg" alt="Product 3" />
      </div>
      <div>
          <img className="lg:w-full h-[200px] md:h-[400px] lg:h-[500px]  lg:px-24 px-4" src="https://i.postimg.cc/Bn1QZMHh/iphone.jpg" />
                  
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