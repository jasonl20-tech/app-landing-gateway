
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Users, Shield, Zap, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const AdditionalContent = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#features');
    if (element) observer.observe(element);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/20 via-transparent to-purple-800/20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Features Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Warum <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">MostChats</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Entdecke die Features, die MostChats zur perfekten Dating-App für echte Verbindungen machen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Heart,
              title: "Echte Verbindungen",
              description: "Algorithmus fokussiert auf Persönlichkeit und gemeinsame Interessen",
              delay: "0s"
            },
            {
              icon: MessageCircle,
              title: "Smart Matching",
              description: "KI-basierte Vorschläge für perfekte Matches",
              delay: "0.2s"
            },
            {
              icon: Shield,
              title: "100% Sicher",
              description: "Verifizierte Profile und sichere Kommunikation",
              delay: "0.4s"
            },
            {
              icon: Users,
              title: "Community",
              description: "Aktive Community von authentischen Singles",
              delay: "0.6s"
            },
            {
              icon: Zap,
              title: "Instant Connect",
              description: "Sofortige Benachrichtigungen bei neuen Matches",
              delay: "0.8s"
            },
            {
              icon: Sparkles,
              title: "Premium Features",
              description: "Erweiterte Filter und exklusive Funktionen",
              delay: "1s"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: feature.delay }}
            >
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-md border border-indigo-500/20 rounded-3xl p-8 hover:border-indigo-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-indigo-400/30">
                    <feature.icon className="h-8 w-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-md border border-indigo-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-3xl flex items-center justify-center mx-auto mb-8 border-2 border-indigo-400/40 animate-pulse">
                <Heart className="h-10 w-10 text-indigo-400" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Bereit für echte <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">Verbindungen</span>?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Starte noch heute deine Reise zu authentischen Beziehungen und finde Menschen, die wirklich zu dir passen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                  onClick={() => window.open("https://play.google.com/store/apps", "_blank")}
                >
                  Jetzt kostenlos starten
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  onClick={() => window.open("https://app.mostchats.com", "_blank")}
                >
                  Web Version testen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalContent;
