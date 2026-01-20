import logo from "/assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import axios from "axios";

const API_URL = `http://localhost:3000/api/v1`;

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`);
      alert("logged out successfully");
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  };

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
          <NavLink to={"/contact"}>Contact</NavLink>
        </ul>
      </section>

      <section className="hidden lg:flex items-center gap-2 cursor-pointer">
        <Link to={"/wishlist"}>
          <FavoriteBorderIcon />
        </Link>

        <Link to={"/cart"}>
          <LocalMallIcon />
        </Link>

        {/* <PersonOutlineIcon /> */}

        <div className="bg-indigo-600 text-white px-[.8em] py-[.4em] rounded-full">
          S
        </div>
      </section>

      {user && (
        <button
          className="bg-black text-white rounded-[.4em] px-4 py-1"
          onClick={logout}
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
