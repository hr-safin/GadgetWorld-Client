import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from "@material-tailwind/react";
const CardBrand = ({data}) => {
    window.scrollTo(0,0)

    const number = parseInt(data.rating) 
    return (
        
<div class="w-full max-w-lg    border border-gray-200 rounded-lg shadow  ">
    
        <img class="p-8 rounded-t-lg mx-auto w-[50%] " src={data.photo} alt="product image" />
    
    <div class="px-5 pb-5">
        <a href="#">
            <div className=' flex justify-between items-center'>
            <h5 class="text-3xl text-center pb-3 font-semibold tracking-tight text-gray-600 ">{data.brandName}</h5>
            <h5 class="text-2xl text-center pb-3 font-semibold tracking-tight text-gray-600 ">{data.type}</h5>
            </div>

            <div className='flex items-center justify-between pt-2'>
            <h5 class="text-2xl text-center font-semibold tracking-tight text-gray-600 ">{data.name}</h5>
            <span  class="text-2xl font-semibold text-gray-700 ">{data.price} BDT</span> 
            </div>
            
            
            
            <p class="text-base pt-3 pb-3 font-semibold tracking-tight text-gray-500 ">{data.description}</p>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
           <Rating className=' text-yellow-500' value={number} />
            {/* <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  dark:text-blue-800 ml-3">{data.rating}.0 / 10.0</span> */}
        </div>
        
        <div class="flex w-full  gap-4 items-center justify-between pt-6">
            
            <Link to={`/details/${data._id}`} class="text-white w-full text-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Link>
            <Link to={`/update/${data._id}`} class="text-black hover:text-white w-full text-lg bg-slate-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>
        </div>
    </div>
</div>

    );
};

export default CardBrand;