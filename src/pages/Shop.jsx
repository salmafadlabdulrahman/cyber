import { Pagination, Stack } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import qs from "qs";

const fetchProducts = async ({ queryKey }) => {
  const [_key, { categories, priceRanges }] = queryKey;

  const params = {};

  if (categories.length > 0) {
    params.category = categories.join(",");
  }

  if (priceRanges.length > 0) {
    params.priceRanges = priceRanges;
  }

  console.log("Params being sent:", params);

  try {
    const response = await axios.get(
    "http://localhost:3000/api/v1/products",
    {
      params,
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    }
  );
    console.log("Request URL:", response.config.url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/v1/categories");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const priceRangesArr = [
  { id: "0-10", label: "$0 - $10", min: 0, max: 10 },
  { id: "10-50", label: "$10 - $50", min: 10, max: 50 },
  { id: "50-100", label: "$50 - $100", min: 50, max: 100 },
  { id: "300-500", label: "$100 - $200", min: 100, max: 200 },
  { id: "200+", label: "> $200", min: 200, max: null },
];

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const results = useQueries({
    queries: [
      {
        queryKey: [
          "productsData",
          { categories: selectedCategories, priceRanges: selectedPriceRanges },
        ],
        queryFn: fetchProducts,
        keepPreviousData: true,
      },
      { queryKey: ["categoriesData"], queryFn: fetchCategories },
    ],
  });

  const [productsResults, categoriesResults] = results;

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = productsResults;
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = categoriesResults;

  if (productsLoading && categoriesLoading) {
    return <p>Loading...</p>;
  }

  if (productsError || categoriesError) {
    console.log(productsError.message || categoriesError.message);
    return <p>Error: </p>;
  }

  return (
    <section className="p-4 md:flex lg:gap-[5em] lg:mt-[2em] ">
      <div className="px-[2em] w-[300px]">
        <h3 className="mb-[1em]">
          Showing{" "}
          <span className="font-semibold">{products?.data?.length}</span> items
        </h3>

        <div className="py-3 border-y-2 border-grayish-white w-full">
          <h5 className="font-semibold my-[1em]">Category</h5>
          <div className="">
            {categories?.map((category, i) => (
              <div className="flex items-center gap-2 mb-2" key={i}>
                <Checkbox
                  checked={selectedCategories.includes(category._id)}
                  onCheckedChange={(checked) => {
                    setSelectedCategories((prev) =>
                      checked
                        ? [...prev, category._id]
                        : prev.filter((id) => id !== category._id)
                    );
                  }}
                />
                <Label className={"text-md font-normal "}>
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="my-3">
          <h5 className="font-semibold my-[1em]">Price Range</h5>
          <div className="">
            {priceRangesArr.map((range) => (
              <div className="flex items-center gap-2 mb-2" key={range.label}>
                <Checkbox
                  id="category"
                  checked={selectedPriceRanges.includes(range.id)}
                  onCheckedChange={(checked) => {
                    setSelectedPriceRanges((prev) =>
                      checked
                        ? [...prev, range.id]
                        : prev.filter((id) => id !== range.id)
                    );
                  }}
                />
                <Label htmlFor="category" className={"text-md font-normal"}>
                  {range.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        {" "}
        <div className="p-4 lg:p-0 lg:m-auto ">
          <section className="flex items-center justify-center flex-wrap gap-5 mt-[2em] min-h-[500px]">
            {products?.data?.length === 0 && !productsLoading ? (
              <div className="w-full flex items-center justify-center text-gray-500">
                <p>No Products were found!</p>
              </div>
            ) : (
              products?.data?.map((product, i) => (
                <div key={i}>
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    img={product.images[0]}
                  />
                </div>
              ))
            )}
          </section>
        </div>
        <div className="flex justify-center mt-[5em]">
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default Shop;
