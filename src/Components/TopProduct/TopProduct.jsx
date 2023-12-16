import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hook/useAxiosPublic';
import SingleTop from './SingleTop';
import { FaArrowRightLong } from "react-icons/fa6";
const TopProduct = () => {
    const axiosPublic = useAxiosPublic()

    const [topProduct, setTopProduct] = useState([])

    useEffect(() => {
        axiosPublic.get("/topProduct")
        .then(res => {
            console.log(res.data)
            setTopProduct(res.data)
        })
    }, [])
    return (
        <div>

            <div className=' pb-16 pt-10 flex gap-3 flex-col justify-center items-center '>
                <h3 className=' text-4xl font-bold'>Top Selling</h3>
                <p className=' text-gray-600 font-medium'>Get Most Demanded Product</p>
            </div>


            <div className=' pb-20 px-4 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center'>
                {topProduct.map(item => <SingleTop key={item._id} item={item}  />)}
            </div>


            <div className=' py-6 flex items-center justify-center'>
                <button className=' hover:bg-gray-800 rounded-md flex items-center gap-2 bg-gray-900 text-white px-4 py-2'>
                    View All
                    <FaArrowRightLong />
                    </button>
            </div>
            
        </div>
    );
};

export default TopProduct;