import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hook/useAxiosPublic';

import { FaArrowRightLong } from "react-icons/fa6";
import NewSingle from './NewSingle';
const NewArival = () => {
    const axiosPublic = useAxiosPublic()

    const [topProduct, setTopProduct] = useState([])

    useEffect(() => {
        axiosPublic.get("/newArrival")
        .then(res => {
            console.log(res.data)
            setTopProduct(res.data)
        })
    }, [])
    return (
        <div>

            <div className=' pb-16 pt-10 flex gap-3 flex-col justify-center items-center '>
                <h3 className=' text-4xl font-bold'>New Arrival</h3>
                <p className=' text-gray-600 font-medium'>This products listed by this month</p>
            </div>


            <div className=' pb-20 px-4 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center'>
                {topProduct.map(item => <NewSingle key={item._id} item={item}  />)}
            </div>


            <div className=' pt-6 pb-20 flex items-center justify-center'>
                <button className=' hover:bg-gray-800 rounded-md flex items-center gap-2 bg-gray-900 text-white px-4 py-2'>
                    View All
                    <FaArrowRightLong />
                    </button>
            </div>
            
        </div>
    );
};

export default NewArival;