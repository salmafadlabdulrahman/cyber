import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();
  const hiddenRoutes = ["/login", "/signup"];
  const hideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && (
        <nav>
          <Navbar />
        </nav>
      )}

      <main>
        <Outlet />
      </main>

      {!hideLayout && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
