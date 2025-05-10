import React from "react";
import homeImg from "../assets/homeImg.jpg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/shop");
  }
  return (
    <div className="flex justify-between items-center w-[85vw] pt-16 ">
      <div className="size-[550px] flex flex-col justify-center items-start gap-4">
        <p className="text-6xl">
          Style meets savings at ShopAdda. Discover what you love at great
          prices.
        </p>
        <button
          onClick={handleClick}
          className="text-4xl bg-[#FC5E2E] text-white rounded-xl p-3 cursor-pointer border-2 hover:shadow-[0px_0px_13px_0px_#FC5E2E] hover:bg-white hover:text-[#FC5E2E] hover:border-[#FC5E2E] hover:border-2 active:translate-y-[5px] transition duration-200 "
        >
          Shop Now
        </button>
      </div>
      <div>
        <img className="h-[450px]" src={homeImg} alt="" />
      </div>
    </div>
  );
};
