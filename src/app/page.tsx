import Navbar from "./components/navbar";
import About from "./sections/about";
import Hero from "./sections/hero";
import Loader from "./sections/loader";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Loader />
      <Hero />
      <About />
    </div>
  );
}
