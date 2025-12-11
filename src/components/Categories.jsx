import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import WatchIcon from "@mui/icons-material/Watch";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ComputerIcon from "@mui/icons-material/Computer";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useRef } from "react";

//Will have categories handled in the backend. LATER!

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
  return (
    <section className="mt-[3em]">
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
        <div className="bg-primary-gray w-[140px] h-[90px] shrink-0 rounded-lg text-center flex flex-col items-center justify-center">
          <StayCurrentPortraitIcon sx={{ fontSize: "2em" }} />
          <p className="mt-[.5em] font-medium">Phones</p>
        </div>

        <div className="bg-primary-gray w-[140px] h-[90px] shrink-0 rounded-lg text-center flex flex-col items-center justify-center">
          <WatchIcon sx={{ fontSize: "2em" }} />
          <p className="mt-[.5em] font-medium">Smart Watches</p>
        </div>

        <div className="bg-primary-gray w-[140px] h-[90px] shrink-0 rounded-lg text-center flex flex-col items-center justify-center">
          <CameraAltIcon sx={{ fontSize: "2em" }} />
          <p className="mt-[.5em] font-medium">Cameras</p>
        </div>

        <div className="bg-primary-gray w-[140px] h-[90px] shrink-0 rounded-lg text-center flex flex-col items-center justify-center">
          <HeadphonesIcon sx={{ fontSize: "2em" }} />
          <p className="mt-[.5em] font-medium">Headphones</p>
        </div>

        <div className="bg-primary-gray w-[140px] h-[90px] shrink-0 rounded-lg text-center flex flex-col items-center justify-center">
          <ComputerIcon sx={{ fontSize: "2em" }} />
          <p className="mt-[.5em] font-medium">Cameras</p>
        </div>

        <div className="bg-primary-gray w-[140px] h-[90px] shrink-0 rounded-lg text-center flex flex-col items-center justify-center">
          <SportsEsportsIcon sx={{ fontSize: "2em" }} />
          <p className="mt-[.5em] font-medium">Gaming</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
