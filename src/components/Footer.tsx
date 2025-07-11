
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-indigo-500/20 py-6 lg:py-8 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/267bf51e-9711-4333-aafd-bcd459c36595.png" 
              alt="MostChats Logo" 
              className="w-6 h-6 object-contain"
            />
            <span className="text-white font-semibold">MostChats</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-slate-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
            <span>for authentic connections</span>
          </div>
          
          <p className="text-slate-400 text-sm">
            © 2024 MostChats. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
