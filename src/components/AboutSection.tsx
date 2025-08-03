import { Award, Users, Zap, Shield, Globe, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "2019",
    label: "Année de création",
    icon: Target
  },
  {
    number: "50+",
    label: "Experts en IA médicale",
    icon: Users
  },
  {
    number: "200+",
    label: "Hôpitaux partenaires",
    icon: Globe
  },
  {
    number: "1M+",
    label: "Images analysées",
    icon: Zap
  }
];

const values = [
  {
    icon: Award,
    title: "Excellence Médicale",
    description: "Nous collaborons avec les meilleurs radiologues et chercheurs pour développer des solutions de pointe."
  },
  {
    icon: Shield,
    title: "Sécurité des Données",
    description: "Conformité RGPD et certification ISO 27001 pour garantir la protection de vos données sensibles."
  },
  {
    icon: Zap,
    title: "Innovation Continue",
    description: "Recherche et développement permanents pour améliorer nos algorithmes d'intelligence artificielle."
  }
];

const AboutSection = () => {
  return (
    <section id="a-propos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Qui sommes-nous ?
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-primary">DiagMind.AI</span> est une entreprise française 
                spécialisée dans l'intelligence artificielle appliquée à l'imagerie médicale. Fondée en 2019 
                par une équipe de chercheurs en IA et de radiologues expérimentés, nous révolutionnons 
                l'aide au diagnostic médical.
              </p>
              
              <p>
                Notre mission est de démocratiser l'accès à des outils de diagnostic avancés pour améliorer 
                la qualité des soins et réduire les délais d'attente dans les établissements de santé du monde entier.
              </p>
              
              <p>
                Basée à Paris avec des équipes à Lyon et Toulouse, DiagMind.AI collabore avec plus de 200 
                hôpitaux et cliniques pour développer des solutions adaptées aux besoins réels du terrain médical.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card-medical transition-all duration-300">
                <CardContent className="space-y-3 p-0">
                  <div className="mx-auto w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Nos Valeurs
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident notre approche de l'innovation en santé numérique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 bg-accent-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-card rounded-2xl p-8 md:p-12 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Notre Vision
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "Faire de l'intelligence artificielle un allié indispensable pour chaque professionnel de santé, 
              en lui offrant des outils précis, fiables et accessibles pour améliorer la prise en charge des patients."
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
              <span>—</span>
              <span>Dr. Sarah Martin, CEO & Co-fondatrice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;