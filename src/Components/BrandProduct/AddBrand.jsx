import {Swiper, SwiperSlide} from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y,EffectCube } from 'swiper/modules';
import 'swiper/css/bundle';import CardBrand from "./CardBrand";
;
const AddBrand = ({getData}) => {
  window.scrollTo(0,0)
    return (
        <>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect={"cube"}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {getData.slice(0,3).map((slide) => (
          <SwiperSlide className="" key={slide._id}>
            <img className=" rounded-lg  h-[260px] lg:h-[700px] bg-center w-full" src={slide.banner} alt={slide._id}/>
          </SwiperSlide>
        ))}
      </Swiper>


      

      </>
    )
    
};

export default AddBrand;