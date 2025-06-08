
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import BeachElements from "@/components/BeachElements";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden beach-gradient">
      <Navigation />
      <BeachElements />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <SponsorsSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
