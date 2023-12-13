import React, { Children, useContext } from 'react';
import { AuthProvider } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    window.scrollTo(0,0)
   const location = useLocation()
    const {user, isLoading} = useContext(AuthProvider)
    
   if(isLoading){
    return <div className=' h-screen flex justify-center items-center'><span className="loading loading-spinner loading-lg"></span>
    </div>
   }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouter;