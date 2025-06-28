
import { Button } from "@/components/ui/button";
import { Play, Globe } from "lucide-react";

const Hero = () => {
  const handleWebVersion = () => {
    window.open("https://app.mostchats.com", "_blank");
  };

  const handlePlayStore = () => {
    // Hier den echten Play Store Link einfügen
    window.open("#", "_blank");
  };

  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            {/* Logo badge */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/267bf51e-9711-4333-aafd-bcd459c36595.png" 
                  alt="MostChats Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-yellow-400 font-semibold text-lg">MostChats</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                die app für echte
                <br />
                <span className="text-yellow-400">verbindungen</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Eine neue Art von Dating-App, die dir hilft, dein Leben zu organisieren, 
                deine Ziele zu erreichen und echte Verbindungen zu knüpfen.
              </p>
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handlePlayStore}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-2xl flex items-center space-x-3 transition-all duration-300 shadow-lg"
              >
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Play className="h-4 w-4 text-white fill-current" />
                </div>
                <span>App Store</span>
              </Button>
              
              <Button
                onClick={handleWebVersion}
                variant="outline"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-yellow-400 px-8 py-6 text-lg font-semibold rounded-2xl flex items-center space-x-3 transition-all duration-300"
              >
                <Globe className="h-5 w-5" />
                <span>XMQO</span>
              </Button>
            </div>
          </div>

          {/* Right side - Phone mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-fade-in animation-delay-500">
              {/* Phone mockup 1 */}
              <div className="relative z-20 w-64 h-[520px] bg-gray-800 rounded-[3rem] p-2 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <div className="w-full h-full bg-yellow-400 rounded-[2.5rem] flex flex-col items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 rounded-t-[2.5rem] flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="mt-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <img 
                        src="/lovable-uploads/267bf51e-9711-4333-aafd-bcd459c36595.png" 
                        alt="MostChats Logo" 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="text-gray-900 font-bold text-xl">MostChats</h3>
                    <p className="text-gray-700 text-sm px-4">
                      Deine neue Dating-App für authentische Verbindungen
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone mockup 2 */}
              <div className="absolute top-12 -left-20 z-10 w-64 h-[520px] bg-gray-800 rounded-[3rem] p-2 shadow-2xl transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
                <div className="w-full h-full bg-gray-900 rounded-[2.5rem] flex flex-col p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t-[2.5rem] flex items-center justify-center">
                    <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="mt-12 space-y-4">
                    <div className="bg-gray-800 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                        <div className="text-white text-sm">Anna, 24</div>
                      </div>
                      <div className="text-gray-300 text-xs">
                        Hey! Wie läuft dein Tag? 😊
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                        <div className="text-white text-sm">Max, 26</div>
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
    </section>
  );
};

export default Hero;
