
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MostChats
            </h3>
            <p className="text-gray-400 text-sm">
              Die modernste Dating-App für echte Verbindungen und authentische Gespräche.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">App</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Premium</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Sicherheit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Hilfe</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 MostChats. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-pink-400" />
            <span>for authentic connections</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
