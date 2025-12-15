import product1Img from "/assets/Iphone-pro.png";
import product2Img from "/assets/headphones-product.png";
import product3Img from "/assets/apple-watch-product.png";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  return (
    <section className="w-[90%] m-auto">
      <h3 className="text-2xl font-semibold">Shopping Cart</h3>

      <div className="lg:flex lg:my-[2em]">
        <div className="mt-[3em] lg:mt-[2em] lg:w-[50%]">
          <div className="md:flex text-center items-center md:text-left justify-center md:justify-start flex-wrap gap-[2em] my-[3em] lg:mt-0">
            <img
              src={product1Img}
              alt="a phone image"
              className="m-auto md:m-0 "
            />
            <div className="mt-[2em] w-[70%]">
              <div>
                <p className="font-medium">
                  Apple iPhone 14 Pro Max 128Gb Deep Purple
                </p>
                <span className="block mt-[.5em]">#25139526913984</span>
              </div>

              <div className="md:flex items-center justify-between flex-wrap gap-2 mt-[1em]">
                <div className="flex items-center justify-center md:justify-start gap-5">
                  <span className="cursor-pointer">
                    <RemoveIcon />
                  </span>
                  <span className="border border-[#D9D9D9] px-4 text-center py-[.2em] rounded-sm">
                    1
                  </span>
                  <span>
                    <AddIcon />
                  </span>
                </div>

                <div className="mt-[2em] flex items-center justify-center gap-3 md:mt-0">
                  <span className="font-semibold text-[1.1em]">$1399</span>
                  <span className="">
                    <ClearIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex text-center items-center md:text-left justify-center md:justify-start flex-wrap gap-[2em] my-[3em]">
            <img
              src={product2Img}
              alt="a phone image"
              className="m-auto md:m-0 "
            />
            <div className="mt-[2em] w-[70%]">
              <div>
                <p className="font-medium">AirPods Max Silver</p>
                <span className="block mt-[.5em]">#53459358345</span>
              </div>

              <div className="md:flex items-center justify-between flex-wrap gap-2 mt-[1em]">
                <div className="flex items-center justify-center md:justify-start gap-5">
                  <span className="cursor-pointer">
                    <RemoveIcon />
                  </span>
                  <span className="border border-[#D9D9D9] px-4 text-center py-[.2em] rounded-sm">
                    1
                  </span>
                  <span>
                    <AddIcon />
                  </span>
                </div>

                <div className="mt-[2em] flex items-center justify-center gap-3 md:mt-0">
                  <span className="font-semibold text-[1.1em]">$549</span>
                  <span className="">
                    <ClearIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex text-center items-center md:text-left justify-center md:justify-start flex-wrap gap-[2em] my-[3em]">
            <img
              src={product3Img}
              alt="a phone image"
              className="m-auto md:m-0 "
            />
            <div className="mt-[2em] w-[70%]">
              <div>
                <p className="font-medium">
                  Apple Watch Series 9 GPS 41mm Starlight Aluminium{" "}
                </p>
                <span className="block mt-[.5em]">#63632324</span>
              </div>

              <div className="md:flex items-center justify-between flex-wrap gap-2 mt-[1em]">
                <div className="flex items-center justify-center md:justify-start gap-5">
                  <span className="cursor-pointer">
                    <RemoveIcon />
                  </span>
                  <span className="border border-[#D9D9D9] px-4 text-center py-[.2em] rounded-sm">
                    1
                  </span>
                  <span>
                    <AddIcon />
                  </span>
                </div>

                <div className="mt-[2em] flex items-center justify-center gap-3 md:mt-0">
                  <span className="font-semibold text-[1.1em]">$399</span>
                  <span className="">
                    <ClearIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OrderSummary />
      </div>
    </section>
  );
};

export default Cart;
