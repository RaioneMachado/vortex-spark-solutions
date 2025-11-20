import { Card } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "Crescimento de Vendas",
      before: "R$ 50K/mês",
      after: "R$ 200K/mês",
      increase: "+300%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Alcance Digital",
      before: "5K seguidores",
      after: "50K seguidores",
      increase: "+900%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Taxa de Conversão",
      before: "1.2%",
      after: "8.5%",
      increase: "+608%",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossos <span className="gradient-text">Resultados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformamos negócios com resultados reais e mensuráveis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${result.color} flex items-center justify-center glow-primary`}>
                    <Icon className="w-8 h-8 text-background" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">
                    {result.title}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Antes</p>
                        <p className="text-lg font-semibold text-foreground/80">{result.before}</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                      <div className="space-y-1 text-right">
                        <p className="text-sm text-muted-foreground">Depois</p>
                        <p className="text-lg font-semibold text-primary">{result.after}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform">
                          {result.increase}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground italic">
            *Resultados baseados em estudos de caso reais de nossos clientes
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
