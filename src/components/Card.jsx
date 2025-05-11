import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageLoading from "../assets/imageLoading.gif";

export const Card = ({ database }) => {
  const navigate = useNavigate();
  function handleCardClick() {
    navigate(`/shop/product/${database.productId}`);
  }

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      onClick={handleCardClick}
      className="w-50 h-65 rounded-2xl flex flex-col justify-around items-center bg-[#FF8552] p-5 text-center font-bold shadow-[0px_9px_18px_-6px_#000000] hover:bg-[#FC5E2E] hover:scale-[1.1] active:translate-y-[5px] transition duration-200 cursor-pointer"
    >
      <div className="flex justify-center items-center">
        {!isImageLoaded && (
          <img className="absolute  size-15" src={imageLoading} alt="" />
        )}
        <img
          loading="lazy"
          className={`${
            !isImageLoaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
          src={database.productImg[0]}
          alt="Product Image"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      <div>{database.productTitle}</div>
    </div>
  );
};
