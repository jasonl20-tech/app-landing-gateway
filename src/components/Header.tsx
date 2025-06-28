
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(2, 0, 33, 0.95)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/267bf51e-9711-4333-aafd-bcd459c36595.png" 
                alt="MostChats Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-white">
              MostChats
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
              Features
            </a>
            <a href="#download" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
              Download
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in" style={{ backgroundColor: 'rgba(2, 0, 33, 0.9)' }}>
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Features
              </a>
              <a href="#download" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                Download
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
