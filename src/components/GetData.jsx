import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/",
});

const GetData = () => {
  return api.get(
    "products/?limit=0&select=id,category,images,title,price,discountPercentage,description,dimensions,rating,shippingInformation,warrantyInformation"
  );
};
export default GetData;
