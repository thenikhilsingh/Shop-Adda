import React from "react";
import homeImg from "../assets/homeImg.jpg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/shop");
  }
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-between justify-center items-center w-[85vw] pt-10 md:pt-22 lg:pt-21 sm:pb-12  lg:pb-0 h-screen ">
      <div className="w-[250px] sm:w-[280px] md:w-[320px] lg:size-[600px] flex flex-col justify-center  items-center sm:items-start gap-4">
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          Style meets savings at ShopAdda. Discover what you love at great
          prices.
        </p>
        <button
          onClick={handleClick}
          className="text-md sm:text-lg md:text-xl lg:text-4xl bg-[#FC5E2E] text-white rounded-xl p-3 cursor-pointer border-2 hover:shadow-[0px_0px_13px_0px_#FC5E2E] hover:bg-white hover:text-[#FC5E2E] hover:border-[#FC5E2E] hover:border-2 active:translate-y-[5px] transition duration-200 "
        >
          Shop Now
        </button>
      </div>
      <div>
        <img
          className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
          src={homeImg}
          alt=""
        />
      </div>
    </div>
  );
};
