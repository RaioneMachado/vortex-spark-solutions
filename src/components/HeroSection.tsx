import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vortex Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-glow/20 rounded-full blur-[100px] animate-glow-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Assessoria em Marketing Digital</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transforme Seu Negócio com{" "}
            <span className="gradient-text text-glow">Estratégias Vencedoras</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Impulsionamos empresas com soluções de marketing inovadoras e resultados mensuráveis
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-hero hover:opacity-90 text-background font-semibold text-lg px-8 glow-primary group"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 text-lg px-8"
            >
              Conhecer Serviços
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">150+</div>
              <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">300%</div>
              <div className="text-sm text-muted-foreground">ROI Médio</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
