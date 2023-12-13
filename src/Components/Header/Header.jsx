import React, { useContext, useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthProvider } from "../AuthContext/AuthContext";


export default function NavbarActionButtonPreview() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const { logOut, user, loading,handleToggle } = useContext(AuthProvider);
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [nav, setNav] = useState(false)

  

  // const cartLength = count

  const handleShow = () => {
    setShow(!show);
  };
  const handleClick = () => {
    setNav(!nav);
  };

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
  }
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
  }

  const toggle = (e) => {
    if(e.target.checked){
      setDarkTheme()
    }

    else{
      setLightTheme()
    }
  }

  

  const handleLogOut = () => {
    logOut()
      .then(() => {
          setTimeout(() => {
            navigate('/login')
          }, 2000);
        
      })
      .catch();
  };
  return (
    <>
      {/*<!-- Component: Navbar with --> */}
      <header  className="border-b-1 relative z-20 w-full border-b  after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200  dark:border-gray-900 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden px-4 lg:px-16">
        <div className="relative mx-auto max-w-full px-2 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-600"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              to="/"
              className="flex items-center text-gray-600 font-semibold  gap-2 whitespace-nowrap py-3 text-2xl lg:text-3xl focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              {/* <img  className="lg:w-[340px] lg:flex hidden w-[500px] hover:scale-105 duration-500 ease-in-out" src="https://i.pinimg.com/564x/b3/51/9a/b3519ae27424d598a1a1b94966d5bc6e.jpg" /> */}

              <h2 className=""><span>Gadget</span> <span className=" text-blue-500">World</span></h2>
             
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center sm:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-700 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
                ></span>
              </div>
            </button>
            <ul className=" hidden sm:flex gap-6 justify-center bottom-8 absolute right-16 items-center lg:hidden">
                <NavLink className="text-gray-600 text-sm" to="/">Home</NavLink>
                <NavLink className="text-gray-600 text-sm" to="/addProduct">AddProduct</NavLink>
                <NavLink className="text-gray-600 text-sm" to="/myCart">MyCart</NavLink>
                <input onChange={toggle} type="checkbox" className="toggle toggle-sm" />
              </ul>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain  bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li onClick={() =>setIsToggleOpen(!true)}  className="flex items-stretch">
                <NavLink
                  to="/"
                  
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-8 cursor-pointer"
                  
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li onClick={() =>setIsToggleOpen(!true)}  className="flex items-stretch">
                <NavLink
                 to="/addProduct"
                  
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-8  cursor-pointer"
                  
                >
                  <span>Add Product</span>
                </NavLink>
              </li>
              {/* <li   className="flex items-stretch">
                <NavLink
                 onClick={() =>setIsToggleOpen(!true)}
                 to="/myCart"
                  
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500 focus:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-8 cursor-pointer"
                 
                >
                  <span>My Cart</span>
                </NavLink>
              </li> */}

              
              
              <div onClick={() =>setIsToggleOpen(!true)} className="flex  lg:flex-row lg:items-center flex-col gap-3  lg:pr-8 pr-20">
              <Link to="/myCart">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
     
        <div className="indicator">
        
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:mr-0 mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          {/* <span className="badge badge-sm indicator-item text-blue-600 font-medium"></span> */}
        </div>
      </label>
      </Link>
      <div className=" lg:pl-3 lg:pr-4 flex items-center">
      <input onChange={toggle} type="checkbox"  className="toggle toggle-sm"  />
      </div>
      </div>
      
      
     
              <div onClick={() =>setIsToggleOpen(!true)} className=" pt-5 flex lg:hidden items-center ml-auto lg:ml-0 lg:p-0">
              <Link to="/login" className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-blue-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-blue-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Sign In</span>
              </Link>
            </div>
            </ul>
            <div className=" items-center pl-32 lg:pl-0 sm:pl-60 justify-center flex lg:flex">
        {user ? (
          <>
            <div className="avatar">
              <div
                onClick={handleShow}
                className="w-10 cursor-pointer ring-2 ring-indigo-300 rounded-full"
              >
                <img
                  src={
                    user.photoURL
                      // ? user.photoURL
                      // : "https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png"
                  }
                />
              </div>
            </div>
            <div
              className={
                show
                  ? " rounded-md flex flex-col gap-4 items-center justify-center bg-slate-300 h-40 w-60 absolute right-28 top-24"
                  : "hidden"
              }
            >
              <h2 className=" text-md">{user.displayName}</h2>
              <h2 className=" text-md">{user.email}</h2>
              <a
                className="text-white   bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                onClick={handleLogOut}
                href=""
              >
                Sign Out
              </a>
            </div>
          </>
        ) : (
          <div className="ml-auto hidden lg:flex items-center px-6 lg:ml-0 lg:p-0">
              <Link to="/login" className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-blue-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-blue-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Sign In</span>
              </Link>
            </div>
        )}
  </div>

            
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </>
  )
}