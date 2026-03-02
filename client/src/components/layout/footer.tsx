import logoPath from "@assets/image_1752182482136.png";

export default function Footer() {
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
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoPath} alt="Bharat Engineering Logo" className="h-12 w-12" />
                <div>
                  <h3 className="text-xl font-bold text-white">Bharat Engineering</h3>
                  <p className="text-sm text-orange-400">ALL TYPE OF VMC WORK</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm">
                Your trusted partner for precision manufacturing and engineering solutions in Gujarat.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-orange-400 transition-colors"
                  >
                    VMC Job Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-orange-400 transition-colors"
                  >
                    CNC Job Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-white transition-colors"
                  >
                    Design Support
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-white transition-colors"
                  >
                    Quality Control
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-orange-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('machinery')}
                    className="hover:text-white transition-colors"
                  >
                    Machinery
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="hover:text-white transition-colors"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-200">
                <p>Lodhika GIDC, Rajkot-360021</p>
                <p>+91 9033914439</p>
                <p>info@bharatengineering.com</p>
                <p>GST: 24AXTPJ4567F1Z4</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-400 mt-8 pt-8 text-center text-sm text-gray-200">
            <p>&copy; 2024 Bharat Engineering Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
