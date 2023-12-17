import React, { useContext, useEffect, useState } from 'react';
import CartCard from './CartCard';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { AuthProvider } from '../AuthContext/AuthContext';

const MyCart = () => {
    window.scrollTo(0,0)

    

    const {user} = useContext(AuthProvider)
     

    // const [cart, setCart] = useState([])
    const cart = useLoaderData()
    console.log(cart)
    const matchedEmail = cart.filter(item => item.email === user.email)
    console.log(matchedEmail)
    const [deleteOne, setDelete] = useState(matchedEmail)
 

    



    

    // useEffect(() => {
    //     fetch("https://server-brand-shop-aqy2ii6z0-safin-rahmans-projects.vercel.app/myCart")
    //     .then(res =>res.json())
    //     .then(data => {
    //         // console.log(data)
    //         setCart(data)
    //     })
    // }, [])
    const handleDelete = (id) => {
        fetch(`https://server-brand-shop-aqy2ii6z0-safin-rahmans-projects.vercel.app/myCart/${id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
                  const deleted = deleteOne.filter(item => item._id !== id)
                 setDelete(data)
            
            
            // console.log(data)
            console.log(data)
        })
    }
    // console.log(cart)
    // console.log(deleteOne)

    
    return (
        <>

        
        <h2 className=' text-3xl pt-10 text-center'>My Shopping Cart</h2>
        {deleteOne.length > 0  ? 
        <div className=' h-[60vh]  px-6  pb-28 pt-12'>
        {deleteOne.map(data => <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      
    </tbody>
    
    
  </table>
</div>)}
    </div>
        :

        <div className=' h-[70vh] flex items-center justify-center'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7236766-5875081.png?f=webp" alt="" />
        </div>
         }
        
        </>
    );
};


export default  MyCart;