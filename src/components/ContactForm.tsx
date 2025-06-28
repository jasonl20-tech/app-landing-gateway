
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Hier würde normalerweise ein API-Call stattfinden
      // Da wir nur Frontend haben, simulieren wir das Senden
      const mailtoLink = `mailto:lohrejason5@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
      )}`;
      
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für deine Nachricht. Wir melden uns bald bei dir!",
      });

      // Formular zurücksetzen
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden deiner Nachricht. Bitte versuche es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-slate-900/30"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-smoke"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20 rounded-full px-4 py-2 mb-6">
            <Mail className="h-5 w-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">Kontakt</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Lass uns <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">sprechen</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Hast du Fragen zu MostChats oder möchtest du Feedback geben? Wir freuen uns auf deine Nachricht!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-md border border-indigo-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-indigo-400" />
                  <span>Kontaktinformationen</span>
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Erreiche uns über verschiedene Kanäle
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-400/30">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">E-Mail</p>
                    <p className="text-slate-300">lohrejason5@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-400/30">
                    <Phone className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Support</p>
                    <p className="text-slate-300">24/7 verfügbar</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-400/30">
                    <MapPin className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Antwortzeit</p>
                    <p className="text-slate-300">Innerhalb von 24 Stunden</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-md border border-indigo-500/30">
            <CardHeader>
              <CardTitle className="text-white">Schreib uns eine Nachricht</CardTitle>
              <CardDescription className="text-slate-300">
                Fülle das Formular aus und wir melden uns bei dir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800/40 border-indigo-500/30 text-white placeholder:text-slate-400 focus:border-indigo-400"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-Mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-800/40 border-indigo-500/30 text-white placeholder:text-slate-400 focus:border-indigo-400"
                      placeholder="deine@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">Betreff</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-800/40 border-indigo-500/30 text-white placeholder:text-slate-400 focus:border-indigo-400"
                    placeholder="Worum geht es?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Nachricht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-slate-800/40 border-indigo-500/30 text-white placeholder:text-slate-400 focus:border-indigo-400 resize-none"
                    placeholder="Erzähl uns, wie wir dir helfen können..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Wird gesendet...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Nachricht senden</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
