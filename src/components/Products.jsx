import { useState } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "@/queries/useProducts";
import ProductSkeleton from "./ProductSkeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [activeTab, setActiveTab] = useState("New Arrival");
  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts();

  if (productsError) {
    console.log(productsError);
    return <h2>Error</h2>;
  }

  return (
    <section className="mt-[8em]">
      <div className="flex items-center gap-[2em] font-medium overflow-x-auto">
        <p
          className={`cursor-pointer
            ${
              activeTab === "New Arrival"
                ? "border-b-2 border-black"
                : "text-mid-gray"
            }`}
          onClick={() => setActiveTab("New Arrival")}
        >
          New Arrival
        </p>

        <p
          className={`cursor-pointer
            ${
              activeTab === "Best Seller"
                ? "border-b-2 border-black"
                : "text-mid-gray"
            }
          `}
          onClick={() => setActiveTab("Best Seller")}
        >
          Best Seller
        </p>
        <p
          className={`cursor-pointer
            ${
              activeTab === "Featured Products"
                ? "border-b-2 border-black"
                : "text-mid-gray"
            }
          `}
          onClick={() => setActiveTab("Featured Products")}
        >
          Featured Products
        </p>
      </div>

      <div className="mt-[2em] flex items justify-center flex-wrap gap-4">
        <section className="flex items-center flex-wrap gap-5 mt-[2em] min-h-[500px]">
          {productsLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          {products?.data?.length === 0 && !productsLoading ? (
            <div className="w-full flex items-center justify-center text-gray-500">
              <p>No Products were found!</p>
            </div>
          ) : (
            products?.data?.map((product, i) => (
              <Link key={i} to={`/shop/${product._id}`}>
                <div>
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    img={product.images[0]}
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
