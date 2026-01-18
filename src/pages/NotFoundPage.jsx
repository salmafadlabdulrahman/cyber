import notFoundImg from "/assets/not-found.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center items-center my-[4em]">
      <div className="w-[80%] md:w-[60%] lg:w-[35%]">
        <img src={notFoundImg} alt="a bird and an empty bottle" />
      </div>

      <div className="mt-[2em] text-center">
        <h3 className="text-[2em] md:text-[2.5em] lg:text-[3em] font-semibold">
          No results Found
        </h3>
        <Link to={"/"}>
          <button className="cursor-pointer bg-dark-black text-white rounded-md px-[2em] py-[.4em] mt-[2em]">
            Go Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
