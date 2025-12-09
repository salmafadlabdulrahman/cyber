import HeroSm from "/assets/hero-img-mobile.png";

const Hero = () => {
  return (
    <section className="bg-primary-black pt-[4em] text-center px-[1em]">
      <p className="text-mid-gray font-semibold text-[1.5em]">Pro.Beyond.</p>
      <h1 className="tracking-wider text-white text-[3.5em] font-thin leading-[60px]">
        IPhone 14 <br />
        <span className="font-semibold">Pro</span>
      </h1>
      <p className="text-mid-gray font-medium mt-[1em]">
        Created to charge everything for the better. For everyone
      </p>
      <button className="border border-white text-white mt-[2em] rounded-md px-[2.5em] py-[.7em] cursor-pointer">
        Shop Now
      </button>
      <img src={HeroSm} alt="an image of two phones" className="m-auto mt-[1.5em]" />
    </section>
  );
};

export default Hero;
