import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import productImg from "/assets/Iphone-pro.png";

const ProductCard = () => {
  return (
    <section className="bg-light-gray w-[200px] rounded-lg p-3 pb-[1.5em] relative">
      <FavoriteBorderIcon
        sx={{ color: "#909090", fontSize: "1.7em" }}
        className="right-2 cursor-pointer absolute"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[2em]">
          <img src={productImg} alt="a phone" />
        </div>

        <div className="text-center mt-[1em]">
          <p className="line-clamp-2 font-semibold">
            Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)
          </p>
          <span className="block font-semibold mt-[.3em] text-[1.2em] ">
            $900
          </span>
          <button className="bg-black rounded-lg mt-[1em] text-white px-[2em] py-[.5em] cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
