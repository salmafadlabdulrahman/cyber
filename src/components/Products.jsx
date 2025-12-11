import { useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [activeTab, setActiveTab] = useState("New Arrival");

  return (
    <section className="mt-[5em]">
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
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Products;
