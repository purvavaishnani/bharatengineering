import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Wrench, Ruler } from "lucide-react";

export default function Machinery() {
  const vmcMachines = [
    {
      make: "JYOTI CNC AUTOMATION LTD.",
      model: "RX20",
      xTravel: "820mm",
      yTravel: "510mm",
      zTravel: "510mm",
      special: false
    },
    {
      make: "JYOTI CNC AUTOMATION LTD.",
      model: "RX20",
      xTravel: "820mm",
      yTravel: "510mm",
      zTravel: "510mm",
      special: "U CAM MAKE Ø260 ROTARY 4TH AXIS"
    },
    {
      make: "JYOTI CNC AUTOMATION LTD.",
      model: "VMC 1060",
      xTravel: "1020mm",
      yTravel: "600mm",
      zTravel: "610mm",
      special: "U CAM MAKE Ø260 ROTARY 4TH AXIS"
    },
    {
      make: "JYOTI CNC AUTOMATION LTD.",
      model: "VMC 1370 nvu",
      xTravel: "1300mm",
      yTravel: "700mm",
      zTravel: "700mm",
      special: "U CAM MAKE Ø320 ROTARY 4TH AXIS"
    }
  ];

  const cncMachines = [
    {
      make: "MACPOWER",
      model: "MONO 200-1",
      size: "250mm x 500mm",
      maxTurningDia: "400mm",
      maxTurningLength: "500mm"
    }
  ];

  const measuringEquipment = [
    "HEIGHT GAUGE: 300MM",
    "DIGITAL VERNIER CALIPER: 200mm, 300mm", 
    "DIGITAL DEPTH GAUGE: 0-150mm",
    "MICROMETERS 0-150mm",
    "BORE GAUGE: 18-35mm, 35-60mm, 50-160mm",
    "SLIP GAUGE SET – 0.5 TO 100mm"
  ];

  return (
    <section id="machinery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Machinery & Equipment</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
              State-of-the-art manufacturing equipment ensuring precision and quality in every project.
            </p>
          </div>

          {/* VMC Machines */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Settings className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-dark">VMC Machines</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {vmcMachines.map((machine, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-dark">{machine.model}</CardTitle>
                        <p className="text-sm text-secondary-foreground">{machine.make}</p>
                      </div>
                      {machine.special && (
                        <Badge variant="secondary" className="ml-2">4th Axis</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-secondary-foreground">X Travel:</span>
                        <span className="text-sm font-medium">{machine.xTravel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-secondary-foreground">Y Travel:</span>
                        <span className="text-sm font-medium">{machine.yTravel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-secondary-foreground">Z Travel:</span>
                        <span className="text-sm font-medium">{machine.zTravel}</span>
                      </div>
                      {machine.special && (
                        <div className="pt-2 border-t">
                          <p className="text-sm text-primary font-medium">{machine.special}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CNC Machines */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Wrench className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-dark">CNC Machines</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cncMachines.map((machine, index) => (
                <Card key={index} className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-dark">{machine.model}</CardTitle>
                    <p className="text-sm text-secondary-foreground">{machine.make}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-secondary-foreground">Size:</span>
                        <span className="text-sm font-medium">{machine.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-secondary-foreground">Max Turning Dia:</span>
                        <span className="text-sm font-medium">{machine.maxTurningDia}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-secondary-foreground">Max Turning Length:</span>
                        <span className="text-sm font-medium">{machine.maxTurningLength}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Measuring Equipment */}
          <div>
            <div className="flex items-center mb-6">
              <Ruler className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-dark">Measuring Facilities</h3>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {measuringEquipment.map((equipment, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-dark">{equipment}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}