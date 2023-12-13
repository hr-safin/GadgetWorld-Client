import React, { useState } from "react";
import {TiTick } from "react-icons/ti"
import { Rating } from "@material-tailwind/react";
const CartCard = ({ data,handleDelete }) => {
    window.scrollTo(0,0)
    const number = parseInt(data.rating)
    
    
  return (
    <div className="card sm:card-side w-full lg:w-[650px] bg-base-100 border-2">
      <figure>
        <img
          src={data.photo}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <div className=" flex justify-between items-center">
        <h2 className="card-title">{data.name}</h2>
        <h2 className="card-title">{data.price} BDT</h2>
        </div>
        <Rating className=" text-yellow-500 mt-2 mb-2" value={number} />
        {/* <span class="bg-blue-200 text-blue-800 text-base font-semibold  px-3 py-2 flex justify-start flex-row w-[180px]  mb-2 mt-2 text-center rounded  dark:text-blue-800 ">Rating : {data.rating}.0 / 10.0</span> */}
        <div className="flex items-center gap-1 ">
        <span className=" text-green-600 text-lg"><TiTick /></span> 
        <h2 className="card-title  text-gray-600 text-base">In Stock</h2>
        </div>
        
        <div onClick={() => handleDelete(data._id)} className="card-actions justify-end">
          <button className="btn btn-primary">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
