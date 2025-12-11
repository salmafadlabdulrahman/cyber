import headphoneMobile from "/assets/banner-headphones.png";
import visionproMobile from "/assets/banner-provision.png";
import playstationMobile from "/assets/banner-playstation.png";
import macbookMobile from "/assets/banner-macbook.png";

import headphoneDesktop from "/assets/banner-headphones-desktop.png";
import visionProDesktop from "/assets/banner-visionpro-desktop.png";
import playstationDesktop from "/assets/banner-playstation-desktop.png";
import macbookDesktop from "/assets/banner-macbook-desktop.png";

const Banners = () => {
  return (
    <section className="lg:flex">
      <div className="flex flex-col">
        <div className="md:flex flex-wrap md:order-2">
          <div className="bg-primary-gray justify-between banner-card lg:pr-[1em] ">
            <img
              src={headphoneMobile}
              alt="white headphones"
              className="m-auto lg:hidden"
            />
            <img
              src={headphoneDesktop}
              alt="white headphones"
              className="m-auto hidden lg:block"
            />
            <div className=" ">
              <p className="mt-[.5em] text-[2em]">
                Apple AirPods <span className="font-semibold">Max</span>
              </p>
              <p className="text-mid-gray font-medium">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>

          <div className="bg-darker-gray banner-card lg:pr-[1em]">
            <img
              src={visionproMobile}
              alt="a black vision pro goggles"
              className="m-auto lg:hidden"
            />
            <img
              src={visionProDesktop}
              alt="a black vision pro goggles"
              className="m-auto hidden lg:block"
            />
            <div>
              <p className="mt-[.5em] text-[2em] text-white font-light tracking-wider">
                Apple Vision <span className="font-semibold">Pro</span>
              </p>
              <p className="text-mid-gray font-medium">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white text-center p-[2em] lg:flex lg:p-0 lg:text-left lg:pr-[1em]  lg:w-auto lg:items-center md:order-1 md:w-full">
          <img
            src={playstationMobile}
            alt="a playstation"
            className="m-auto lg:hidden"
          />
          <img
            src={playstationDesktop}
            alt="a playstation"
            className="m-auto hidden lg:block"
          />
          <div className="order-1">
            <p className="mt-[.5em] text-[2em] font-light tracking-wider">
              Playstation <span className="font-semibold">5</span>
            </p>
            <p className="text-mid-gray font-medium">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary-gray text-center p-[2em] md:w-full md:flex md:pb-[2em] items-center justify-between md:p-0 lg:order-2 overflow-hidden">
        <img src={macbookMobile} alt="a laptop" className="m-auto lg:hidden" />

        <img
          src={macbookDesktop}
          alt="a laptop"
          className="md:order-2 hidden lg:block object-contain max-w-full h-auto"
        />

        <div className="lg:order-1 md:text-left md:px-[5em] lg:pl-[1em] xl:pl-[2em]">
          <p className="mt-[.5em] text-[2em] md:text-[4em] font-semibold md:font-thin tracking-wider">
            Macbook <span className="font-light md:font-semibold">Air</span>
          </p>

          <p className="text-mid-gray font-medium">
            The new 15-inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>

          <button className="border-2 border-black text-black shop-btn w-full md:w-auto">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banners;
