import React, { useState } from "react";
import {TiTick } from "react-icons/ti"

const CartCard = ({ data,handleDelete }) => {
    window.scrollTo(0,0)
    
    
    
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
