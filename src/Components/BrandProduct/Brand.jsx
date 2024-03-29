import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AddBrand from './AddBrand';
import CardBrand from './CardBrand';
import AuthContext, { AuthProvider } from '../AuthContext/AuthContext';
import { FETCH_STATUS } from '../FetchStatus';
import useAxiosPublic from '../../Hook/useAxiosPublic';

const Brand = () => {
    window.scrollTo(0,0)

    const {name} = useParams()
    const axiosPublic = useAxiosPublic()
    const [isLoading, setLoading] = useState(FETCH_STATUS)
    const [getData, setData] = useState([])


    useEffect(() => {
        axiosPublic.get("/brand")
        .then(res => {
            const matched = res.data.filter(data =>  data.brandName === name)
            setData(matched)
            setLoading(false)
            
        })
    }, [])
    return isLoading ? <div className=' h-screen flex justify-center items-center'><span className="loading loading-spinner loading-lg"></span>
    </div> : (
        <div>
            {getData.length > 0 ? <>
                <div className=' w-full h-[100vh] lg:mb-36 px-6 pt-2 lg:px-24 rounded-lg lg:py-10' >
             <AddBrand getData={getData} />
            </div>
            <div className=" -mt-64 lg:mt-0 lg:place-items-center px-6  lg:px-20 pb-36 grid grid-cols-1 lg:grid-cols-3 gap-10">
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