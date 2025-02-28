import Navbar from "./components/navbar";
import About from "./sections/about";
import ContactUs from "./sections/contact";
import Hero from "./sections/hero";
// import SuccessStories from "./sections/successStories";
import Testimmonials from "./sections/testimmonials";
// import Loader from "./sections/loader";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      {/* <Loader /> */}
      <Hero />
      <About />
      {/* <SuccessStories /> */}
      <Testimmonials />
      <ContactUs />
    </div>
  );
}
