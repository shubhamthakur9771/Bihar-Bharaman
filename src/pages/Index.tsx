import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import PlanSection from "@/components/PlanSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <DestinationsSection />
      <AboutSection />
      <PlanSection />
      <Footer />
    </div>
  );
};

export default Index;
