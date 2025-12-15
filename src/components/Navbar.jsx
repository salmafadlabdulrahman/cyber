import logo from "/assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center lg:justify-center py-[1em] lg:gap-[5em]">
      <section className="p-5 flex items-center justify-between flex-wrap w-full lg:w-auto ">
        <img
          src={logo}
          alt="a black logo for the website"
          className="cursor-pointer"
        />
        <span className="lg:hidden">
          <MenuIcon
            className="text-2xl cursor-pointer"
            sx={{ fontSize: "30px" }}
          />
        </span>
      </section>

      <section className="hidden bg-light-gray rounded-md p-2 lg:flex items-center gap-1">
        <SearchIcon sx={{ color: "#989898" }} />
        <input type="text" placeholder="Search" className="outline-none" />
      </section>

      <section className="hidden lg:block">
        <ul className="flex items-center gap-[2em] cursor-pointer">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/wish-list"}>Wish List</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </ul>
      </section>

      <section className="hidden lg:flex items-center gap-2 cursor-pointer">
        <FavoriteBorderIcon />
        <Link to={"/cart"}>
          <ShoppingCartIcon />
        </Link>

        <PersonOutlineIcon />
      </section>
    </nav>
  );
};

export default Navbar;
