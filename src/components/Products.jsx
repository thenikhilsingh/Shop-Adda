import { useContext } from "react";
import { Card } from "./Card";
import { DataContext } from "../App";

export const Products = ({ productData, categoryList }) => {
  useContext(DataContext);
  return (
    <>
      {
        <div className="pt-30 mb-10 ">
          <div className="border-4 w-[85vw]   rounded-2xl  ">
            <h1 className="text-4xl font-bold  w-[100%] bg-[#6020BF] rounded-t-xl p-2">
              {categoryList}
            </h1>
            <div className="p-5 flex flex-wrap gap-6 justify-center items-center">
              {productData.map((product, index) => {
                return (
                  categoryList === product.productCategory && (
                    <Card key={index} productData={product} />
                  )
                );
              })}
            </div>
          </div>
        </div>
      }
    </>
  );
};
