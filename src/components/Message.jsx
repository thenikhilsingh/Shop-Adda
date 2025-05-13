import orderPlaced from "../assets/orderPlaced.gif";

export const Message = () => {
  return (
    <div className="h-screen pt-25 flex flex-col  items-center">
      <div className=" text-center animate-bounce ">
        <div className="text-4xl">
          Thank you for shopping with Shop
          <span className="text-[#FC5E2E]">अड्डा</span>!
        </div>
        <div className="text-3xl">Your order has been placed successfully.</div>
      </div>
      <div>
        <img className="sm:h-70" src={orderPlaced} alt="" />
      </div>
    </div>
  );
};
