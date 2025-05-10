import logo from "../assets/logo-footer.png";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

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
            <Link className="hover:text-[#FC5E2E]" href="">
              About Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              Our Services
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              Affiliate Program
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold underline">Online Shop</h1>
        <ul className="text-xl">
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              Watch
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              Bag
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              Shoes
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              Dress
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold underline">Get Help</h1>
        <ul className="text-xl">
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              Order Status
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              Returns
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#FC5E2E]" href="">
              {" "}
              Payment Options
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 pb-20 items-center">
        <h1 className="text-2xl font-bold underline">Follow Us</h1>
        <ul className="flex gap-3 ">
          <li>
            <a href="https://www.linkedin.com/in/nikhil-singh-7432b827a">
              <img
                className="size-8 hover:scale-[1.1] active:translate-y-[5px] transition duration-200"
                src={linkedin}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_thakurnikhilsingh_/">
              <img
                className="size-8 hover:scale-[1.1] active:translate-y-[5px] transition duration-200"
                src={instagram}
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/thenikhilsingh">
              <img
                className="size-8 hover:scale-[1.1] active:translate-y-[5px] transition duration-200"
                src={github}
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
