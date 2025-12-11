import bannerImgDesktop from "/assets/banner-footer-desktop.png";

const SubBanner = () => {
  return (
    <section className="mt-[5em] relative">
      <div className="h-[300px] w-full">
        <img
          src={bannerImgDesktop}
          alt="a gray background with phones on it"
          className="hidden md:block w-full object-cover h-full"
        />
      </div>

      <div className="absolute top-20 text-center left-0 right-0 text-white">
        <p className="font-thin text-[3em] tracking-wider">
          Big Summer <span className="font-semibold">Sale</span>{" "}
        </p>
        <p className="w-[60%] m-auto font-thin mt-[1em]">
          Our Big summer sales are coming soon. Get ready for the latest tech
          gadgets you can find.
        </p>
        <button className="rounded-md cursor-pointer border px-[2em] py-[.5em] mt-[2em]">Shop Now</button>
      </div>
    </section>
  );
};

export default SubBanner;
