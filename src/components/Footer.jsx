import React from "react";
import Icon from "@mdi/react";
import { mdiLinkedin, mdiInstagram, mdiGithub } from "@mdi/js";
import logo from "../assets/logo-footer.png";

export const Footer = () => {
  return (
    <div className="flex justify-around items-center w-screen bg-[#FADED3] h-70">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold underline">Company</h1>
        <ul className="text-xl ">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Our Services</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Affiliate Program</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold underline">Online Shop</h1>
        <ul className="text-xl">
          <li>
            <a href="">Watch</a>
          </li>
          <li>
            <a href="">Bag</a>
          </li>
          <li>
            <a href="">Shoes</a>
          </li>
          <li>
            <a href="">Dress</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold underline">Get Help</h1>
        <ul className="text-xl">
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Order Status</a>
          </li>
          <li>
            <a href="">Returns</a>
          </li>
          <li>
            <a href="">Payment Options</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 pb-18 items-center">
        <h1 className="text-2xl font-bold underline">Follow Us</h1>
        <ul className="flex gap-3 ">
          <li>
            <a href="https://www.linkedin.com/in/nikhil-singh-7432b827a">
              <Icon path={mdiLinkedin} size={1.5} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_thakurnikhilsingh_/">
              <Icon path={mdiInstagram} size={1.5} />
            </a>
          </li>
          <li>
            <a href="https://github.com/thenikhilsingh">
              <Icon path={mdiGithub} size={1.5} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
