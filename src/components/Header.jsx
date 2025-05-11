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
    <nav className="flex justify-around items-center fixed text-2xl w-screen py-4 bg-white shadow-md z-10 ">
      <div>
        <NavLink to="/">
          <img className="h-12" src={logo} alt="Logo" />
        </NavLink>
      </div>

      <div className="flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex justify-center items-center cursor-pointer gap-2 px-4 py-2 rounded-md transition-colors duration-300 ${
              isActive ? "bg-[#FC5E2E] text-white" : "text-black"
            }`
          }
        >
          <Icon path={mdiHome} size={1.5} />
          <div>Home</div>
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex justify-center items-center cursor-pointer gap-2 px-4 py-2 rounded-md transition-colors duration-300 ${
              isActive ? "bg-[#FC5E2E] text-white" : "text-black"
            }`
          }
        >
          <Icon path={mdiShopping} size={1.5} />
          <div>Shop</div>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex justify-center items-center cursor-pointer gap-2 px-4 py-2 rounded-md transition-colors duration-300 ${
              isActive ? "bg-[#FC5E2E] text-white" : "text-black"
            }`
          }
        >
          <Icon path={mdiAccount} size={1.5} />
          <div>About</div>
        </NavLink>
      </div>

      <NavLink
        to="/cart"
        className="  cursor-pointer px-4 py-2 rounded-md transition-colors duration-300 "
      >
        {addToCartProduct.length === 0 ? (
          <Icon path={mdiCartHeart} size={1.5} />
        ) : (
          <div className="relative">
            <div className=" absolute bottom-5 left-2.5 font-bold text-[#FC5E2E]">
              {addToCartProduct.length}
            </div>
            <div>
              <img className="size-8 " src={cartIcon} alt="" />
            </div>
          </div>
        )}
      </NavLink>
    </nav>
  );
};
