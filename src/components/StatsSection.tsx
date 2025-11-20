import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Crescimento Médio em ROI",
    description: "Nossos clientes triplicam o retorno sobre investimento em média"
  },
  {
    icon: Users,
    value: "500+",
    label: "Empresas Atendidas",
    description: "Negócios de todos os tamanhos confiam em nossa expertise"
  },
  {
    icon: Award,
    value: "98%",
    label: "Taxa de Satisfação",
    description: "Clientes que recomendam nossos serviços para outros"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Suporte Disponível",
    description: "Equipe dedicada pronta para atender suas necessidades"
  }
];

const StatsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIyMiIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados Que <span className="gradient-text">Impressionam</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Números que comprovam nossa excelência em marketing digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-500 animate-fade-in-up hover:shadow-glow-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative space-y-4 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-hero group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-5xl font-bold gradient-text">
                      {stat.value}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;