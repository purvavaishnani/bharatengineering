import { Expand } from "lucide-react";
import rx20Image from "@assets/rx-20_1752424037481.jpg";
import vmc1370Image from "@assets/vmc-1370_1752424037482.jpg";

export default function Gallery() {
  const images = [
    {
      src: rx20Image,
      alt: "RX-20 VMC Machine - High precision vertical machining center",
    },
    {
      src: vmc1370Image,
      alt: "VMC 1370 - Advanced vertical machining center with 4-axis capability",
    },
    {
      src: rx20Image,
      alt: "RX-20 VMC - Precision manufacturing equipment for complex parts",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our VMC Machines
            </h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
              State-of-the-art RX-20 and VMC 1370 machines for precision
              manufacturing and complex part machining.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <Expand className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
