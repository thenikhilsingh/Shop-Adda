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
            <a className="hover:text-[#FC5E2E]" href="">
              About Us
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Our Services
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Affiliate Program
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold underline">Online Shop</h1>
        <ul className="text-xl">
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Watch
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Bag
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Shoes
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Dress
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold underline">Get Help</h1>
        <ul className="text-xl">
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              FAQ
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Order Status
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Returns
            </a>
          </li>
          <li>
            <a className="hover:text-[#FC5E2E]" href="">
              Payment Options
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 pb-18 items-center">
        <h1 className="text-2xl font-bold underline">Follow Us</h1>
        <ul className="flex gap-3 ">
          <li>
            <a href="https://www.linkedin.com/in/nikhil-singh-7432b827a">
              <Icon
                className="hover:scale-[1.1] active:translate-y-[5px] transition duration-200"
                path={mdiLinkedin}
                size={1.5}
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_thakurnikhilsingh_/">
              <Icon
                className="hover:scale-[1.1] active:translate-y-[5px] transition duration-200"
                path={mdiInstagram}
                size={1.5}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/thenikhilsingh">
              <Icon
                className="hover:scale-[1.1] active:translate-y-[5px] transition duration-200"
                path={mdiGithub}
                size={1.5}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
