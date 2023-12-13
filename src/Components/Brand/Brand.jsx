import React, { useEffect, useState } from 'react';
import SingleBrand from './SingleBrand';

const Brand = () => {
    window.scrollTo(0,0)

    const [brand, setBrand] = useState([])

    useEffect(() => {
        fetch("brand.json")
        .then(res => res.json())
        .then(data => {
            setBrand(data)
        })
    }, [])
    return (
        <div  className=' pt-20 pb-28'>
            <h2 className=' text-center tracking-tight text-3xl font-bold pb-10'>SHOP BY BRANDS</h2>
            <div  className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:px-40 px-6'>
                {brand.map(data => <SingleBrand data={data} key={data.id} />)}
            </div>
        </div>
    );
};

export default Brand;