import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useBrand from "../../Hook/useBrand";
import All from "./All/All";
import Iphone from "./IPhone/Iphone";
import OnePlus from "./OnePlus/OnePlus";
import Realme from "./RealMe/Realme";
import Samsung from "./Samsung/Samsung";
const AllBrand = () => {

  window.scrollTo(0,0)


  const [brand, refetch] = useBrand();
  const [selectedPrice, setSelectedPrice] = useState("all");
  const handleSelectPrice = (e) => {
    setSelectedPrice(e.target.value);
  };

  const filterPrice = (brand) => {
    switch (selectedPrice) {
      case "low":
        return brand.filter(
          (item) => item.price >= 8000 && item.price <= 30000
        );
      case "medium":
        return brand.filter(
          (item) => item.price >= 31000 && item.price <= 60000
        );
      case "high":
        return brand.filter(
          (item) => item.price >= 61000 && item.price <= 200000
        );

      default:
        return brand;
    }
  };

  const filteredBrand = filterPrice(brand);
  const apple = filteredBrand.filter((item) => item.brand === "Apple");
  const samsung = filteredBrand.filter((item) => item.brand === "Samsung");
  const onePlus = filteredBrand.filter((item) => item.brand === "OnePlus");
  const realMe = filteredBrand.filter((item) => item.brand === "RealMe");

  return (
    <div>
      <div className=" pb-10 pt-6 flex gap-3 flex-col justify-center items-center ">
        <h3 className=" text-4xl font-bold">Popular Brand</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-11 pb-20 gap-10 lg:px-24 px-4">
        <div className="bg-gray-200 px-5 py-4 mx-auto w-full rounded-md shadow-md h-[140px] col-span-3">
          <h2 className="text-xl pb-4 font-bold">Filter By Price</h2>
          <select
            value={selectedPrice}
            onChange={handleSelectPrice}
            className="select w-full max-w-xs"
          >
            <option value="all">All Prices</option>
            <option value="low">Low Range (8000 - 30000)</option>
            <option value="medium">Medium Range (31000 - 60000)</option>
            <option value="high">High Range (61000 - 200000)</option>
          </select>
        </div>
        <div className=" col-span-8 ">
          <div>
            <Tabs>
              <TabList className="bg-gray-200 text-center rounded-lg text-black px-2 py-3">
                <Tab>All</Tab>
                <Tab>IPhone</Tab>
                <Tab>Samsung</Tab>
                <Tab>OnePlus</Tab>
                <Tab>RealMe</Tab>
              </TabList>

              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                  {filteredBrand.map((item) => (
                    <All item={item} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                  {apple.map((item) => (
                    <Iphone item={item} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                  {samsung.map((item) => (
                    <Samsung item={item} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                  {onePlus.map((item) => (
                    <OnePlus item={item} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 gap-10">
                  {realMe.map((item) => (
                    <Realme item={item} />
                  ))}
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
