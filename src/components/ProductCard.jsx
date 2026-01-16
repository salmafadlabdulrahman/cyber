import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ name, price, img }) => {
  return (
    <section
      className="border border-light-gray shadow-md w-[200px] rounded-lg p-3 pb-[1.5em] 
      relative cursor-pointer hover:shadow-xl 
    hover:-translate-y-1
    transition-all 
    duration-300
    "
    >
      <FavoriteBorderIcon
        sx={{ color: "#909090", fontSize: "1.7em" }}
        className="right-2 cursor-pointer absolute"
      />
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[2em]">
          <img
            src={img}
            alt="a phone"
            className="w-[200px] h-[200px] object-contain"
          />
        </div>

        <div className="text-center mt-[1em]">
          <p className="line-clamp-2 font-semibold">
            {/* Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A) */}
            {name}
          </p>
          <span className="block font-semibold mt-[.3em] text-[1.2em] ">
            {/* $900 */}${price}
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
