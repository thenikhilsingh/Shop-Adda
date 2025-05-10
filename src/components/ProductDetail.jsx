import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeftBold, mdiArrowRightBold } from "@mdi/js";
import { DataContext } from "../App";
import loadingGif from "../assets/loading.gif";

export const ProductDetail = () => {
  const { productData, loading, setAddToCartProduct, setSelectedCategory } =
    useContext(DataContext);
  const { productid } = useParams();
  const [animation, setAnimation] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);

  function animationfunc() {
    let timer = setInterval(() => {
      setSelectedCategory(null);
      setAnimation(true);
    });

    setTimeout(() => {
      setAnimation(false);
      clearInterval(timer);
    }, 2000);
  }
  useEffect(() => {
    animationfunc();
  }, []);

  const [product, setProduct] = useState(
    !loading && productData.find((item) => item.productId === Number(productid))
  );
  const [quantity, setQuantity] = useState(1);

  const [btnFlag, setBtnFlag] = useState(false);

  let USD = product.productPrice;
  function currencyConverter(USD) {
    let exchangeRate = 83.5;
    let inr = USD * exchangeRate;
    let inrRounded = Math.floor(inr);
    return inrRounded;
  }

  function handleLeftArrow() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(product.productImg.length - 1);
    }
  }

  function handleRightArrow() {
    if (imageIndex < product.productImg.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  function handleAddToCartClick() {
    let newObj = { ...product };
    newObj.quantity = quantity;

    setAddToCartProduct((prev) => [...prev, newObj]);
    setBtnFlag(true);
  }

  let discount = product.productDiscountPercentage;
  let discountedPrice = currencyConverter(USD);
  function OriginalPrice(discount, discountedPrice) {
    let original = discountedPrice / (1 - discount / 100);
    let priceRounded = Math.floor(original);
    return priceRounded;
  }

  return (
    <>
      {animation ? (
        <div className="p-25">
          <img src={loadingGif} alt="" />
        </div>
      ) : (
        <div className="p-25">
          <div className="flex justify-around items-center w-[85vw]  ">
            <div className="flex justify-center items-center">
              {product.productImg.length > 1 && (
                <div>
                  <Icon
                    className="hover:scale-[1.1] active:translate-y-[5px] transition duration-200 cursor-pointer"
                    path={mdiArrowLeftBold}
                    size={2}
                    onClick={handleLeftArrow}
                  />
                </div>
              )}
              <div>
                <img
                  className="h-[75vh]"
                  src={
                    product.productImg.length > 1
                      ? product.productImg[imageIndex]
                      : product.productImg[0]
                  }
                  alt="productimg"
                />
              </div>
              {product.productImg.length > 1 && (
                <div>
                  <Icon
                    className="hover:scale-[1.1] active:translate-y-[5px] transition duration-200 cursor-pointer"
                    path={mdiArrowRightBold}
                    size={2}
                    onClick={handleRightArrow}
                  />
                </div>
              )}
            </div>

            <div className="w-[40vw] flex flex-col gap-4">
              <div className="text-[#FC5E2E] font-bold text-4xl">
                {product.productTitle}
              </div>
              <div className="flex gap-2 text-3xl font-bold">
                <div>₹{currencyConverter(USD)}</div>
                <div className="text-[#6C6B6A]">
                  <del>₹{OriginalPrice(discount, discountedPrice)}</del>
                </div>
              </div>
              <hr className="border-1 border-[#6C6B6A]" />
              <div className="text-2xl ">{product.productDesc}</div>
              <div className="text-2xl">
                <div>Dimensions</div>
                <div className="text-[#454341] ">
                  width: {product.productDimensions.width}, height:
                  {product.productDimensions.height}, depth:
                  {product.productDimensions.depth}
                </div>
              </div>
              <div className="text-2xl">
                <div className="flex gap-2">
                  <div>Rating: </div>
                  <div className="text-[#454341] ">{product.productRating}</div>
                </div>
                <ul className="text-[#454341]  list-disc list-inside ">
                  <li>{product.productShippingInformation}</li>
                  <li>{product.productWarrantyInformation}</li>
                </ul>
              </div>
              <div className="flex text-2xl items-center">
                <div>Quantity:</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setQuantity(quantity - 1);
                    }}
                    className="bg-[#FC5E2E] size-12 rounded-xl hover:scale-[1.1] active:translate-y-[5px] transition duration-200 cursor-pointer"
                  >
                    -
                  </button>
                  <input
                    className="border-[#454341] border-2 rounded-xl w-20 text-center"
                    type="text"
                    value={quantity}
                    readOnly
                  />
                  <button
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                    className="bg-[#FC5E2E] size-12 rounded-xl hover:scale-[1.1] active:translate-y-[5px] transition duration-200 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                {btnFlag === false ? (
                  <button
                    onClick={handleAddToCartClick}
                    className="bg-[#FC5E2E] p-4 text-2xl rounded-xl hover:scale-[1.1] active:translate-y-[5px] transition duration-200 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setAddToCartProduct((prev) => {
                        return prev.filter(
                          (item) => item.productId !== product.productId
                        );
                      });
                      setBtnFlag(false);
                    }}
                    className="bg-[#FC5E2E] p-4 text-2xl rounded-xl hover:scale-[1.1] active:translate-y-[5px] transition duration-200 cursor-pointer"
                  >
                    Remove from Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
