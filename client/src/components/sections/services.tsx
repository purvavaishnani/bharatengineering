import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Wrench, Compass, Microscope, Truck, Headphones, CheckCircle } from "lucide-react";

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Services</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
              Comprehensive manufacturing solutions with precision and expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Settings className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-dark">VMC Job Works</h3>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="Vertical machining center operations" 
                  className="rounded-lg mb-6 w-full h-48 object-cover"
                />
                <p className="text-secondary-foreground mb-6">
                  Precision VMC machining with JYOTI CNC machines including 4-axis rotary capabilities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-dark">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    4 VMC machines with 4th axis rotary
                  </li>
                  <li className="flex items-center text-dark">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Travel range up to 1300x700x700mm
                  </li>
                  <li className="flex items-center text-dark">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Investment & sand casting components
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent text-white hover:bg-accent/90"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Wrench className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-dark">CNC Job Works</h3>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=300" 
                  alt="CNC lathe machining precision parts" 
                  className="rounded-lg mb-6 w-full h-48 object-cover"
                />
                <p className="text-secondary-foreground mb-6">
                  CNC turning operations with MACPOWER machines for precision components.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-dark">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Max turning dia: 400mm
                  </li>
                  <li className="flex items-center text-dark">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Max turning length: 500mm
                  </li>
                  <li className="flex items-center text-dark">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    Jig-Fixture manufacturing
                  </li>
                </ul>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-accent text-white hover:bg-accent/90"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Additional Services */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Compass className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-dark mb-2">Jig-Fixture</h4>
                <p className="text-sm text-secondary-foreground">Custom manufacturing</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-dark mb-2">Quality Control</h4>
                <p className="text-sm text-secondary-foreground">Complete measuring facilities</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-dark mb-2">On-Time Delivery</h4>
                <p className="text-sm text-secondary-foreground">90%+ delivery ratio</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-dark mb-2">Experience</h4>
                <p className="text-sm text-secondary-foreground">10+ years expertise</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
