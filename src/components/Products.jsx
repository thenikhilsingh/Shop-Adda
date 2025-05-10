import { Card } from "./Card";

export const Products = ({ productData, categoryList, selectedCategory }) => {
  const categoriesToShow = selectedCategory ? [selectedCategory] : categoryList;

  return (
    <div className="pt-10 mb-10">
      {categoriesToShow.map((category, idx) => {
        const productsInCategory = productData.filter(
          (product) => product.productCategory === category
        );

        if (productsInCategory.length === 0) return null;

        return (
          <div className="border-4 w-[85vw] rounded-2xl mb-10 shadow-lg">
            <h1 className="text-4xl font-bold w-[100%] bg-[#6020BF] text-white rounded-t-xl p-4">
              {category}
            </h1>
            <div className="p-5 flex flex-wrap gap-6 justify-center items-center">
              {productsInCategory.map((product) => (
                <Card key={product.productId} productData={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
