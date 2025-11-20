import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Consultoria estratégica gratuita na primeira reunião",
  "Análise completa da sua presença digital",
  "Plano de ação personalizado para seu negócio",
  "Sem compromisso ou taxas ocultas"
];

const CTASection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-card/50 backdrop-blur-xl border border-primary/20 shadow-glow-primary animate-fade-in">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-glow-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
            
            <div className="text-center space-y-8 relative">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
                🚀 Oferta Especial
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Pronto Para <span className="gradient-text">Transformar</span> Seu Negócio?
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Agende uma consulta gratuita e descubra como podemos acelerar seus resultados
              </p>

              <div className="grid md:grid-cols-2 gap-4 py-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-left p-4 rounded-lg bg-background/50 border border-border/30"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  size="lg"
                  className="group text-lg px-8 py-6 bg-gradient-hero hover:shadow-glow-intense transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Agendar Consulta Gratuita
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
                  >
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>

              <p className="text-sm text-muted-foreground">
                ⭐ Junte-se a mais de 500 empresas que já transformaram seus resultados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;