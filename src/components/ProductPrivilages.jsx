import truck from "/assets/truck-icon.png";
import shop from "/assets/shop-icon.png";
import verify from "/assets/verify.png";

const ProductPrivilages = () => {
  return (
    <div className="mt-[2em] flex items-center justify-between">
      <div className="flex flex-col justify-center items-center">
        <div className="products-free-section">
          <img src={truck} alt="a gray truck" className="m-auto" />
        </div>

        <p className="mt-[1em] text-[#717171] font-medium">Free Delivery</p>
        <span className="block font-medium">1-2 day</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="products-free-section">
          <img src={shop} alt="a gray house" className="m-auto" />
        </div>

        <p className="mt-[1em] text-[#717171] font-medium">In Stock</p>
        <span className="block font-medium">Today</span>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="products-free-section">
          <img src={verify} alt="a gray verify mark" className="m-auto" />
        </div>

        <p className="mt-[1em] text-[#717171] font-medium">Guaranteed</p>
        <span className="block font-medium">1 year</span>
      </div>
    </div>
  );
};

export default ProductPrivilages;
