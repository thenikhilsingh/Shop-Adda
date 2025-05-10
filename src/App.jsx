import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { createContext, useEffect, useState } from "react";
import GetData from "./components/GetData";

const DataContext = createContext();

function App() {
  const [categoryList, setCategoryList] = useState([]);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addToCartProduct, setAddToCartProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  async function getProducts() {
    try {
      const response = await GetData();

      const allCategories = [
        ...new Set(response.data.products.map((product) => product.category)),
      ];

      const allProducts = response.data.products.map((product) => ({
        productId: product.id,
        productCategory: product.category,
        productImg: product.images,
        productTitle: product.title,
        productPrice: product.price,
        productDiscountPercentage: product.discountPercentage,
        productDesc: product.description,
        productDimensions: product.dimensions,
        productRating: product.rating,
        productShippingInformation: product.shippingInformation,
        productWarrantyInformation: product.warrantyInformation,
      }));
      console.log(response);
      setProductData(allProducts);
      setCategoryList(allCategories);
    } catch (error) {
      console.log("Error message:", error.message);
      console.log("Error status:", error.response.status);
      console.log("Error data:", error.response.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col items-center overflow-x-hidden select-none">
      <DataContext.Provider
        value={{
          productData,
          categoryList,
          loading,
          addToCartProduct,
          setAddToCartProduct,
          selectedCategory,
          setSelectedCategory,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
export { DataContext };
