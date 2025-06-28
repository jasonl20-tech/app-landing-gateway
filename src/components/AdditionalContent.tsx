
import { Heart, Shield, Users, Star, MessageSquare, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AdditionalContent = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: "50K+", label: "Aktive Nutzer", icon: Users },
            { number: "98%", label: "Zufriedenheit", icon: Star },
            { number: "1M+", label: "Matches", icon: Heart },
            { number: "24/7", label: "Support", icon: MessageSquare }
          ].map((stat, index) => (
            <div key={index} className="bg-purple-500/10 backdrop-blur-md rounded-2xl p-6 border border-purple-400/20 text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-purple-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card className="bg-purple-500/10 backdrop-blur-md border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">100% Sicher</h3>
                  <p className="text-gray-400">Deine Privatsphäre ist geschützt</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Modernste Verschlüsselung und Datenschutzmaßnahmen sorgen dafür, 
                dass deine persönlichen Informationen immer sicher bleiben.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pink-500/10 backdrop-blur-md border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center">
                  <Zap className="h-8 w-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Blitzschnell</h3>
                  <p className="text-gray-400">Optimiert für beste Performance</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Unsere App läuft reibungslos auf allen Geräten und bietet dir 
                ein schnelles, reaktionsfreudiges Dating-Erlebnis.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-purple-400/30 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-purple-500/30 rounded-3xl flex items-center justify-center border border-purple-400/40">
              <img 
                src="/lovable-uploads/267bf51e-9711-4333-aafd-bcd459c36595.png" 
                alt="MostChats Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit für echte Verbindungen?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Werde Teil unserer wachsenden Community und entdecke Menschen, 
            die wirklich zu dir passen. Kostenlos und ohne Verpflichtungen.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              Kostenlos registrieren
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              Keine versteckten Kosten
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              Jederzeit kündbar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalContent;
