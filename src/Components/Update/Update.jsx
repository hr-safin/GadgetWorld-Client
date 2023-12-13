import React, { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const Update = () => {
    window.scrollTo(0,0)
    
    
    const data = useLoaderData()
     const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const brandName = form.brand.value
        const name = form.name.value
        const price = form.price.value
        const description = form.short.value
        const type = form.type.value
        const rating = form.rating.value
       
        const photo = form.photo.value
        // const banner = form.banner.value

        const NewAddProduct = {name,brandName, price, description, type, rating, photo}
        console.log(NewAddProduct)

        fetch(`https://server-brand-shop-aqy2ii6z0-safin-rahmans-projects.vercel.app/update/${data._id}`,{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(NewAddProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Good job!',
                    'This product has been Updated',
                    'success'
                  )
            }
        })

       

        
    }
    return (
        <>
        
        <div className=' lg:my-8 my-16  w-full  lg:h-screen flex flex-col justify-center items-center'>
            
     <section class=" w-full lg:w-[40%] px-4 py-4 mx-auto lg:pb-10 lg:bg-[#F4F3F0]">
  <div class="py-8 px-4 mx-auto w-full lg:py-2">
      <h2 class="mb-16 text-2xl text-center font-bold text-gray-900 ">Update Product</h2>
      
      <form className=' w-full' onSubmit={handleAddCoffee} >
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              
              <div class="w-full">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                  <input defaultValue={data.name} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter brand name" required/>
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 ">Brand Name</label>
                  <input defaultValue={data.brandName} type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter brand name" required />
              </div>
              <div class="w-full">
                  <label for="type" class="block mb-2 text-sm font-medium text-gray-900 ">Type Name</label>
                  <input defaultValue={data.type} type="text" name="type" id="product" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter product type" required />
              </div>
              <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                  <input defaultValue={data.price} type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter product price" required/>
              </div>
              <div class="w-full">
                  <label for="short" class="block mb-2 text-sm font-medium text-gray-900 ">Short Description</label>
                  <input defaultValue={data.description} type="text" name="short" id="short" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter description" required />
              </div>
              <div class="w-full">
                  <label for="rating" class="block mb-2 text-sm font-medium text-gray-900 ">Rating</label>
                  <input defaultValue={data.rating} type="number" name="rating" id="rating" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter product rating" required/>
              </div>
              <div class="sm:col-span-2">
                  <label for="photo" class="block mb-2 text-sm font-medium text-gray-900 ">Photo</label>
                  <input defaultValue={data.photo} type='text' name='photo'  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter photo URL" />
              </div>
              
          </div>
          <button type="submit" class="flex w-full justify-center items-center px-5 py-2.5 mt-4 sm:mt-6 text-lg font-medium text-center bg-blue-600 text-white rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
          Update Product
          </button>
      </form>
  </div>
</section>
        </div>
        </>
    );
};

export default Update;