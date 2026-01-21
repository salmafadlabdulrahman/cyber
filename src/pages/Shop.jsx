import { Pagination, Stack } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductSkeleton from "@/components/ProductSkeleton";
import { useProducts } from "@/queries/useProducts";
import { useCategories } from "@/queries/useCategories";

const priceRangesArr = [
  { id: "0-10", label: "$0 - $10", min: 0, max: 10 },
  { id: "10-50", label: "$10 - $50", min: 10, max: 50 },
  { id: "50-100", label: "$50 - $100", min: 50, max: 100 },
  { id: "100-200", label: "$100 - $200", min: 100, max: 200 },
  { id: "200+", label: "> $200", min: 200, max: null },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState(
    () => searchParams.get("category")?.split(",") || [],
  );

  const [selectedPriceRanges, setSelectedPriceRanges] = useState(
    () => searchParams.get("priceRanges")?.split(",") || [],
  );

  const [page, setPage] = useState(() => Number(searchParams.get("page")) || 1);

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","));
    }

    if (selectedPriceRanges.length > 0) {
      params.set("priceRanges", selectedPriceRanges.join(","));
    }

    params.set("page", page.toString());

    setSearchParams(params);
  }, [selectedCategories, selectedPriceRanges, page, setSearchParams]);

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useProducts({
    categories: selectedCategories,
    priceRanges: selectedPriceRanges,
    page,
  });

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useCategories();

  if (productsLoading && categoriesLoading) {
    return "Loading";
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
                    setPage(1);
                    setSelectedCategories((prev) =>
                      checked
                        ? [...prev, category._id]
                        : prev.filter((id) => id !== category?._id),
                    );
                  }}
                />
                <Label className={"text-md font-normal "}>
                  {category?.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="my-3">
          <h5 className="font-semibold my-[1em]">Price Range</h5>
          <div className="">
            {priceRangesArr.map((range) => (
              <div className="flex items-center gap-2 mb-2" key={range?.label}>
                <Checkbox
                  id="category"
                  checked={selectedPriceRanges.includes(range?.id)}
                  onCheckedChange={(checked) => {
                    setPage(1);
                    setSelectedPriceRanges((prev) =>
                      checked
                        ? [...prev, range.id]
                        : prev.filter((id) => id !== range.id),
                    );
                  }}
                />
                <Label htmlFor="category" className={"text-md font-normal"}>
                  {range?.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        {" "}
        <div className="p-4 lg:p-0 lg:m-auto ">
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
        <div className="flex justify-center mt-[5em]">
          <Stack spacing={2}>
            <Pagination
              page={page}
              count={products?.pagination?.totalPages}
              onChange={(_, value) => setPage(value)}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default Shop;
