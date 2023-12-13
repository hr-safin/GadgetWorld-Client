import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AddBrand from './AddBrand';
import CardBrand from './CardBrand';
import AuthContext, { AuthProvider } from '../AuthContext/AuthContext';
import { FETCH_STATUS } from '../FetchStatus';

const Brand = () => {
    window.scrollTo(0,0)

    const {name} = useParams()
    // const {isLoading} = useContext(AuthProvider)
    const [isLoading, setLoading] = useState(FETCH_STATUS)
    // console.log(name)
    // console.log(brands)
    const [getData, setData] = useState([])

    // const brand = brands.forEach(data => data.brandName)
    // console.log(brand)

    useEffect(() => {
        fetch("https://server-brand-shop-aqy2ii6z0-safin-rahmans-projects.vercel.app/brand")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const matched = data.filter(data =>  data.brandName === name)
            setData(matched)
            setLoading(false)
            
        })
    }, [])
    return isLoading ? <div className=' h-screen flex justify-center items-center'><span className="loading loading-spinner loading-lg"></span>
    </div> : (
        <div>
            {getData.length > 0 ? <>
                <div className=' w-full h-[100vh] lg:mb-36 px-6 pt-6 lg:px-20 rounded-lg lg:py-10' >
             <AddBrand getData={getData} />
            </div>
            <div className=" -mt-64 lg:mt-0 lg:place-items-center px-6  lg:px-20 pb-36 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {getData.map(data => <CardBrand key={data._id} data={data} />)}
      </div>
            
            </>
            : <div className=' h-[80vh] flex flex-col gap-3 items-center justify-center'>
                {isLoading  ? <div className=' h-[60vh] flex justify-center items-center'><span className="loading loading-spinner loading-lg"></span>
           </div> :
     
        <div>
                <h2 className=' text-3xl text-gray-700 text-center'>Not Available Any Product</h2>
                <p className=' text-xl text-gray-700 text-center pt-2'>For more information. Stay Tuned</p>
        </div>
    
    }
                
            </div>
        
        }
            
        </div>
    );
};

export default Brand;