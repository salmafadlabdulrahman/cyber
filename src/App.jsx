import Banners from "./components/Banners";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

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
        </section>
      </main>
    </>
  );
}

export default App;
