import ourStoryImg from "../assets/ourStoryImg.jpg";
import ourCollectionImg from "../assets/ourCollectionImg.jpg";
import ourPromiseImg from "../assets/ourPromiseImg.jpg";
import imageLoading from "../assets/imageLoading.gif";
import { useState, useEffect } from "react";

export const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="flex flex-col justify-around items-center h-[230vh] w-[85vw] pt-25">
      <div>
        <h1 className="text-4xl font-bold">Quality Delivered, Every Time.</h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[85vw] ">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="text-2xl w-[45vw]">
            ShopAdda started with a vision to make online shopping simple,
            trustworthy, and accessible for everyone. From everyday essentials
            to unique finds, we bring quality products to your doorstep with
            care and commitment. At ShopAdda, your satisfaction is our priority.
          </p>
        </div>
        <div>
          {!isImageLoaded && (
            <img
              loading="lazy"
              className="absolute size-25"
              src={imageLoading}
              alt=""
            />
          )}
          <img
            loading="lazy"
            className={`h-90 w-90 ${
              !isImageLoaded ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
            src={ourStoryImg}
            alt=""
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-55">
        <div>
          {!isImageLoaded && (
            <img
              loading="lazy"
              className="absolute size-25"
              src={imageLoading}
              alt=""
            />
          )}
          <img
            loading="lazy"
            className={`h-90 w-90 ${
              !isImageLoaded ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
            src={ourCollectionImg}
            alt=""
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Our Collection</h1>
          <p className="text-2xl w-[45vw]">
            At ShopAdda, we offer a carefully curated collection of products to
            meet your everyday needs and lifestyle. From trendy fashion and
            electronics to home essentials and more, our range is designed to
            bring variety, quality, and value—all in one place.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[85vw] ">
          <h1 className="text-3xl font-bold">Our Promise</h1>
          <p className="text-2xl w-[45vw]">
            At ShopAdda, we promise quality products, fair prices, and a smooth
            shopping experience. Your satisfaction is at the heart of everything
            we do—from secure payments to fast delivery and responsive support.
            We’re here to make every order a trusted one.
          </p>
        </div>
        <div>
          {!isImageLoaded && (
            <img
              loading="lazy"
              className="absolute size-25"
              src={imageLoading}
              alt=""
            />
          )}
          <img
            loading="lazy"
            className={`h-90 w-90 ${
              !isImageLoaded ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
            src={ourPromiseImg}
            alt=""
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};
