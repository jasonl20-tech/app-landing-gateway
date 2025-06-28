
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-slate-900 to-slate-800 border-t border-slate-700/50">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/267bf51e-9711-4333-aafd-bcd459c36595.png" 
                  alt="MostChats Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-3xl font-bold text-white">
                MostChats
              </h3>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Die modernste Dating-App für echte Verbindungen und authentische Gespräche. 
              Finde Menschen, die wirklich zu dir passen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5 text-slate-300 hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* App Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-6">App</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-indigo-400 rounded-full"></span>
                <span>Features</span>
              </a></li>
              <li><a href="#download" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-indigo-400 rounded-full"></span>
                <span>Download</span>
              </a></li>
              <li><a href="https://app.mostchats.com" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-indigo-400 rounded-full"></span>
                <span>Web Version</span>
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-indigo-400 rounded-full"></span>
                <span>Premium</span>
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-indigo-400 rounded-full"></span>
                <span>Sicherheit</span>
              </a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white mb-6">Unternehmen</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Über uns</span>
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Karriere</span>
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Presse</span>
              </a></li>
              <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Blog</span>
              </a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Kontakt</span>
              </a></li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6">Kontakt</h4>
            <div className="space-y-4">
              <a href="mailto:hello@mostchats.com" className="flex items-center space-x-3 text-slate-400 hover:text-indigo-300 transition-colors duration-300">
                <Mail className="h-5 w-5" />
                <span>hello@mostchats.com</span>
              </a>
              <a href="tel:+4912345678900" className="flex items-center space-x-3 text-slate-400 hover:text-indigo-300 transition-colors duration-300">
                <Phone className="h-5 w-5" />
                <span>+49 123 456 789 00</span>
              </a>
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <div>MostChats GmbH</div>
                  <div>Musterstraße 123</div>
                  <div>10115 Berlin, Deutschland</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-white font-semibold">Rechtliches</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300">Datenschutz</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300">AGB</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300">Impressum</a></li>
                <li><a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors duration-300">Hilfe & Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 MostChats GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-rose-400 fill-current animate-pulse" />
              <span>in Germany for authentic connections</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
