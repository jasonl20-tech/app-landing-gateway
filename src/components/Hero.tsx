
import { Button } from "@/components/ui/button";
import { Play, Globe, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWebVersion = () => {
    window.open("https://app.mostchats.com", "_blank");
  };

  const handlePlayStore = () => {
    window.open("#", "_blank");
  };

  const scrollToContent = () => {
    const nextSection = document.querySelector('#features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo badge */}
            <div className="flex items-center space-x-3 mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-purple-400/30 hover:scale-110 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/267bf51e-9711-4333-aafd-bcd459c36595.png" 
                  alt="MostChats Logo" 
                  className="w-6 h-6 lg:w-8 lg:h-8 object-contain"
                />
              </div>
              <span className="text-purple-400 font-semibold text-base lg:text-lg">MostChats</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                die app für echte
                <br />
                <span className="text-purple-400 inline-block hover:scale-105 transition-transform duration-300">verbindungen</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-lg">
                Eine neue Art von Dating-App, die dir hilft, dein Leben zu organisieren, 
                deine Ziele zu erreichen und echte Verbindungen zu knüpfen.
              </p>
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handlePlayStore}
                className="bg-white text-gray-900 hover:bg-gray-100 px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-900 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Play className="h-3 w-3 lg:h-4 lg:w-4 text-white fill-current" />
                </div>
                <span>App Store</span>
              </Button>
              
              <Button
                onClick={handleWebVersion}
                variant="outline"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-purple-400 px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
              >
                <Globe className="h-4 w-4 lg:h-5 lg:w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Web Version</span>
              </Button>
            </div>
          </div>

          {/* Right side - Phone mockups */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Phone mockup 1 */}
              <div 
                className="relative z-20 w-48 h-96 sm:w-56 sm:h-[450px] lg:w-64 lg:h-[520px] bg-gray-800 rounded-[2.5rem] lg:rounded-[3rem] p-2 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500 hover:scale-105"
                style={{ transform: `rotate(12deg) translateY(${scrollY * 0.05}px)` }}
              >
                <div className="w-full h-full bg-purple-500 rounded-[2rem] lg:rounded-[2.5rem] flex flex-col items-center justify-center p-4 lg:p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-6 lg:h-8 bg-gray-900 rounded-t-[2rem] lg:rounded-t-[2.5rem] flex items-center justify-center">
                    <div className="w-12 lg:w-16 h-0.5 lg:h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="mt-8 lg:mt-12 text-center space-y-3 lg:space-y-4">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 border border-white/30 hover:scale-110 transition-transform duration-300">
                      <img 
                        src="/lovable-uploads/267bf51e-9711-4333-aafd-bcd459c36595.png" 
                        alt="MostChats Logo" 
                        className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                      />
                    </div>
                    <h3 className="text-white font-bold text-lg lg:text-xl">MostChats</h3>
                    <p className="text-white/80 text-xs lg:text-sm px-2 lg:px-4">
                      Deine neue Dating-App für authentische Verbindungen
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone mockup 2 */}
              <div 
                className="absolute top-8 lg:top-12 -left-16 lg:-left-20 z-10 w-48 h-96 sm:w-56 sm:h-[450px] lg:w-64 lg:h-[520px] bg-gray-800 rounded-[2.5rem] lg:rounded-[3rem] p-2 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500 hover:scale-105"
                style={{ transform: `rotate(-12deg) translateY(${scrollY * -0.03}px)` }}
              >
                <div className="w-full h-full bg-gray-900 rounded-[2rem] lg:rounded-[2.5rem] flex flex-col p-4 lg:p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-6 lg:h-8 bg-gray-800 rounded-t-[2rem] lg:rounded-t-[2.5rem] flex items-center justify-center">
                    <div className="w-12 lg:w-16 h-0.5 lg:h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="mt-8 lg:mt-12 space-y-3 lg:space-y-4">
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 space-y-2 lg:space-y-3 border border-gray-700/50 hover:border-purple-400/30 transition-colors duration-300">
                      <div className="flex items-center space-x-2 lg:space-x-3">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-400 rounded-full animate-pulse"></div>
                        <div className="text-white text-xs lg:text-sm">Anna, 24</div>
                      </div>
                      <div className="text-gray-300 text-xs">
                        Hey! Wie läuft dein Tag? 😊
                      </div>
                    </div>
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 space-y-2 lg:space-y-3 border border-gray-700/50 hover:border-purple-400/30 transition-colors duration-300">
                      <div className="flex items-center space-x-2 lg:space-x-3">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="text-white text-xs lg:text-sm">Max, 26</div>
                      </div>
                      <div className="text-gray-300 text-xs">
                        Lust auf einen Kaffee? ☕
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">Scroll down</span>
          <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
