
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import AdditionalContent from "@/components/AdditionalContent";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1f00b6' }}>
      <Header />
      <Hero />
      <AdditionalContent />
      <Footer />
    </div>
  );
};

export default Index;
