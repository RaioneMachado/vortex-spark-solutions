import { Instagram, Linkedin, Facebook } from "lucide-react";
import vortexLogo from "@/assets/vortex-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center glow-primary">
                <span className="text-2xl font-bold text-background">V</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Vortex</span>
            </div>
            <p className="text-muted-foreground">
              Transformando negócios através de estratégias de marketing inovadoras e orientadas por dados.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-gradient-hero hover:glow-primary transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-gradient-hero hover:glow-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-gradient-hero hover:glow-primary transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 text-center">
          <div className="flex flex-col items-center gap-3">
            <img src={vortexLogo} alt="Vortex Logo" className="h-10 w-auto" />
            <p className="text-muted-foreground">
              © 2025 Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
