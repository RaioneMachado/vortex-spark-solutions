import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar seu marketing? Fale com nossos especialistas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-hero hover:opacity-90 text-background font-semibold text-lg glow-primary"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0 glow-primary">
                  <Mail className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">E-mail</h3>
                  <p className="text-muted-foreground">assessoriavorttex@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0 glow-primary">
                  <Phone className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Telefone</h3>
                  <p className="text-muted-foreground">+55 (94) 98406-9269</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center flex-shrink-0 glow-primary">
                  <MapPin className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Localização</h3>
                  <p className="text-muted-foreground">São Félix do Xingu - PA</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
