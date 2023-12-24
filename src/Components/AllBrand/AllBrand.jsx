import React, { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useBrand from "../../Hook/useBrand";
import All from "./All/All";
import Iphone from "./IPhone/Iphone";
import OnePlus from "./OnePlus/OnePlus";
import Realme from "./RealMe/Realme";
import Samsung from "./Samsung/Samsung";
import { AuthProvider } from "../AuthContext/AuthContext";

const cardsPerPage = 6;
const AllBrand = () => {
  window.scrollTo(0, 0);

  const [brand, refetch] = useBrand();
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [display, setDisplay] = useState(null)
  const [filterSearch, setFilterSearch] = useState([])

  const handleSelectPrice = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleSearch = () => {
    console.log(display)
    const filterItems = brand.filter(item => item.name.toLowerCase().includes(display))
    
    console.log(filterItems)
    setFilterSearch(filterItems)
  }

  const filterPrice = (brand) => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const lastIndex = startIndex + cardsPerPage;

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
        return brand.slice(startIndex, lastIndex);
    }
  };

  const filteredBrand = filterPrice(brand);
  const apple = brand.filter((item) => item.brand === "Apple");
  const samsung = brand.filter((item) => item.brand === "Samsung");
  const onePlus = brand.filter((item) => item.brand === "OnePlus");
  const realMe = brand.filter((item) => item.brand === "RealMe");

  const totalPage = Math.ceil(brand.length / cardsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1), totalPage);
  };
  return (
    <div>
      <div className=" pb-10 pt-6 flex gap-3 flex-col justify-center items-center ">
        <h3 className="text-2xl te lg:text-4xl font-bold">Popular Brand</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-11 pb-20 gap-10 lg:px-24 px-4">
        <div className="bg-gray-100 px-4 py-4 mx-auto w-full md:w-[330px] rounded-md shadow-md h-[240px] col-span-8 lg:col-span-3">
          <div className=" flex gap-2 items-center pb-6 pt-5">
            <input
            
            onChange={(e) => setDisplay(e.target.value)}
            className=" w-[400px] md:w-[72%] border border-gray-900 rounded-md px-3 p-2" type="search" placeholder="Search your product" />
            <button onClick={handleSearch} className=" px-4 py-2 bg-gray-900 text-white rounded-md ">Search</button>
          </div>
          <h2 className="text-xl pb-4 font-bold">Filter By Price</h2>
          <select
            value={selectedPrice}
            onChange={handleSelectPrice}
            className="select w-full max-w-lg md:max-w-xs"
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
              <TabList className="bg-gray-100 text-center rounded-lg text-black px-2 py-3">
                <Tab>All</Tab>
                <Tab>IPhone</Tab>
                <Tab>Samsung</Tab>
                <Tab>OnePlus</Tab>
                <Tab>RealMe</Tab>
              </TabList>

              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10">
                  {filterSearch.length > 0 ?
                  
                  filterSearch.map((item) => (
                    <All item={item} />
                  ))
                :
                filteredBrand.map((item) => (
                  <All item={item} />
                ))
                }
                 
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10">
                  {apple.map((item) => (
                    <Iphone item={item} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10">
                  {samsung.map((item) => (
                    <Samsung item={item} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10">
                  {onePlus.map((item) => (
                    <OnePlus item={item} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" pt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                  {realMe.map((item) => (
                    <Realme item={item} />
                  ))}
                </div>
              </TabPanel>
            </Tabs>
            <div className=" pt-8 flex justify-center items-center gap-4">
              <button
                className=" border px-2 py-1.5 font-bold rounded-md "
                disabled={currentPage === 1}
                onClick={handlePrevPage}
              >
                prev
              </button>
              <span className=" font-medium ">
                {currentPage} / {totalPage}
              </span>
              <button
                className=" border px-2 py-1.5 font-bold rounded-md "
                disabled={currentPage === totalPage}
                onClick={handleNextPage}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBrand;
