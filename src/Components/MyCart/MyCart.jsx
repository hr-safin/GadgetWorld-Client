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
                 setDelete(deleted)
            
            
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
        <div className=' pb-40  px-6 lg:px-28  pb-28 pt-12'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-600 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Pay
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                
            </tr>
        </thead>
        <tbody>
            {deleteOne.map(data => <> <tr class="bg-white border-b ">
                <td class="p-4">
                    <img src={data.photo} class="w-8 md:w-20 max-w-full max-h-full" alt="Apple Watch"/>
                </td>
                <td>
                    <h2 className=' text-black'>{data.name}</h2>
                </td>
                
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        
                        <div>
                            <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 " placeholder="1" required />
                        </div>
                       
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 ">
                    {data.price} BDT
                </td>
                <td>
                    <button>pay now</button>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
            </tr>
            </>)}
            
            
        </tbody>
    </table>
</div>
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