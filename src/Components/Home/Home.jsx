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


export default function Home() {
  window.scrollTo(0,0)

  // const {name} = useContext(AuthProvideContext)
  return (

    <>
    
    <div   className=' lg:my-0 my-20 mb-20 px-6 lg:px-24 lg:h-[80vh] md:px-10 flex flex-col lg:flex-row justify-center gap-20 lg:gap-44 items-center'>
            <div>
                <h2 className='text-3xl  lg:text-5xl font-bold '>Tech Essentials at <br />Gadget World</h2>
                <p className=' text-gray-600 lg:w-[500px] pt-6 pb-6'>Discover the Ultimate Tech Playground at Gadget World: Your One-Stop Shop for Apple, Samsung, OnePlus, Google, and More!  </p>
                <Link to="/register"><button className=' bg-blue-700 text-white px-6 py-3 rounded-lg '>Get Started</button></Link>
            </div>
            <div>
                <img className='lg:w-[100%] md:w-[70%] mx-auto' src="https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Apple-Products-expected-to-launch-in-2023.png" alt='User'/>
            </div>
        </div>

      <Banner />

      <Banner2 />
      <Brand />

      {/* <Banner3 /> */}
      <Banner4 />
      <Slide />

      <Contact />
      <UpArrow />
         
        </>
         
    
  );
}
