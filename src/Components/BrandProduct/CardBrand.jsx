import React from 'react';
import { Link } from 'react-router-dom';
const CardBrand = ({data}) => {
    window.scrollTo(0,0)

   
    return (
        
<div class="w-full max-w-sm  h-[380px]  border border-gray-200 rounded-lg shadow  ">
    
        <img class="p-8 rounded-t-lg mx-auto w-[50%] " src={data.photo} alt="product image" />
    
    <div class="px-5 pb-5">
        <a href="#">
            <div className=' flex justify-between items-center'>
            <h5 class="text-2xl text-center pb-3 font-semibold tracking-tight text-gray-600 ">{data.brandName}</h5>
            <h5 class="text-2xl text-center pb-3 font-semibold tracking-tight text-gray-600 ">{data.type}</h5>
            </div>

            <div className='flex items-center justify-between pt-2'>
            <h5 class="text-xl text-center font-semibold tracking-tight text-gray-600 ">{data.name}</h5>
            <span  class="text-xl font-semibold text-gray-700 ">{data.price} BDT</span> 
            </div>
        </a>
        
        
        <div class="flex w-full  gap-4 items-center justify-between pt-6">
            
            <Link to={`/details/${data._id}`} class="text-white w-full  bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2.5 text-center ">Details</Link>
            <Link to={`/update/${data._id}`} class="text-black hover:text-white w-full  bg-slate-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center ">Update</Link>
        </div>
    </div>
</div>

    );
};

export default CardBrand;