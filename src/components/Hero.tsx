
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent leading-tight">
              MostChats
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 font-light">
              Entdecke echte Verbindungen
            </p>
          </div>
          
          <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
            Die modernste Dating-App für authentische Gespräche und bedeutungsvolle Beziehungen. 
            Finde Menschen, die wirklich zu dir passen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Heart className="mr-2 h-5 w-5" />
              Jetzt kostenlos starten
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Mehr erfahren
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">10K+</div>
              <div className="text-sm text-gray-400">Aktive Nutzer</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">50K+</div>
              <div className="text-sm text-gray-400">Matches</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">95%</div>
              <div className="text-sm text-gray-400">Zufriedenheit</div>
            </div>
          </div>
        </div>
        
        {/* Right side - Phone mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone frame */}
            <div className="relative w-72 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl border border-gray-700">
              <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                {/* Phone screen content */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black p-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      MostChats
                    </h2>
                    <p className="text-gray-400 text-sm">Nach Namen, Beschreibung oder Interessen</p>
                  </div>
                  
                  {/* Profile card mockup */}
                  <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-4 border border-purple-500/20">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl mb-4 flex items-center justify-center">
                      <Users className="h-16 w-16 text-purple-300/50" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-semibold">Juliet, 24</h3>
                      <p className="text-gray-400 text-sm">Deutschland</p>
                      <div className="flex gap-2">
                        <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">#dich</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex justify-center gap-4 mt-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/30">
                      <span className="text-red-400">✕</span>
                    </div>
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                      <Heart className="h-5 w-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce animation-delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
