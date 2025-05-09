import React, { useState, useContext, useEffect } from "react";
import { Products } from "./Products";
import { DataContext } from "../App";
import loadingGif from "../assets/loading.gif";

export const Shop = () => {
  let { categoryList, productData, selectedCategory, setSelectedCategory } =
    useContext(DataContext);
  const [animation, setAnimation] = useState(true);

  function animationfunc() {
    let timer = setInterval(() => {
      setSelectedCategory(null);
      setAnimation(true);
    });

    setTimeout(() => {
      setAnimation(false);
      clearInterval(timer);
    }, 4000);
  }
  useEffect(() => {
    animationfunc();
  }, []);

  return (
    <>
      {animation ? (
        <div className="pt-30 pb-37">
          <img src={loadingGif} alt="" />
        </div>
      ) : (
        <div className="pt-30 pb-37 ">
          <label htmlFor="category" className="text-4xl ">
            Choose a Category:{" "}
          </label>
          <select
            className="h-12  border-2 text-2xl border-[#FF8552] rounded-xl"
            id="category"
            name="category "
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">-- Select a category --</option>
            {categoryList.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {selectedCategory && (
            <Products
              productData={productData}
              categoryList={selectedCategory}
            />
          )}
        </div>
      )}
    </>
  );
};
