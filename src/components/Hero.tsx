
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
    window.open("https://play.google.com/store/apps", "_blank");
  };

  const scrollToContent = () => {
    const nextSection = document.querySelector('#features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* LED Animation with Gradient Smoke Background */}
      <div className="absolute inset-0">
        {/* Gradient Smoke Layers */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/30 via-purple-600/20 to-transparent animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              filter: 'blur(100px)',
              animationDuration: '4s'
            }}
          ></div>
          <div 
            className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/40 via-purple-800/30 to-transparent rounded-full animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * -0.15}px)`,
              filter: 'blur(80px)',
              animationDelay: '1s',
              animationDuration: '5s'
            }}
          ></div>
          <div 
            className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-t from-purple-400/35 via-purple-700/25 to-transparent rounded-full animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * 0.2}px)`,
              filter: 'blur(90px)',
              animationDelay: '2s',
              animationDuration: '6s'
            }}
          ></div>
        </div>

        {/* LED Light Effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * 0.3}px)`,
              boxShadow: '0 0 20px #a855f7, 0 0 40px #a855f7, 0 0 60px #a855f7',
              animationDuration: '2s'
            }}
          ></div>
          <div 
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-300 rounded-full shadow-lg shadow-purple-300/50 animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * -0.2}px)`,
              boxShadow: '0 0 15px #d8b4fe, 0 0 30px #d8b4fe, 0 0 45px #d8b4fe',
              animationDelay: '0.5s',
              animationDuration: '3s'
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * 0.25}px)`,
              boxShadow: '0 0 25px #8b5cf6, 0 0 50px #8b5cf6, 0 0 75px #8b5cf6',
              animationDelay: '1.5s',
              animationDuration: '4s'
            }}
          ></div>
          <div 
            className="absolute top-2/3 left-1/6 w-2 h-2 bg-purple-200 rounded-full shadow-lg shadow-purple-200/50 animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * -0.1}px)`,
              boxShadow: '0 0 10px #e9d5ff, 0 0 20px #e9d5ff, 0 0 30px #e9d5ff',
              animationDelay: '2.5s',
              animationDuration: '3.5s'
            }}
          ></div>
          <div 
            className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-600 rounded-full shadow-lg shadow-purple-600/50 animate-pulse"
            style={{ 
              transform: `translateY(${scrollY * 0.35}px)`,
              boxShadow: '0 0 18px #9333ea, 0 0 36px #9333ea, 0 0 54px #9333ea',
              animationDelay: '3s',
              animationDuration: '2.5s'
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-60">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-300 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                boxShadow: '0 0 6px #d8b4fe'
              }}
            ></div>
          ))}
        </div>
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
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">verbindungen</span>
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
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105 group"
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Play className="h-3 w-3 lg:h-4 lg:w-4 text-white fill-current" />
                </div>
                <span>Play Store</span>
              </Button>
              
              <Button
                onClick={handleWebVersion}
                variant="outline"
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg font-semibold rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
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
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-[2rem] lg:rounded-[2.5rem] flex flex-col items-center justify-center p-4 lg:p-6 relative overflow-hidden shadow-lg shadow-purple-500/30">
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
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] lg:rounded-[2.5rem] flex flex-col p-4 lg:p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-6 lg:h-8 bg-gray-800 rounded-t-[2rem] lg:rounded-t-[2.5rem] flex items-center justify-center">
                    <div className="w-12 lg:w-16 h-0.5 lg:h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="mt-8 lg:mt-12 space-y-3 lg:space-y-4">
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 space-y-2 lg:space-y-3 border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300">
                      <div className="flex items-center space-x-2 lg:space-x-3">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-400 rounded-full animate-pulse"></div>
                        <div className="text-white text-xs lg:text-sm">Anna, 24</div>
                      </div>
                      <div className="text-gray-300 text-xs">
                        Hey! Wie läuft dein Tag? 😊
                      </div>
                    </div>
                    <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 space-y-2 lg:space-y-3 border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300">
                      <div className="flex items-center space-x-2 lg:space-x-3">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
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
