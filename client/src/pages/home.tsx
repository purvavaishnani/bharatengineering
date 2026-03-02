import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Machinery from "@/components/sections/machinery";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Machinery />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
