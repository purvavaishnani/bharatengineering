import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative hero-bg text-white py-20">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 industrial-pattern"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-accent">bharat</span>{" "}
            <span className="text-white">engineering</span>
            <br />
            <span className="text-white text-2xl md:text-3xl font-normal">
              ALL TYPE OF VMC WORK
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            All type of VMC/CNC job work in Rajkot, Gujarat.
            <br />
            10+ years experience in precision manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold"
            >
              Our Services
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold bg-transparent"
              style={{
                backgroundColor: "transparent",
                borderColor: "white",
                color: "white",
              }}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
