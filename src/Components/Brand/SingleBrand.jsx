import React from 'react';
import { Link } from 'react-router-dom';

const SingleBrand = ({data}) => {
  window.scrollTo(0,0)
    return (
        <Link to={`/brand/${data.brandName}`} >
  
    <div class="group relative hover:border-none rounded-md border-2 border-gray-100 cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/30">
      <div class="">
        <img class="h-full w-[60%] mx-auto object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={data.brandImage} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-white group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class=" text-3xl font-bold text-white pt-16">{data.brandName}</h1>
        

      </div>
    </div>
    
    
  </Link>
  

    );
};

export default SingleBrand;