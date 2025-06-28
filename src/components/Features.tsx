
import { Heart, Shield, Filter, Users, Sparkles, Zap, Star, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Echte Gespräche",
      description: "Führe authentische Unterhaltungen mit Menschen, die deine Interessen teilen",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Filter,
      title: "Smart Matching",
      description: "Unsere KI findet Menschen, die wirklich zu dir passen - basierend auf mehr als nur Fotos",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "100% Sicher",
      description: "Deine Daten sind bei uns sicher. Vollständige Privatsphäre und Datenschutz garantiert",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Heart,
      title: "Echte Matches",
      description: "Qualität vor Quantität - wir bringen Menschen zusammen, die wirklich harmonieren",
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Users,
      title: "Aktive Community",
      description: "Über 15.000 aktive Nutzer aus Deutschland warten darauf, dich kennenzulernen",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Blitzschnell",
      description: "Modernste Technologie für ein reibungsloses und schnelles Dating-Erlebnis",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Sparkles,
      title: "Premium Features",
      description: "Erweiterte Funktionen wie Super-Likes, Boosts und exklusive Filter",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Star,
      title: "Top Bewertungen",
      description: "98% Zufriedenheitsrate und über 1000 positive Bewertungen im App Store",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section id="features" className="py-32 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600/30 mb-6">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-sm text-slate-300">Warum MostChats?</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Features, die <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">begeistern</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Entdecke die innovativen Features, die MostChats zur modernsten Dating-App für echte Verbindungen machen
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-indigo-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="mb-6 flex justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed flex-grow group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional content */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-600/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Bereit für echte Verbindungen?
            </h3>
            <p className="text-xl text-slate-300 mb-6">
              Werde Teil unserer wachsenden Community und finde Menschen, die wirklich zu dir passen.
            </p>
            <div className="flex justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Kostenlos registrieren
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                Keine versteckten Kosten
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                Jederzeit kündbar
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
