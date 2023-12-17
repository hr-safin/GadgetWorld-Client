import React, { useContext, useEffect, useState } from 'react';
import CartCard from './CartCard';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
import { AuthProvider } from '../AuthContext/AuthContext';
import { FaTrash } from 'react-icons/fa6';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import useCart from '../../Hook/useCart';


const MyCart = () => {
    window.scrollTo(0,0)

    

    const { isLoading} = useContext(AuthProvider)
    const axiosPublic = useAxiosPublic()
     

    // const [cart, setCart] = useState([])
    // const cart1 = useLoaderData()
    // console.log(cart1)
    // const matchedEmail = cart1.filter(item => item.email === user.email)
    // console.log(matchedEmail)
    // const [deleteOne, setDelete] = useState(matchedEmail)
 
    const [carts, refetch] = useCart()

    console.log(carts)
    




    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/myCart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    // console.log(cart)
    // console.log(deleteOne)

    
    return isLoading ? <div className=' flex justify-center items-center h-[50vh]'>
        <span className="loading loading-spinner loading-lg"></span>
    </div> : (
        <>

        
        <h2 className=' text-3xl pt-10 text-center'>My Shopping Cart</h2>
        {carts.length > 0  ? 
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
            {carts.map(data => <> <tr class="bg-white border-b ">
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
                <td class="px-10 py-4">
                    <button onClick={() => handleDelete(data._id)} class="font-medium text-red-600 dark:text-red-500 hover:underline"><FaTrash /></button>
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