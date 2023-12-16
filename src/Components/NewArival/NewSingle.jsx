import React from 'react';

const NewSingle = ({item}) => {
    return (
        <div class="w-[350px] h-[400px]   bg-white border border-gray-200 rounded-lg shadow ">
   
        <img class="p-8 w-72 h-64 mx-auto rounded-t-lg" src={item.image} alt="product image" />
   
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">{item.name}</h5>
        </a>
        
        <div class="flex items-center justify-between py-4">
            <span class="text-xl font-bold text-gray-900 ">{item.price} BDT</span>
            <a href="#" class="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</a>
        </div>
    </div>
</div>
    );
};

export default NewSingle;