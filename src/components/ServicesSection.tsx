import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Megaphone, BarChart3, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Estratégia Digital",
    description: "Desenvolvemos estratégias personalizadas para maximizar seu alcance e conversão online.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Implementamos táticas de crescimento acelerado com foco em resultados escaláveis.",
  },
  {
    icon: Megaphone,
    title: "Gestão de Mídias Sociais",
    description: "Criamos e gerenciamos campanhas impactantes nas principais redes sociais.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Transformamos dados em insights acionáveis para decisões estratégicas certeiras.",
  },
  {
    icon: Users,
    title: "Branding & Posicionamento",
    description: "Construímos marcas fortes e memoráveis que se destacam no mercado.",
  },
  {
    icon: Zap,
    title: "Performance Marketing",
    description: "Otimizamos campanhas pagas para gerar máximo retorno sobre investimento.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de marketing para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center glow-primary group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-7 h-7 text-background" />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
