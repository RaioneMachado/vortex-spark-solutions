import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Equipe especializada com experiência comprovada",
  "Metodologia baseada em dados e resultados",
  "Estratégias personalizadas para seu negócio",
  "Acompanhamento e otimização constantes",
  "Transparência total em relatórios e métricas",
  "Suporte dedicado e consultoria estratégica",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Por Que Escolher a{" "}
              <span className="gradient-text">Vortex?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos uma assessoria de marketing digital focada em gerar resultados reais para empresas que querem crescer. 
              Nossa missão é transformar desafios em oportunidades através de estratégias inovadoras e data-driven.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com anos de experiência no mercado, desenvolvemos um método exclusivo que combina criatividade, 
              tecnologia e análise profunda para entregar campanhas que convertem.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in-up">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-hero flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-background" />
                </div>
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
