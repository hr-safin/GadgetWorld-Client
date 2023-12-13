import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Rating } from "@material-tailwind/react";
import 'sweetalert2/src/sweetalert2.scss'
import { AuthProvider } from "../AuthContext/AuthContext";

const Details = () => {
    window.scrollTo(0,0)
  const data = useLoaderData();
  const {user} = useContext(AuthProvider)
  console.log(user.email)

  const handleCart = () => {
    const name = data.name
    const photo = data.photo
    const brandName = data.brandName
    const description = data.description
    const price = data.price
    const type = data.type
    const rating = data.rating
    const email = user.email

    const cartInfo = {name, brandName, type, price, description, photo, rating,email}

    fetch("https://server-brand-shop-aqy2ii6z0-safin-rahmans-projects.vercel.app/myCart", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(cartInfo)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire(
                'Good job!',
                'This product has been added to cart',
                'success'
              )
        }
    })
  }

  const number = parseInt(data.rating)
  return (
    <div >
    <div className="card lg:w-[900px] mx-6 lg:h-[395px] lg:mx-auto my-20 lg:my-32 flex justify-center items-center lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
         className=" w-full"
          src={data.photo}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Brand : {data.brandName}</h2>
        <h2 className="card-title text-gray-600">{data.name}, {data.type}</h2>
        
        <p className=" lg:w-[500px]  text-gray-600 pt-2">{data.description}</p>
        <Rating className=" text-yellow-500 mt-1 mb-3" value={number} />
        {/* <span class="bg-blue-200 text-blue-800 text-base font-semibold  px-8 py-2 flex justify-start flex-row w-[200px] rounded  dark:text-blue-800 mt-1 mb-5 ">Rating : {}.0 / 10.0</span> */}
        <h2 className="card-title">Price : {data.price} BDT</h2>
        <div className="card-actions justify-end">
          <button onClick={handleCart} className="btn bg-blue-600 text-white hover:text-black">Add To Cart</button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Details;
