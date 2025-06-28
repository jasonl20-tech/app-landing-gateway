
import { Button } from "@/components/ui/button";
import { Play, Globe, Smartphone, Download as DownloadIcon, Star, Users } from "lucide-react";

const Download = () => {
  const handleWebVersion = () => {
    window.open("https://app.mostchats.com", "_blank");
  };

  const handlePlayStore = () => {
    // Hier den echten Play Store Link einfügen
    window.open("#", "_blank");
  };

  return (
    <section id="download" className="py-32 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-md rounded-3xl p-12 lg:p-16 border border-slate-600/30 shadow-2xl">
          <div className="text-center space-y-12">
            {/* Header */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-3xl flex items-center justify-center border-2 border-indigo-500/40 animate-pulse">
                  <Smartphone className="h-12 w-12 text-indigo-300" />
                </div>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white">
                Starte jetzt mit <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">MostChats</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Wähle deine bevorzugte Plattform und beginne noch heute deine Reise zu echten Verbindungen. 
                Kostenlos verfügbar für alle Geräte.
              </p>
            </div>
            
            {/* Download Buttons */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Google Play Store */}
              <div className="bg-gradient-to-br from-emerald-800/30 to-emerald-700/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 group">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <Play className="h-6 w-6 text-emerald-400 fill-current" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Google Play Store</h3>
                  </div>
                  
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-sm">4.8 Sterne • 1000+ Bewertungen</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm">10.000+ Downloads</span>
                    </div>
                  </div>

                  <Button
                    onClick={handlePlayStore}
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-6 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 group-hover:shadow-xl"
                  >
                    <DownloadIcon className="mr-3 h-5 w-5" />
                    Jetzt herunterladen
                  </Button>
                </div>
              </div>

              {/* Web Version */}
              <div className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 group">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Web Version</h3>
                  </div>
                  
                  <div className="space-y-3 text-slate-300">
                    <div className="flex items-center justify-center space-x-2">
                      <Smartphone className="h-4 w-4 text-indigo-400" />
                      <span className="text-sm">Alle Geräte • Kein Download nötig</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="h-4 w-4 text-purple-400" />
                      <span className="text-sm">Sofort verfügbar • Immer aktuell</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleWebVersion}
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-300 px-8 py-6 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl"
                  >
                    <Globe className="mr-3 h-5 w-5" />
                    Web App öffnen
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2 text-slate-300">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">100% Kostenlos</span>
                <span className="text-sm text-slate-400">Keine versteckten Kosten</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-slate-300">
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse animation-delay-500"></div>
                <span className="font-semibold">Ohne Werbung</span>
                <span className="text-sm text-slate-400">Ungestörtes Dating-Erlebnis</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-slate-300">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
                <span className="font-semibold">Premium verfügbar</span>
                <span className="text-sm text-slate-400">Erweiterte Features optional</span>
              </div>
            </div>
            
            <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Durch das Herunterladen oder die Nutzung der Web-App stimmst du unseren 
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors"> Nutzungsbedingungen</a> und 
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors"> Datenschutzerklärung</a> zu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
