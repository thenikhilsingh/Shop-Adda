import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/",
});

const GetImagesData = (category) => {
  return api.get(`products/category/${category}`);
};
export default GetImagesData;
