import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import AuthContext from "./Components/AuthContext/AuthContext";
import Login from "./Components/Login/Login";
import Registration from "./Components/Register/Registration";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import AddProduct from "./Components/AddProduct/AddProduct";
import MyCart from "./Components/MyCart/MyCart";
import Brand from "./Components/BrandProduct/Brand";
import Update from "./Components/Update/Update";
import Details from "./Components/Details/Details";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },1000)
  }, [])
  
  const router = new createBrowserRouter([
    {
      path : "/",
      element : <Layout />,
      errorElement : <Error />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/login",
          element : <Login />
        },
        {
          path : "/register",
          element : <Registration /> 
        },
        {
          path : "/addProduct",
          element : <PrivateRouter><AddProduct /></PrivateRouter>
        },
        {
          path : "/myCart",
          element : <PrivateRouter><MyCart /></PrivateRouter>,
          loader : () => fetch("https://server-brand-shop-aqy2ii6z0-safin-rahmans-projects.vercel.app/myCart")
        },
        {
          path : "/brand/:name",
          element : <PrivateRouter><Brand /></PrivateRouter>,
          loader : () => fetch("../brand.json")
        },
        {
          path : "/update/:id",
          element : <PrivateRouter><Update /></PrivateRouter>,
          loader : ({params}) => fetch(`https://server-brand-shop-aqy2ii6z0-safin-rahmans-projects.vercel.app/update/${params.id}`)
        },
        {
          path : "/details/:id",
          element : <PrivateRouter><Details /></PrivateRouter>,
          loader : ({params}) => fetch(`https://server-brand-shop-aqy2ii6z0-safin-rahmans-projects.vercel.app/details/${params.id}`)
        }
      ]
    }
  ])

  return loading ? <div className=" text-blue-600 text-3xl bg-gray-800 h-screen flex justify-center items-center">
     <span className="loading loading-dots loading-lg"></span>
  </div> : (
    <AuthContext>
    <RouterProvider router={router}></RouterProvider>
      
    </AuthContext>
  )
}

export default App
