import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthProvider } from '../Components/AuthContext/AuthContext';

const useCart = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthProvider)

    const {data : carts =[], refetch} = useQuery({
        queryKey : ["carts", user?.email],
        queryFn : async () => {
            const res = await axiosPublic.get(`/myCart?email=${user.email}`)
            return res.data
        }
    })
    return [carts, refetch]
};

export default useCart;