import { useState } from "react";
import ProductCard from "./ProductCard";
import {
  useBestSellersProducts,
  useFeaturedProducts,
  useNewProducts,
} from "@/queries/useProducts";
import ProductSkeleton from "./ProductSkeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeTab, setActiveTab] = useState("New Arrival");
  console.log(activeTab);

  const { data: newProducts, isLoading: newProductsLoading } = useNewProducts();

  const { data: bestSellers, isLoading: bestSellersLoading } =
    useBestSellersProducts();

  const { data: featuredProducts, isLoading: featuredLoading } =
    useFeaturedProducts();

  const getActiveData = () => {
    switch (activeTab) {
      case "New Arrival":
        return { data: newProducts, isLoading: newProductsLoading };

      case "Best Sellers":
        return { data: bestSellers, isLoading: bestSellersLoading };

      case "Featured Products":
        return { data: featuredProducts, isLoading: featuredLoading };

      default:
        return { data: newProducts, isLoading: newProductsLoading };
    }
  };

  const { data: activeProducts, isLoading: activeLoading } = getActiveData();

  if (newProductsLoading && bestSellersLoading && featuredLoading) {
    return (
      <div className="mt-[8em]">
        <div className="flex gap-4 mb-8">
          {["New Arrival", "Best Sellers", "Featured Products"].map((tab) => (
            <div
              key={tab}
              className="h-10 w-32 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="mt-[8em]">
      <div className="flex items-center gap-[2em] font-medium overflow-x-auto">
        {["New Arrival", "Best Sellers", "Featured Products"].map((tab) => (
          <button
            key={tab}
            className={`cursor-pointer whitespace-nowrap pb-2 transition-colors ${
              activeTab === tab
                ? "border-b-2 border-black font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-[2em] flex items justify-center flex-wrap gap-4">
        <section className="flex items-center flex-wrap gap-5 mt-[2em] min-h-[500px]">
          {activeLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          {activeProducts?.length === 0 && !activeLoading ? (
            <div className="w-full flex items-center justify-center text-gray-500">
              <p>No Products were found!</p>
            </div>
          ) : (
            activeProducts?.map((product, i) => (
              <Link key={i} to={`/shop/${product._id}`}>
                <div>
                  <ProductCard
                    {...product}
                    isNew={product?.new}
                    img={product?.images[0]}
                  />
                </div>
              </Link>
            ))
          )}
        </section>
      </div>
    </section>
  );
};

export default Products;
