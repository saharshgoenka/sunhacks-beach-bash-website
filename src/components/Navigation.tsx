
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-sand-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="font-fredoka font-bold text-2xl text-primary cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            ☀️ SunHacks
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('schedule')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Schedule
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('sponsors')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sponsors
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-fredoka">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                Schedule
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('sponsors')}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                Sponsors
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-foreground hover:text-primary transition-colors text-left px-4"
              >
                FAQ
              </button>
              <div className="px-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-fredoka">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
