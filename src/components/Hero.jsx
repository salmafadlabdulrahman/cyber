import HeroSm from "/assets/hero-img-mobile.png";
import HeroLg from "/assets/hero-img-desktop.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-primary-black pt-[4em]  px-[1em] ">
      <div className="lg:flex lg:items-center lg:justify-around">
        <section className="head-text-wrapper text-center lg:text-left ">
          <p className="text-mid-gray font-semibold text-[1.5em] lg:text-[2em]">
            Pro.Beyond.
          </p>
          <h1 className="tracking-wider text-white text-[3.5em] lg:text-[5em] lg:mt-[.3em] font-thin leading-[60px]">
            IPhone 14
            <span className="font-semibold"> Pro</span>
          </h1>
          <p className="text-mid-gray font-medium mt-[1em] lg:text-[1.3em]">
            Created to charge everything for the better. For everyone
          </p>
          <Link to={"/shop"}>
            <button className="border border-white text-white shop-btn">
              Shop Now
            </button>
          </Link>
        </section>

        <img
          src={HeroSm}
          alt="an image of two phones"
          className="m-auto mt-[1.5em] lg:hidden"
        />
        <img
          src={HeroLg}
          alt="an image of two phones"
          className="mt-[1.5em] hidden lg:block"
        />
      </div>
    </section>
  );
};

export default Hero;
