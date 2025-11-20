import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import vortexLogo from "@/assets/vortex-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={vortexLogo} alt="Vortex Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-hero hover:opacity-90 text-background font-semibold glow-primary"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border/50 backdrop-blur-lg animate-fade-in">
            <div className="flex flex-col gap-4 p-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors text-left py-2"
              >
                Sobre
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-hero hover:opacity-90 text-background font-semibold w-full"
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
