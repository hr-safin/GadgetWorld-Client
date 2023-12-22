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

    const SubTotal = carts.reduce((total, item) => total + parseFloat(item.price),0)
    
    const deliveryCharge = 60

    const grandTotal = SubTotal + deliveryCharge
    




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

        
        <h2 className=' text-3xl pt-6 text-center'>My Shopping Cart</h2>
        {carts.length > 0  ? 
        <div className=' pb-40 flex flex-col-reverse rounded-md lg:flex-row-reverse  px-6 justify-center    pt-12 gap-10 lg:gap-32'>
            <div className='bg-gray-50 shadow-lg h-[295px] mx-auto lg:mx-0 w-full lg:w-80 p-5 '>
                <div>
                    <h2 className=' text-2xl font-semibold pb-4'>Order Summary</h2>
                    <h2>Sub Total : {SubTotal}   BDT </h2>
                    <div className=' border-b border-gray-300 my-4'></div>
                    <h2>Delivery Charge : {deliveryCharge} BDT </h2>
                    <div className=' border-b border-gray-300 my-4'></div>
                    <h2 className=' font-semibold text-lg'>Total  : {grandTotal} BDT</h2>
                    <div className=' border-b border-gray-300 my-4'></div>
                    <div>
                        <button className=' bg-gray-800 w-full rounded-md py-2 text-white hover:bg-gray-900 mb-2'>Checkout</button>
                    </div>
                </div>
            </div>
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
                    Action
                </th>
                
            </tr>
        </thead>
        <tbody>
            {carts.map(data => <> <tr class="bg-white border-b ">
                <td class="p-4">
                    <img src={data.photo} class="w-8 md:w-16 max-w-full max-h-full" alt="Apple Watch"/>
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