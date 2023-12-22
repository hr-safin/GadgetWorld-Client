import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useBrand = () => {
    const axiosPublic = useAxiosPublic()
    const {data : brand =[], refetch} = useQuery({
        queryKey : ["brand"],
        queryFn : async() => {
            const res = await axiosPublic.get("/allBrand")
            return res.data
        }
    })
    return [brand, refetch]
};

export default useBrand;