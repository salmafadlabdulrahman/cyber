import Banners from "./components/Banners";
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
      </main>
    </>
  );
}

export default App;
