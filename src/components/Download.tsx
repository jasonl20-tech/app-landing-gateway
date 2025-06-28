
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, Smartphone } from "lucide-react";

const Download = () => {
  const handleApkDownload = () => {
    // Replace with your actual APK download link
    window.open("#", "_blank");
  };

  const handlePlayStoreClick = () => {
    // Replace with your actual Play Store link
    window.open("#", "_blank");
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-3xl p-8 lg:p-12 border border-purple-500/20 backdrop-blur-sm">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl flex items-center justify-center border border-purple-500/40">
                  <Smartphone className="h-10 w-10 text-purple-300" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Lade <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MostChats</span> herunter
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Beginne noch heute deine Reise zu echten Verbindungen. Kostenlos verfügbar für Android.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Play Store Button */}
              <Button
                onClick={handlePlayStoreClick}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25 min-w-[200px]"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold">▶</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-90">Jetzt bei</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </div>
              </Button>
              
              {/* APK Download Button */}
              <Button
                onClick={handleApkDownload}
                variant="outline"
                size="lg"
                className="border-2 border-purple-400 text-purple-300 hover:bg-purple-500/20 hover:border-purple-300 px-8 py-6 text-lg font-semibold rounded-2xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
              >
                <div className="flex items-center space-x-3">
                  <DownloadIcon className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Direkt</div>
                    <div className="font-bold">APK Download</div>
                  </div>
                </div>
              </Button>
            </div>
            
            <div className="flex justify-center gap-8 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Keine Werbung</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Premium verfügbar</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Durch das Herunterladen stimmst du unseren Nutzungsbedingungen und Datenschutzerklärung zu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
