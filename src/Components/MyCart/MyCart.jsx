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
        <div className=' grid-cols-1 grid gap-8 place-items-center px-6  pb-28 pt-12'>
        {deleteOne.map(data => <CartCard handleDelete={handleDelete}  data={data} key={data._id} />)}
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