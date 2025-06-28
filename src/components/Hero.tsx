
import { Button } from "@/components/ui/button";
import { Play, Globe, Sparkles, Users, MessageCircle } from "lucide-react";

const Hero = () => {
  const handleWebVersion = () => {
    window.open("https://app.mostchats.com", "_blank");
  };

  const handlePlayStore = () => {
    // Hier den echten Play Store Link einfügen
    window.open("#", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 px-4 py-2 rounded-full border border-purple-500/30 animate-scale-in">
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm text-purple-300">Neue Dating-App für echte Verbindungen</span>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent leading-tight animate-slide-in-right">
              MostChats
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 font-light max-w-4xl mx-auto">
              Entdecke echte Verbindungen und authentische Gespräche
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Die modernste Dating-App für Menschen, die mehr als nur oberflächliche Matches suchen. 
              Bei uns stehen echte Gespräche und bedeutungsvolle Beziehungen im Mittelpunkt.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              onClick={handlePlayStore}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 min-w-[280px] group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Play className="h-5 w-5 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">Jetzt kostenlos bei</div>
                  <div className="font-bold text-xl">Google Play</div>
                </div>
              </div>
            </Button>

            <Button
              onClick={handleWebVersion}
              variant="outline"
              size="lg"
              className="border-2 border-purple-400 text-purple-300 hover:bg-purple-500/20 hover:border-purple-300 px-10 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 min-w-[280px] group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="text-sm opacity-90">Sofort starten mit</div>
                  <div className="font-bold text-xl">Web Version</div>
                </div>
              </div>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center space-y-2 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-8 w-8 text-purple-400" />
                <div className="text-4xl font-bold text-purple-400">15K+</div>
              </div>
              <div className="text-gray-400">Aktive Nutzer</div>
            </div>
            <div className="text-center space-y-2 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2">
                <MessageCircle className="h-8 w-8 text-pink-400" />
                <div className="text-4xl font-bold text-pink-400">100K+</div>
              </div>
              <div className="text-gray-400">Erfolgreiche Matches</div>
            </div>
            <div className="text-center space-y-2 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-8 w-8 text-purple-400" />
                <div className="text-4xl font-bold text-purple-400">98%</div>
              </div>
              <div className="text-gray-400">Zufriedenheitsrate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
