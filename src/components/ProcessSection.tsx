import { Target, BarChart3, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Target,
    title: "Diagnóstico e Estratégia",
    description: "Analisamos profundamente seu negócio, mercado e concorrência para criar uma estratégia personalizada e baseada em dados concretos."
  },
  {
    icon: BarChart3,
    title: "Planejamento e Execução",
    description: "Desenvolvemos um plano de ação detalhado com KPIs claros e implementamos as campanhas utilizando as melhores práticas do mercado."
  },
  {
    icon: Rocket,
    title: "Lançamento e Monitoramento",
    description: "Colocamos suas campanhas no ar e monitoramos cada métrica em tempo real para garantir performance máxima desde o primeiro dia."
  },
  {
    icon: RefreshCw,
    title: "Otimização Contínua",
    description: "Análise constante dos resultados e ajustes estratégicos para melhorar continuamente o ROI e alcançar metas cada vez mais ambiciosas."
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso <span className="gradient-text">Processo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma metodologia comprovada que transforma desafios em resultados extraordinários
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-hero blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-10 h-10 text-background" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-background font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;