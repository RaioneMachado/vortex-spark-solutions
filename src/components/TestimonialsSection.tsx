import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO",
    company: "TechStart Solutions",
    content: "A Vortex transformou completamente nossa presença digital. Em 6 meses, aumentamos nosso tráfego em 300% e as conversões triplicaram. A equipe é extremamente profissional e orientada a resultados.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Mariana Costa",
    role: "Diretora de Marketing",
    company: "Bella Cosméticos",
    content: "Trabalhar com a Vortex foi a melhor decisão para nossa empresa. Eles não apenas criaram campanhas incríveis, mas também nos educaram sobre o mercado digital. ROI excepcional!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Roberto Mendes",
    role: "Fundador",
    company: "FitLife Academia",
    content: "A estratégia desenvolvida pela Vortex nos ajudou a conquistar mais de 500 novos alunos em apenas 4 meses. O atendimento é impecável e os resultados falam por si.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    name: "Ana Paula Rodrigues",
    role: "Proprietária",
    company: "Delícias da Vovó",
    content: "Como uma pequena empresa, eu não sabia por onde começar no marketing digital. A Vortex me guiou em cada passo e hoje meu delivery online representa 70% do faturamento!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    name: "Fernando Alves",
    role: "Diretor Comercial",
    company: "AutoPrime Veículos",
    content: "Resultados impressionantes em todas as métricas. A Vortex entende profundamente o mercado automotivo e criou campanhas que realmente convertem. Recomendo fortemente!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    name: "Juliana Santos",
    role: "CEO",
    company: "EduTech Brasil",
    content: "A parceria com a Vortex elevou nossa empresa a outro patamar. Profissionalismo, criatividade e resultados concretos. Nosso faturamento cresceu 250% no último ano!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de empresas que transformaram seus resultados com a Vortex
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow-primary transition-all duration-500 animate-fade-in-up bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-10 h-10 text-primary/30" />
                
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;