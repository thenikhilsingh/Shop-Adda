import React, { useState, useContext, useEffect } from "react";
import { Products } from "./Products";
import { DataContext } from "../App";
import loadingGif from "../assets/loading.gif";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

export const Shop = () => {
  const { categoryList, productData } = useContext(DataContext);

  const [animation, setAnimation] = useState(true);
  const [userInput, setUserInput] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const [searchedData, setSearchedData] = useState([]);

  function handleSearchBar(e) {
    const userInputData = e.target.value.toLowerCase();
    setUserInput(userInputData);
    console.log(userInput);

    const filterProducts = productData.filter((item) => {
      return (
        item.productTitle.toLowerCase().includes(userInputData) ||
        item.productCategory.toLowerCase().includes(userInputData) ||
        item.productDesc.toLowerCase().includes(userInputData)
      );
    });
    setSearchedData(filterProducts);
    console.log(searchedData);
  }

  return (
    <>
      {animation ? (
        <div className="sm:pt-18 h-screen">
          <img src={loadingGif} alt="Loading..." />
        </div>
      ) : (
        <div className="pt-18 sm:pt-25 pb-3 flex flex-col gap-5 w-[85vw] ">
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Search a Product by Category or Product Name"
              id="searchbar"
              name="searchbar"
              className="border-2 text-xs sm:text-sm md:text-base h-10 rounded-2xl p-1 w-[85vw] sm:w-[65vw] lg:w-[50vw] absolute"
              value={userInput}
              onChange={handleSearchBar}
            />
            <label htmlFor="searchbar">
              <Icon
                className="relative left-[77vw] sm:left-[61vw] lg:left-[47vw] text-[#FC5E2E]"
                path={mdiMagnify}
                size={1}
              />
            </label>
          </div>
          <div>
            <Products
              productData={productData}
              categoryList={categoryList}
              searchedData={searchedData}
              userInput={userInput}
            />
          </div>
        </div>
      )}
    </>
  );
};
