import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useBrand from "../../Hook/useBrand";
import All from "./All/All";
import Iphone from "./IPhone/Iphone";
import OnePlus from "./OnePlus/OnePlus";
import Realme from "./RealMe/Realme";
import Samsung from "./Samsung/Samsung";
const AllBrand = () => {
    
   const [brand, refetch] = useBrand()

   const apple = brand.filter(item => item.brand === "Apple")
   const samsung = brand.filter(item => item.brand === "Samsung")
   const onePlus = brand.filter(item => item.brand === "OnePlus")
   const realMe = brand.filter(item => item.brand === "RealMe")


  return (
    <div >
      <div className=" pb-10 pt-6 flex gap-3 flex-col justify-center items-center ">
        <h3 className=" text-4xl font-bold">Popular Brand</h3>
       
      </div>
      <div className="grid grid-cols-9 pb-20 gap-10 lg:px-28 px-4">
        <div className="bg-gray-200 rounded-md shadow-md h-[300px] col-span-2">
          <h2>Filter System</h2>
        </div>
        <div className=" col-span-7 ">
          <div >
            <Tabs >
              <TabList className="bg-gray-900 text-center rounded-lg text-white px-2 py-3">
                <Tab>All</Tab>
                <Tab>IPhone</Tab>
                <Tab>SumSung</Tab>
                <Tab>OnePlus</Tab>
                <Tab>RealMe</Tab>
              </TabList>

              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                  {brand.map(item => <All item={item} />)}
                  </div>
              </TabPanel>
              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                    {apple.map(item => <Iphone item={item} />)}
                </div>
                
              </TabPanel>
              <TabPanel>
              <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                    {samsung.map(item => <Samsung item={item} />)}
                </div>
              </TabPanel>
              <TabPanel>
              <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                    {onePlus.map(item => <OnePlus item={item} />)}
                </div>
              </TabPanel>
              <TabPanel>
              <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                    {realMe.map(item => <Realme item={item} />)}
                </div>
              </TabPanel>
              
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBrand;
