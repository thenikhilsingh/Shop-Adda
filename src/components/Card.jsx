import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ productData }) => {
  const navigate = useNavigate();
  function handleCardClick() {
    navigate(`/shop/product/${productData.productId}`);
  }

  return (
    <div
      onClick={handleCardClick}
      className="w-50 h-65 rounded-2xl flex flex-col justify-around items-center bg-[#FF8552] p-5 text-center font-bold shadow-[0px_9px_18px_-6px_#000000] hover:bg-[#FC5E2E] hover:scale-[1.1] active:translate-y-[5px] transition duration-200 cursor-pointer"
    >
      <div>
        <img src={productData.productImg} alt="Product Image" />
      </div>
      <div>{productData.productTitle}</div>
    </div>
  );
};
