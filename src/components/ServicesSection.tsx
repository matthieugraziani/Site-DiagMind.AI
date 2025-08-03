import { Scan, Heart, Bone, Brain, Wind, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Scan,
    title: "Radiographie",
    description: "Analyse automatique des radiographies thoraciques, osseuses et abdominales avec détection d'anomalies",
    features: ["Détection de fractures", "Pneumonie", "Pathologies osseuses"]
  },
  {
    icon: Brain,
    title: "IRM Cérébrale", 
    description: "Analyse avancée des images IRM du cerveau pour détecter tumeurs, AVC et autres pathologies",
    features: ["Tumeurs cérébrales", "AVC", "Sclérose en plaques"]
  },
  {
    icon: Heart,
    title: "Imagerie Cardiaque",
    description: "Évaluation des images cardiaques pour diagnostiquer les maladies cardiovasculaires",
    features: ["Infarctus", "Cardiomyopathies", "Valvulopathies"]
  },
  {
    icon: Wind,
    title: "Scanner Thoracique",
    description: "Analyse des scanners pulmonaires pour détecter nodules, infections et pathologies",
    features: ["Nodules pulmonaires", "COVID-19", "Embolie pulmonaire"]
  },
  {
    icon: Bone,
    title: "Imagerie Osseuse",
    description: "Détection précise des fractures, arthrose et pathologies osseuses",
    features: ["Fractures complexes", "Arthrose", "Ostéoporose"]
  },
  {
    icon: Eye,
    title: "Rétinographie",
    description: "Analyse du fond d'œil pour le dépistage de la rétinopathie diabétique et du glaucome",
    features: ["Rétinopathie diabétique", "Glaucome", "DMLA"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos Spécialités en Imagerie Médicale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre intelligence artificielle est spécialisée dans l'analyse de différents types d'imagerie médicale 
            pour vous assister dans vos diagnostics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-none"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-primary-light mr-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Pathologies détectées :</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;