import React from 'react';

const Contact = () => {
    window.scrollTo(0,0)
    return (
        <div  >
            <section  class="">
  <div class="pb-20 lg:pb-16 lg:pt-6 px-4 mx-auto max-w-screen-sm">
      <h2 class="mb-4 text-4xl tracking-tight font-bold text-center ">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">If You want to book your desired product Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-600 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-600  ">Product Name</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter product name" required/>
          </div>
          <div className=' w-full flex'>
          <button type="submit" class="py-3   px-10 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Book Now</button>
          </div>
      </form>
  </div>
</section>
        </div>
    );
};

export default Contact;