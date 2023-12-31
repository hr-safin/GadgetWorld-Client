import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AuthProvider } from "../AuthContext/AuthContext";
import useQueryHook from "../../Hook/useQueryHook";
import useCart from "../../Hook/useCart";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Details = () => {
    window.scrollTo(0,0)
  const data = useLoaderData();
  const axiosPublic = useAxiosPublic()
  const {user} = useContext(AuthProvider)
  console.log(user.email)
  const [carts, refetch] = useCart()
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

    axiosPublic.post("/myCart", cartInfo)
    .then(res => {
        if(res.data.insertedId){
          refetch()
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
     
        <h2 className="card-title">Price : {data.price} BDT</h2>
        <div className="card-actions justify-end">
          <button onClick={handleCart} className="btn bg-gray-800 text-white hover:text-black">Add To Cart</button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Details;
