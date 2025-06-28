
import { Heart, Shield, Users, Star, MessageSquare, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const AdditionalContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('features');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: '#1f00b6' }}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: "50K+", label: "Aktive Nutzer", icon: Users },
            { number: "98%", label: "Zufriedenheit", icon: Star },
            { number: "1M+", label: "Matches", icon: Heart },
            { number: "24/7", label: "Support", icon: MessageSquare }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-purple-500/10 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-purple-400/20 text-center hover:bg-purple-500/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 group"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s ease-out ${index * 100}ms`
              }}
            >
              <div className="flex justify-center mb-2 lg:mb-3">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-purple-500/20 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-4 w-4 lg:h-6 lg:w-6 text-purple-400" />
                </div>
              </div>
              <div className="text-xl lg:text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className={`grid md:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="bg-purple-500/10 backdrop-blur-md border-purple-400/20 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-purple-500/20 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 lg:h-8 lg:w-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-white">100% Sicher</h3>
                  <p className="text-sm lg:text-base text-gray-400">Deine Privatsphäre ist geschützt</p>
                </div>
              </div>
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                Modernste Verschlüsselung und Datenschutzmaßnahmen sorgen dafür, 
                dass deine persönlichen Informationen immer sicher bleiben.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pink-500/10 backdrop-blur-md border-pink-400/20 hover:border-pink-400/40 hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center space-x-3 lg:space-x-4 mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-pink-500/20 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-white">Blitzschnell</h3>
                  <p className="text-sm lg:text-base text-gray-400">Optimiert für beste Performance</p>
                </div>
              </div>
              <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                Unsere App läuft reibungslos auf allen Geräten und bietet dir 
                ein schnelles, reaktionsfreudiges Dating-Erlebnis.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className={`bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 border border-purple-400/30 text-center hover:border-purple-400/50 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="flex justify-center mb-4 lg:mb-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-purple-500/30 rounded-2xl lg:rounded-3xl flex items-center justify-center border border-purple-400/40 hover:scale-110 transition-transform duration-300">
              <img 
                src="/lovable-uploads/267bf51e-9711-4333-aafd-bcd459c36595.png" 
                alt="MostChats Logo" 
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
              />
            </div>
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 lg:mb-4">
            Bereit für echte Verbindungen?
          </h3>
          <p className="text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Werde Teil unserer wachsenden Community und entdecke Menschen, 
            die wirklich zu dir passen. Kostenlos und ohne Verpflichtungen.
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 text-xs lg:text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              Kostenlos registrieren
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              Keine versteckten Kosten
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              Jederzeit kündbar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalContent;
