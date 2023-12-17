import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from "@tanstack/react-query";
import { AuthProvider } from '../Components/AuthContext/AuthContext';

const useQueryHook = () => {
    const axiosPublic = useAxiosPublic()

    const {user} = useContext(AuthProvider)

  const {data : cart =[], refetch}  = useQuery({
    queryKey : ["cart"],
    queryFn : async () => {
      const res = await axiosPublic.get("/cartCount")
      const newData = res.data.filter(item => item.email === user?.email)
      return  newData
    }
  })
    return [cart, refetch]
};

export default useQueryHook;