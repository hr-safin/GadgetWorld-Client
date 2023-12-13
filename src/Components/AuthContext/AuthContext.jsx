import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../FireBase/firebase.config';
import { FETCH_STATUS } from '../FetchStatus';
export const  AuthProvider = createContext(null)

const AuthContext = ({children}) => {
    const [user,setUser] = useState(null)
    let [isLoading, setLoading] = useState(FETCH_STATUS.LOADING)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)
    console.log(FETCH_STATUS.LOADING)

    
    const createUser = (email,password) => {
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true)
        
        return signInWithEmailAndPassword(auth, email, password)
    }

    const [toggle,setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    const logOut = () => {
        setLoading(true)
       
        return signOut(auth)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        
        return  signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
           
                setUser(currentUser)
                setLoading(false)        
            
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        setUser,
        createUser,
        logIn,
        logOut,
        isLoading,
        signInWithGoogle,
        handleToggle
    }
    return (
        <AuthProvider.Provider value={userInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;