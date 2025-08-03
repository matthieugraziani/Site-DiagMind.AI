import { Upload, Zap, FileCheck, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aiAnalysisImage from "@/assets/ai-analysis.jpg";

const steps = [
  {
    icon: Upload,
    title: "Upload de l'image",
    description: "Téléchargez votre image médicale en format DICOM, JPG ou PNG de manière sécurisée",
    step: "01"
  },
  {
    icon: Zap,
    title: "Analyse IA",
    description: "Notre intelligence artificielle analyse l'image en quelques secondes avec une précision élevée",
    step: "02"
  },
  {
    icon: FileCheck,
    title: "Résultats détaillés",
    description: "Obtenez un rapport complet avec les anomalies détectées et leur localisation précise",
    step: "03"
  },
  {
    icon: Download,
    title: "Export du rapport",
    description: "Téléchargez le rapport au format PDF pour l'intégrer à votre dossier patient",
    step: "04"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="comment-ca-marche" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un processus simple et rapide pour obtenir une aide au diagnostic fiable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-card-medical transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold text-accent mr-3">{step.step}</span>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medical">
              <img 
                src={aiAnalysisImage} 
                alt="Analyse IA des images médicales" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-card-medical">
              <div className="text-center">
                <div className="text-2xl font-bold">98.5%</div>
                <div className="text-sm">Précision moyenne</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">2 sec</div>
            <div className="text-muted-foreground">Temps d'analyse moyen</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">Disponibilité</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">RGPD</div>
            <div className="text-muted-foreground">Conformité garantie</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;