import React, { useState, useContext, useEffect } from "react";
import { Products } from "./Products";
import { DataContext } from "../App";
import loadingGif from "../assets/loading.gif";

export const Shop = () => {
  const { categoryList, productData, selectedCategory, setSelectedCategory } =
    useContext(DataContext);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {animation ? (
        <div className="pt-30 pb-37">
          <img src={loadingGif} alt="Loading..." />
        </div>
      ) : (
        <div className="pt-30 pb-37">
          <label htmlFor="category" className="text-4xl">
            Choose a Category:
          </label>
          <select
            className="h-12 border-2 text-2xl border-[#FF8552] rounded-xl"
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">-- Select a Category --</option>
            {categoryList.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <Products
            productData={productData}
            categoryList={categoryList}
            selectedCategory={selectedCategory}
          />
        </div>
      )}
    </>
  );
};
