import React from "react";

const AllBrand = () => {
  return (
    <div>
      <div className=" pb-16 pt-10 flex gap-3 flex-col justify-center items-center ">
        <h3 className=" text-4xl font-bold">Popular Brand</h3>
        <p className=" text-gray-600 font-medium">Get Most Demanded Product</p>
      </div>
      <div className=" h-screen grid grid-cols-9 gap-10 lg:px-28 px-4">
        <div className="bg-gray-600 h-[300px] col-span-2">
          <h2>Filter System</h2>
        </div>
        <div className=" col-span-7 ">
       
          <div className="">
              card
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBrand;
