import Banners from "../components/Banners";
import Categories from "../components/Categories";
import Discounts from "../components/Discounts";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PopularProducts from "../components/PopularProducts";
import Products from "../components/Products";
import SubBanner from "../components/SubBanner";

const Home = () => {
  return (
    <>
      <section>
        <Hero />
        <Banners />

        <section className="w-[80%] m-auto">
          <Categories />
          <Products />
        </section>

        <section className="hidden md:block">
          <PopularProducts />
        </section>

        <section className="w-[80%] m-auto">
          <Discounts />
        </section>

        {/* <section>
          {products.data.map((product) => (
            <p>{product.name}</p>
          ))}
        </section> */}

        <section>
          <div className="hidden md:block">
            <SubBanner />
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
