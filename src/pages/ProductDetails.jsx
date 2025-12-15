import mainProductImg from "/assets/main-product-img1.png";
// import productImgMini from "/assets/Iphone-pro.png";
// import productImgFront from "/assets/product-front.png";
// import productImgBack from "/assets/product-back.png";
// import productImgSide from "/assets/product-side.png";
import screenIcon from "/assets/Screensize.png";
import cpuIcon from "/assets/cpu-img.png";
import coreIcon from "/assets/cores-img.png";
import mainCameraIcon from "/assets/camera-img.png";
import frontCameraImgIcon from "/assets/front-camera-img.png";
import batteryCapacityIcon from "/assets/battery-capacity-img.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ProductPrivilages from "../components/ProductPrivilages";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
  return (
    <section className="mt-[2em] px-[2em]">
      <div className="md:text-center">
        <div className="lg:flex md:w-[80%] md:m-auto lg:w-auto">
          <img
            src={mainProductImg}
            alt="a phone image"
            className="m-auto h-full lg:w-[350px]"
          />

          {/* <div className="flex items-center justify-center mt-[3em]">
            <img src={productImgMini} alt="a phone image in a small size" />
            <img src={productImgFront} alt="a phone image from the front" />
            <img src={productImgBack} alt="a phone image the back" />
            <img src={productImgSide} alt="a phone image from the side" />
          </div> */}

          <div className="lg:w-[50%]">
            <h2 className="mt-[1em] text-[2em] font-semibold md:text-center lg:text-left">
              Apple iPhone 14 Pro Max
            </h2>

            <div className="flex items-center md:justify-center gap-[1em] mt-[.5em] lg:justify-start">
              <span className="text-3xl font-semibold">$1399</span>
              <span className="text-[1.5em] text-mid-gray line-through">
                $1499
              </span>
            </div>

            <div className="flex items-center mt-[1.5em] md:justify-center lg:justify-start">
              <p>Select Color: </p>
              <div className="flex items-center gap-2 pl-[1em]">
                <span className="w-[30px] h-[30px] rounded-full bg-black block"></span>
                <span className="w-[30px] h-[30px] rounded-full bg-[#781DBC] block"></span>
                <span className="w-[30px] h-[30px] rounded-full bg-[#E10000] block"></span>
                <span className="w-[30px] h-[30px] rounded-full bg-[#E1B000] block"></span>
                <span className="w-[30px] h-[30px] rounded-full bg-[#E8E8E8] block"></span>
              </div>
            </div>

            <div className="mt-[2em] flex flex-wrap items-center gap-2 md:justify-center lg:justify-start">
              <span className="battery-capcity">128GB</span>
              <span className="battery-capcity">256GB</span>
              <span className="battery-capcity">512GB</span>
              <span className="battery-capcity">1TB</span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mt-[2em] lg:justify-start">
              <div className="features-style">
                <img src={screenIcon} alt="a screen icon" />
                <div className="text-[.9em]">
                  <span className="text-[#A7A7A7] block">Screen size</span>
                  <span className="text-[#4E4E4E] block">6.7"</span>
                </div>
              </div>

              <div className="features-style">
                <img src={cpuIcon} alt="a cpu icon" />
                <div className="text-[.9em]">
                  <span className="text-[#A7A7A7] block">CPU</span>
                  <span className="text-[#4E4E4E] block">Apple A16 Bionic</span>
                </div>
              </div>

              <div className="features-style">
                <img src={coreIcon} alt="a core icon" />
                <div className="text-[.9em]">
                  <span className="text-[#A7A7A7] block">Number of Cores</span>
                  <span className="text-[#4E4E4E] block">6</span>
                </div>
              </div>

              <div className="features-style">
                <img src={mainCameraIcon} alt="a camera icon" />
                <div className="text-[.9em]">
                  <span className="text-[#A7A7A7] block">Main camera </span>
                  <span className="text-[#4E4E4E] block">48-12 -12 MP</span>
                </div>
              </div>

              <div className="features-style">
                <img src={frontCameraImgIcon} alt="a camera icon" />
                <div className="text-[.9em]">
                  <span className="text-[#A7A7A7] block">Front-camera</span>
                  <span className="text-[#4E4E4E] block">12 MP</span>
                </div>
              </div>

              <div className="features-style">
                <img src={batteryCapacityIcon} alt="a battery icon" />
                <div className="text-[.9em]">
                  <span className="text-[#A7A7A7] block">Battery capacity</span>
                  <span className="text-[#4E4E4E] block">4323 mAh</span>
                </div>
              </div>
            </div>

            <div className="mt-[2em]">
              <p className="text-[#6C6C6C] lg:text-left lg:w-[80%]">
                Enhanced capabilities thanks toan enlarged display of 6.7
                inchesand work without rechargingthroughout the day. Incredible
                photosas in weak, yesand in bright lightusing the new systemwith
                two cameras
              </p>

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
          <p className="text-[#9D9D9D] mt-[1em]">
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both
            critics and mass consumers always praise the quality of the picture
            provided by the products of the Californian brand. And last year's
            6.7-inch Retina panels, which had ProMotion, caused real admiration
            for many.
          </p>
        </div>

        <div className="my-[3em] md:text-left lg:w-[80%] lg:m-auto lg:my-[3em]">
          <h4 className="text-2xl font-semibold">Related Products</h4>
          <div className="flex items-center gap-4 flex-wrap mt-[1em]">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
