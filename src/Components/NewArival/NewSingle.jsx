import React, { useContext } from 'react';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import useCart from '../../Hook/useCart';
import { AuthProvider } from '../AuthContext/AuthContext';

const NewSingle = ({item}) => {

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [carts, refetch] = useCart()
    const {user} = useContext(AuthProvider)

    const handleCart = () => {
        if(user && user?.email){
            const name = item.name
            const price = item.price
            const photo = item.photo
            const email = user?.email
            const cartInfo = {name, price, photo, email}
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
        }else{
            navigate("/login")
        }
    }

    return (
        <div class="w-[350px] h-[400px]   bg-white border border-gray-200 rounded-lg shadow ">
   
        <img class="p-8 w-72 h-64 mx-auto rounded-t-lg" src={item.image} alt="product image" />
   
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">{item.name}</h5>
        </a>
        
        <div class="flex items-center justify-between py-4">
            <span class="text-xl font-bold text-gray-900 ">{item.price} BDT</span>
            <button onClick={handleCart} class="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add to cart</button>
        </div>
    </div>
</div>
    );
};

export default NewSingle;