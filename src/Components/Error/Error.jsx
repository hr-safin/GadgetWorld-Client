import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error)
    const navigate = useNavigate()

    const handleHome = () => {
        navigate("/")
    }


    const handleNavigate = () => {
        navigate(-1)
    }
    
    return (
        <div className=' min-h-screen py-20 sm:py-0 lg:px-32 px-6 items-center justify-center  flex flex-col'>
            <section class="bg-white">
    <div class="container min-h-screen px-6 py-12 mx-auto lg:flex md:justify-center md:items-center md:gap-12">
        <div class="w-full mx-auto sm:text-center lg:text-left  lg:w-1/2">
            <p class="text-base font-bold text-green-600 dark:text-blue-400">404 error</p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Page not found</h1>
            <p class="mt-4 text-gray-600">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

            <div class="flex sm:items-center sm:justify-center lg:justify-start mt-6 gap-x-3">
                <button onClick={handleNavigate} class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>


                    <span>Go back</span>
                </button>

                <button onClick={handleHome} class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-900 rounded-lg shrink-0 sm:w-auto hover:bg-gray-600  ">
                    Take me home
                </button>
            </div>
        </div>

        <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img class="md:w-[800px] lg:w-[900px]  mx-auto" src="https://i.postimg.cc/HxhZwJ8K/error-404-not-found.png" alt=""/>
        </div>
    </div>
</section>
        </div>
    );
};

export default Error;