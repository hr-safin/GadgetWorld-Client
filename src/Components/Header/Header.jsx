import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthProvider } from "../AuthContext/AuthContext";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useQuery from "../../Hook/useQueryHook";
import useQueryHook from "../../Hook/useQueryHook";
import useCart from "../../Hook/useCart";

export default function NavbarActionButtonPreview() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { logOut, user, loading, handleToggle } = useContext(AuthProvider);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [nav, setNav] = useState(false);

  const [carts] = useCart();

  // const cartLength = count

  const handleShow = () => {
    setShow(!show);
  };
  const handleClick = () => {
    setNav(!nav);
  };

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggle = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch();
  };
  return (
    <>
      {/*<!-- Component: Navbar with --> */}
      <header className="border-b-1 relative z-20 w-full border-b  after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200  dark:border-gray-900 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden lg:px-[90px]">
        <div className="relative mx-auto max-w-full px-4 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[4.5rem] items-stretch justify-between font-medium text-slate-600"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              to="/"
              className="flex items-center text-gray-800 font-bold  gap-2 whitespace-nowrap py-3 text-2xl lg:text-3xl focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              {/* <img  className="lg:w-[340px] lg:flex hidden w-[500px] hover:scale-105 duration-500 ease-in-out" src="https://i.pinimg.com/564x/b3/51/9a/b3519ae27424d598a1a1b94966d5bc6e.jpg" /> */}

              <div className=" flex items-center gap-2">
                <img
                  className=" w-8 md:w-10 rounded-2xl"
                  src="https://play-lh.googleusercontent.com/elVl_dXmZaqDnJq09HK4rrTtbMyhTPZdK22LNILrkigsjyA-YScs9LYkE4W7vMxq8rtx"
                  alt=""
                />
                <h2 className=" text-xl lg:text-2xl text-gray-800 font-bold">
                  Gadget World
                </h2>
              </div>
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
            <ul className=" hidden sm:flex gap-6 justify-center bottom-2 absolute right-28 items-center lg:hidden">
              <NavLink className="text-gray-600 text-sm" to="/">
                Home
              </NavLink>
              <NavLink
                  to="/brand"
                  className="flex text-base items-center gap-2 py-4 transition-colors duration-300  text-gray-700 hover:text-gray-500 focus:text-gray-600 focus:outline-none focus-visible:outline-none lg:px-4  cursor-pointer"
                >
                  <span>Brands</span>
                </NavLink>
              
              <NavLink className="text-gray-600 text-sm" to="/addProduct">
                AddProduct
              </NavLink>
             
            </ul>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain  bg-white/90 px-5 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li
                onClick={() => setIsToggleOpen(!true)}
                className="flex items-stretch"
              >
                <NavLink
                  to="/"
                  className="flex text-base items-center gap-2 py-4 transition-colors duration-300 text-gray-700 hover:text-gray-500 focus:text-gray-600 focus:outline-none focus-visible:outline-none lg:px-4 cursor-pointer"
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li
                onClick={() => setIsToggleOpen(!true)}
                className="flex items-stretch"
              >
                <NavLink
                  to="/brand"
                  className="flex text-base items-center gap-2 py-4 transition-colors duration-300  text-gray-700 hover:text-gray-500 focus:text-gray-600 focus:outline-none focus-visible:outline-none lg:px-4  cursor-pointer"
                >
                  <span>Brands</span>
                </NavLink>
              </li>
              <li
                onClick={() => setIsToggleOpen(!true)}
                className="flex items-stretch"
              >
                <NavLink
                  to="/addProduct"
                  className="flex items-center gap-2 py-4 transition-colors duration-300  text-gray-700 hover:text-gray-500 focus:text-gray-600 focus:outline-none focus-visible:outline-none lg:px-4  cursor-pointer"
                >
                  <span>Add Product</span>
                </NavLink>
              </li>
              <div
                onClick={() => setIsToggleOpen(!true)}
                className="lg:flex-row hidden lg:flex lg:items-center  gap-3  lg:pr-4 pr-20"
              >
                <Link to="/myCart">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 lg:mr-0 mr-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item text-gray-800 font-medium">
                        {carts.length}
                      </span>
                    </div>
                  </label>
                </Link>
              </div>

              <div
                onClick={() => setIsToggleOpen(!true)}
                className=" pt-5 flex lg:hidden items-center ml-auto lg:ml-0 lg:p-0"
              >
                <Link
                  to="/login"
                  className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-800  px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300  hover:shadow-sm hover:shadow-emerald-200 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-emerald-300 disabled:shadow-none"
                >
                  <span>Sign In</span>
                </Link>
              </div>
            </ul>

            <div className=" gap-2 items-center pl-[130px] pt-1  lg:pl-0 sm:pl-60 justify-center flex lg:flex">
              <div
                onClick={() => setIsToggleOpen(!true)}
                className="flex  lg:hidden lg:items-center flex-col   lg:pr-4 "
              >
                <Link to="/myCart">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 lg:mr-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item text-gray-800 font-medium">
                        {carts.length}
                      </span>
                    </div>
                  </label>
                </Link>
                
              </div>
              <div>
              {user ? (
                <>
                  <div className="avatar pr-4">
                    <div
                      onClick={handleShow}
                      className="lg:w-10 w-8 cursor-pointer ring-2 ring-indigo-300 rounded-full"
                    >
                      <img
                        src={
                          user?.photoURL
                          
                        }
                      />
                    </div>
                  </div>
                  <div
                    className={
                      show
                        ? " rounded-md flex transition-all duration-700 flex-col justify-start items-center gap-4  bg-gray-100  p-5 absolute right-6 top-20"
                        : "hidden"
                    }
                  >
                    <h2 className=" text-md">{user.displayName}</h2>
                    <h2 className=" text-md">{user.email}</h2>
                    <a
                      className="text-white cursor-pointer   bg-gray-800  hover:bg-gray-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      onClick={handleLogOut}
                    >
                      Sign Out
                    </a>
                  </div>
                </>
              ) : (
                <div className="ml-auto hidden lg:flex items-center px-6 lg:ml-0 lg:p-0">
                  <Link
                    to="/login"
                    className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-800  px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-gray-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-gray-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-emerald-300 disabled:shadow-none"
                  >
                    <span>Sign In</span>
                  </Link>
                </div>
              )}
              </div>
              
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </>
  );
}
