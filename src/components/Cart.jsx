import React, { useContext } from "react";
import Icon from "@mdi/react";
import { mdiCreditCard } from "@mdi/js";
import { DataContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

export const Cart = () => {
  const { addToCartProduct, setAddToCartProduct } = useContext(DataContext);

  let navigate = useNavigate();

  const handleRemove = (productId) => {
    const updatedCart = addToCartProduct.filter(
      (item) => item.productId !== productId
    );
    setAddToCartProduct(updatedCart);
  };

  function handleCheckout() {
    if (addToCartProduct.length > 0) {
      const intervalId = setInterval(() => {
        navigate("/message");
      }, 1000);

      setTimeout(() => {
        clearInterval(intervalId);
        setAddToCartProduct([]);
        navigate("/cart");
      }, 4000);
    } else {
      alert(
        "Your cart is empty. Please add items before proceeding to checkout."
      );
    }
  }

  let subtotal = 0;
  addToCartProduct.forEach((item) => {
    subtotal += Math.floor(item.productPrice * 83.5 * item.quantity);
  });
  let shipping = 99;
  let platformfee = 49;
  let discount = 0;
  let total = subtotal + shipping + platformfee + discount;

  return (
    <div className="pt-32 pb-25 flex justify-around w-[85vw]">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Cart</h1>

        {addToCartProduct.length === 0 ? (
          <p className="text-2xl">
            Your cart is empty,{" "}
            <Link className="underline text-[#FC5E2E]" to="/shop">
              Shop Now!
            </Link>{" "}
          </p>
        ) : (
          addToCartProduct.map((product, index) => (
            <div
              key={index}
              className="flex justify-start items-center border-2 rounded-2xl  gap-10 p-2 border-[#FC5E2E] w-[40vw] "
            >
              <div>
                <img
                  src={product.productImg[0]}
                  alt={product.productTitle}
                  className="size-40"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold">{product.productTitle}</div>
                <div className="text-2xl font-bold">
                  ₹{Math.floor(product.productPrice * 83.5)}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      let newObj = { ...product };
                      if (newObj.quantity != 1) {
                        newObj.quantity -= 1;
                      }
                      let arr = [...addToCartProduct];
                      arr[index] = newObj;
                      setAddToCartProduct(arr);
                    }}
                    className="bg-[#FC5E2E] text-white size-8 rounded-xl border-2 hover:shadow-[0px_0px_13px_0px_#FC5E2E] hover:bg-white hover:text-[#FC5E2E] hover:border-[#FC5E2E] hover:border-2 active:translate-y-[5px] transition duration-200 cursor-pointer"
                  >
                    -
                  </button>
                  {console.log(product)}

                  <input
                    type="text"
                    value={product.quantity}
                    className="border-2 size-8 text-center"
                    readOnly
                  />
                  <button
                    onClick={() => {
                      let newObj = { ...product };
                      newObj.quantity += 1;
                      let arr = [...addToCartProduct];
                      arr[index] = newObj;
                      setAddToCartProduct(arr);
                    }}
                    className="bg-[#FC5E2E] text-white size-8 rounded-xl border-2 hover:shadow-[0px_0px_13px_0px_#FC5E2E] hover:bg-white hover:text-[#FC5E2E] hover:border-[#FC5E2E] hover:border-2 active:translate-y-[5px] transition duration-200 cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(product.productId)}
                  className="bg-[#FC5E2E] w-30 h-12 rounded-xl font-bold text-white text-xl border-2 hover:shadow-[0px_0px_13px_0px_#FC5E2E] hover:bg-white hover:text-[#FC5E2E] hover:border-[#FC5E2E] hover:border-2 active:translate-y-[5px] transition duration-200 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="w-[30vw]">
        <h1 className="text-4xl font-bold">Bill</h1>
        <div className="text-2xl">
          <div className="flex justify-between">
            <div>SubTotal</div>
            <div>₹{subtotal}</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping</div>
            <div>₹{addToCartProduct.length === 0 ? 0 : shipping}</div>
          </div>
          <div className="flex justify-between">
            <div>Platform Fee</div>
            <div>₹{addToCartProduct.length === 0 ? 0 : platformfee}</div>
          </div>
          <div className="flex justify-between">
            <div>Discount</div>
            <div>₹{discount}</div>
          </div>
          <div className="text-3xl font-bold flex justify-between">
            <h1>Total</h1>
            <div>₹{addToCartProduct.length === 0 ? 0 : total}</div>
          </div>

          <div>Discount Coupon</div>
          <div className="flex justify-between items-center gap-2 mt-2 mb-4">
            <input
              className="border-2 rounded-2xl border-[#FC5E2E] w-full px-2 py-1"
              type="text"
              placeholder="Enter coupon code"
            />
            <button className="bg-[#FC5E2E] h-12 px-4 rounded-xl font-bold text-white border-2 hover:shadow-[0px_0px_13px_0px_#FC5E2E] hover:bg-white hover:text-[#FC5E2E] hover:border-[#FC5E2E] hover:border-2 active:translate-y-[5px] transition duration-200 cursor-pointer">
              Apply
            </button>
          </div>

          <div className="text-2xl font-bold">Payment Methods</div>
          <div className="flex gap-5 items-center mb-4">
            <Icon path={mdiCreditCard} size={2} />
            <div>All major credit cards accepted</div>
          </div>

          <button
            onClick={handleCheckout}
            className="bg-[#FC5E2E] w-full rounded-xl h-15 text-3xl text-white font-bold border-2 hover:shadow-[0px_0px_13px_0px_#FC5E2E] hover:bg-white hover:text-[#FC5E2E] hover:border-[#FC5E2E] hover:border-2 active:translate-y-[5px] transition duration-200 cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
