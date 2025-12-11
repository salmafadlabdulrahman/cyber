import Banners from "./components/Banners";
import Categories from "./components/Categories";
import Discounts from "./components/Discounts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import SubBanner from "./components/SubBanner";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Banners />

        <section className="w-[80%] m-auto">
          <Categories />
          <Products />
          <Discounts />
        </section>

        <section>
          <div className="hidden md:block">
            <SubBanner />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
