import { Award, Clock, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">About Our Company</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
              With years of experience in precision engineering, we deliver top-quality manufacturing solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced CNC machining operations" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Excellence in Manufacturing</h3>
              <p className="text-secondary-foreground mb-6 leading-relaxed">
                With 10+ years experience in VMC/CNC machining field, we machine various types of critical 
                components made from investment casting, sand casting, solid and hollow bar. We work with 
                reputed casting foundries and satisfy their quality and timely needs with 90%+ on-time 
                committed delivery ratio.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral p-4 rounded-lg">
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold text-dark">Quality Assured</h4>
                  <p className="text-sm text-secondary-foreground">ISO certified processes</p>
                </div>
                <div className="bg-neutral p-4 rounded-lg">
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold text-dark">On-Time Delivery</h4>
                  <p className="text-sm text-secondary-foreground">Guaranteed schedules</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-dark">Lodhika GIDC, Rajkot-360021, Gujarat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
