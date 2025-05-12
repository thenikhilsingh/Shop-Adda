import React, { useContext } from "react";
import logo from "../assets/logo-header.png";
import Icon from "@mdi/react";
import { mdiHome, mdiShopping, mdiAccount, mdiCartHeart } from "@mdi/js";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";
import cartIcon from "../assets/cartIcon.png";

export const Header = () => {
  const { addToCartProduct } = useContext(DataContext);

  return (
    <nav className="flex justify-around items-center fixed text-xs w-screen  py-2 sm:py-4 bg-white shadow-md z-10 sm:text-sm md:text-base lg:text-lg ">
      <div>
        <NavLink to="/">
          <img className="h-3 sm:h-5 md:h-7 lg:h-10" src={logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="flex gap-2 md:gap-4 lg:gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex justify-center items-center cursor-pointer gap-2 px-2  rounded-md transition-colors duration-300 ${
              isActive ? "bg-[#FC5E2E] text-white" : "text-black"
            }`
          }
        >
          <Icon
            className="size-3 sm:size-5 md:size-6 lg:size-7"
            path={mdiHome}
          />
          <div>Home</div>
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex justify-center items-center cursor-pointer gap-2 px-2  rounded-md transition-colors duration-300 ${
              isActive ? "bg-[#FC5E2E] text-white" : "text-black"
            }`
          }
        >
          <Icon
            className="size-3 sm:size-5 md:size-6 lg:size-7"
            path={mdiShopping}
          />
          <div>Shop</div>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex justify-center items-center cursor-pointer gap-2 px-2 py-2 rounded-md transition-colors duration-300 ${
              isActive ? "bg-[#FC5E2E] text-white" : "text-black"
            }`
          }
        >
          <Icon
            className="size-3 sm:size-5 md:size-6 lg:size-7"
            path={mdiAccount}
          />
          <div>About</div>
        </NavLink>
      </div>

      <NavLink
        to="/cart"
        className="  cursor-pointer px-4 py-2 rounded-md transition-colors duration-300 "
      >
        {addToCartProduct.length === 0 ? (
          <Icon
            className="size-3 sm:size-5 md:size-6 lg:size-7"
            path={mdiCartHeart}
          />
        ) : (
          <div className="relative">
            <div className=" text-xs lg:text-lg absolute bottom-2 left-1 sm:bottom-4 sm:left-2 md:bottom-5 md:left-2.5  font-bold text-[#FC5E2E]">
              {addToCartProduct.length}
            </div>
            <div>
              <img
                className="size-3 sm:size-5 md:size-6 lg:size-7"
                src={cartIcon}
                alt=""
              />
            </div>
          </div>
        )}
      </NavLink>
    </nav>
  );
};
