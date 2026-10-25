import Hero from "./components/Hero";
import About from "./components/About";
import ScrollStrip from "./components/ScrollStrip";
import Experience from "./components/Experience";
import CtaBanner from "./components/CtaBanner";
import LatestWorks from "./components/LatestWorks";
import Blog from "./components/Blog";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 antialiased">
      <Hero />
      <About />
      <ScrollStrip />
      <Experience />
      <CtaBanner />
      <LatestWorks />
      <Blog />
      <FinalCta />
      <Footer />
    </div>
  );
}
