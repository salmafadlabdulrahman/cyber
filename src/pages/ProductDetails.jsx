import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ProductPrivilages from "../components/ProductPrivilages";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import ProductSpec from "@/components/ProductSpec";

const fetchProduct = async ({ queryKey }) => {
  const [_key, filter] = queryKey;

  const params = {};
  params.id = filter;

  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/products/${filter}`,
    );

    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchRelatedProducts = async ({ queryKey }) => {
  try {
    const [_key, currentProductId] = queryKey;

    //fetch the current product
    const productResponse = await axios.get(
      `http://localhost:3000/api/v1/products/${currentProductId}`,
    );

    const currentProduct = productResponse.data;

    //fetch the related products that has the same brand
    const brandProducts = await axios.get(
      `http://localhost:3000/api/v1/products?brand=${currentProduct.brand}`,
    );
    console.log(brandProducts);

    const relatedProducts = brandProducts.data.data.filter(
      (product) => product._id !== currentProductId,
    );

    console.log(relatedProducts);

    return relatedProducts;
  } catch (error) {
    console.log(error);
  }
};

const calculateOriginalPrice = (discountedPrice, discountPercent) => {
  const discountDecimal = discountPercent / 100;
  const originalPrice = discountedPrice / (1 - discountDecimal);

  return originalPrice.toFixed(1);
};

const colors = {
  black: "#0E0004",
  silver: "#E6E6EA",
  blue: "#89BBFE",
  purple: "#6610F2",
  white: "#F8F1FF",
  navy: "#1B264F",
};

const ProductDetails = () => {
  const { productId } = useParams();
  const results = useQueries({
    queries: [
      {
        queryKey: ["product", productId],
        queryFn: fetchProduct,
      },
      {
        queryKey: ["relatedProducts", productId],
        queryFn: fetchRelatedProducts,
        enabled: !!productId,
      },
    ],
  });

  const [productData, relatedProducts] = results;

  const {
    data: product,
    isLoading: productLoading,
    isError: productError,
  } = productData;
  const {
    data: relatedProductsData,
    isLoading: relatedProductsLoading,
    isError: relatedProductsError,
  } = relatedProducts;

  if (productLoading || relatedProductsLoading) {
    return <h1>Loading...</h1>;
  }

  if (productError && relatedProductsError) {
    return <p>Error</p>;
  }

  return (
    <section className="mt-[2em] px-[2em]">
      <div className="md:text-center">
        <div className="lg:flex md:w-[80%] md:m-auto lg:w-auto">
          <img
            src={product?.images[0]}
            alt="a phone image"
            width={300}
            className="m-auto h-full lg:w-[350px]"
          />

          <div className="flex items-center justify-center mt-[3em] gap-[1.5em]">
            {product?.images.map((image, i) => (
              <img src={image} alt="" width={100} key={i} />
            ))}
          </div>

          <div className="lg:w-[50%]">
            <h2 className="mt-[1em] text-[2em] font-semibold md:text-center lg:text-left">
              {product?.name}
            </h2>

            <div className="flex items-center md:justify-center gap-[1em] mt-[.5em] lg:justify-start">
              <span className="text-3xl font-semibold">{product?.price}</span>
              <span className="text-[1.5em] text-mid-gray line-through">
                ${calculateOriginalPrice(product?.price, product?.discount)}
              </span>
            </div>

            <div className="flex items-center mt-[1.5em] md:justify-center lg:justify-start">
              <p>Select Color: </p>
              <div className="flex items-center gap-2 pl-[1em]">
                {product?.colors.map((color, i) => (
                  <span
                    key={i}
                    className={`w-[30px] h-[30px] rounded-full block`}
                    style={{ backgroundColor: colors[color] }}
                  ></span>
                ))}
              </div>
            </div>

            {/* <div className="mt-[2em] flex flex-wrap items-center gap-2 md:justify-center lg:justify-start">
              <span className="battery-capcity">128GB</span>
              <span className="battery-capcity">256GB</span>
              <span className="battery-capcity">512GB</span>
              <span className="battery-capcity">1TB</span>
            </div> */}

            <div className="flex flex-wrap gap-2 justify-center mt-[2em] lg:justify-start">
              {Object.entries(product?.spec).map(([key, value]) => (
                <ProductSpec key={key} name={key} value={value} />
              ))}
            </div>

            <div className="mt-[2em]">
              <div className="mt-[2em] md:w-[60%] md:m-auto md:mt-[2em] lg:m-0 lg:mt-[2em]">
                <button className="border-2 border-black product-details-btns">
                  Add to Wishlist
                </button>
                <button className="bg-dark-black text-white product-details-btns mt-[1em]">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="md:w-[60%] md:m-auto lg:m-0">
              <ProductPrivilages />
            </div>
          </div>
        </div>

        <div className="mt-[4em] md:text-left lg:w-[80%] lg:m-auto lg:mt-[4em]">
          <h4 className="text-3xl font-medium">Details</h4>
          <p className="text-[#9D9D9D] mt-[1em]">{product?.description}</p>
        </div>

        <div className="my-[3em] md:text-left lg:w-[80%] lg:m-auto lg:my-[3em]">
          <h4 className="text-2xl font-semibold">Related Products</h4>
          <div className="flex items-center gap-4 flex-wrap mt-[1em]">
            {relatedProductsData?.map((product, i) => (
              <ProductCard
                key={i}
                name={product.name}
                price={product.price}
                img={product.images[0]}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
