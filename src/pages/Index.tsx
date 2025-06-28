
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AdditionalContent from "@/components/AdditionalContent";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <Header />
      <Hero />
      <AdditionalContent />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
