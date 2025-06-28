
import { MessageCircle, Heart, Shield, Filter, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Echte Gespräche",
      description: "Führe authentische Unterhaltungen mit Menschen, die deine Interessen teilen"
    },
    {
      icon: Filter,
      title: "Smart Filter",
      description: "Finde genau die Person, die zu dir passt mit unseren intelligenten Filtern"
    },
    {
      icon: Shield,
      title: "Sicher & Privat",
      description: "Deine Daten sind bei uns sicher. Vollständige Privatsphäre garantiert"
    },
    {
      icon: Heart,
      title: "Echte Matches",
      description: "Qualität vor Quantität - wir bringen Menschen zusammen, die wirklich harmonieren"
    },
    {
      icon: Users,
      title: "Aktive Community",
      description: "Über 10.000 aktive Nutzer warten darauf, dich kennenzulernen"
    },
    {
      icon: Sparkles,
      title: "Premium Features",
      description: "Erweiterte Funktionen für das perfekte Dating-Erlebnis"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Warum <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MostChats?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Entdecke die Features, die MostChats zur besten Dating-App für echte Verbindungen machen
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-purple-500/30">
                    <feature.icon className="h-8 w-8 text-purple-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
