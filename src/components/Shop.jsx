import React, { useState, useContext } from "react";
import { Products } from "./Products";
import { DataContext } from "../App";

export const Shop = () => {
  let { categoryList, productData } = useContext(DataContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
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
        <Products productData={productData} categoryList={selectedCategory} />
      )}
    </div>
  );
};
