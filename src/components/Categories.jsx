import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import WatchIcon from "@mui/icons-material/Watch";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ComputerIcon from "@mui/icons-material/Computer";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useRef } from "react";
import { useCategories } from "@/queries/useCategories";
import { Link } from "react-router-dom";

const Categories = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useCategories();

  if (categoriesLoading) {
    return <h1>Loading</h1>;
  }

  if (categoriesError) {
    console.log(categoriesError);
    return <h1>Error</h1>;
  }

  console.log(categories);

  return (
    <section className="mt-[5em] lg:mt-[8em]">
      <div className="flex items-center justify-between">
        <h3 className="text-[1.2em] font-semibold">Browse By Category</h3>
        <div className="flex items-center gap-2">
          <span onClick={scrollLeft}>
            <ArrowBackIosNewIcon className="cursor-pointer" />
          </span>

          <span onClick={scrollRight}>
            <ArrowForwardIosIcon className="cursor-pointer" />
          </span>
        </div>
      </div>

      <div
        className="mt-[2em] flex gap-4 lg:justify-center overflow-x-auto scroll-smooth no-scrollbar"
        ref={scrollRef}
      >
        {categories.map((category, i) => (
          <Link key={i} to={`/shop/?category=${category._id}`}>
            <div className="border border-primary-gray cursor-pointer uppercase w-[140px] h-[90px] shrink-0 rounded-lg text-center flex flex-col items-center justify-center">
              {/* <StayCurrentPortraitIcon sx={{ fontSize: "2em" }} /> */}
              <p className="font-medium px-[1em]">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
