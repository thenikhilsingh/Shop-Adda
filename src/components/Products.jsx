import { Card } from "./Card";

export const Products = ({
  productData,
  categoryList,
  searchedData,
  userInput,
}) => {
  const database = searchedData.length === 0 ? productData : searchedData;

  if (userInput && searchedData.length === 0) {
    return (
      <div className="text-4xl text-center h-screen">
        Oops! No matches. Try searching again.
      </div>
    );
  }

  return (
    <div className="pt-5 mb-5">
      {categoryList.map((category) => {
        const productsInCategory = database.filter(
          (product) => product.productCategory === category
        );
        if (productsInCategory.length === 0) return null;

        return (
          <div
            className="border-3 sm:border-4 w-[85vw] rounded-2xl mb-10 shadow-lg"
            key={category}
          >
            <h1 className="text-md sm:text-xl md:text-3xl lg:text-4xl font-bold w-[100%] bg-[#6020BF] text-white rounded-t-xl p-2 ">
              {category}
            </h1>
            <div className="p-5 flex flex-wrap gap-6 justify-center items-center">
              {productsInCategory.map((product) => (
                <Card key={product.productId} database={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
