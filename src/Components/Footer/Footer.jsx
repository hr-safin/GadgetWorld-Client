import React from 'react';


const Footer = () => {
    return (
        <div>
          <footer class="bg-white dark:bg-gray-900 ">
    <div class="container lg:px-28 px-4 py-12 mx-auto">
        <div class="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 class="text-xl font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl dark:text-white">We Accept</h1>
            
            <div class="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
                <a href="#" class="inline-flex items-center justify-center w-full px-4 py-2 text-lg  duration-300 text-white  focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    <span>cash on delivery & </span>
                    <div className=' pl-2 flex items-center gap-1'>
                      <h2 className='text-white'>BKash</h2>
                    <img className='w-10' src="https://i.postimg.cc/0yTghVmV/25-removebg-preview.png" alt="" />
                    </div>
                    

                    
                </a>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Quick Link</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Industries</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Services</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Translation</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Proofreading & Editing</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Content Creation</a>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 dark:text-white">Contact Us</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">+880 768 473 4978</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">info@merakiui.com</a>
                </div>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>
        
        <div class="flex flex-col items-center justify-between sm:flex-row">
          <div className=' flex items-center gap-2'>
          <img className=' w-10 rounded-2xl' src="https://play-lh.googleusercontent.com/elVl_dXmZaqDnJq09HK4rrTtbMyhTPZdK22LNILrkigsjyA-YScs9LYkE4W7vMxq8rtx" alt="" />
            <h2 className=' text-2xl text-white font-bold'>Gadget World</h2>
          </div>
           

            <p class="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">© Copyright 2023. All Rights Reserved.</p>
        </div>
    </div>
</footer>
        </div>

    );
};

export default Footer;