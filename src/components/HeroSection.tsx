import { Upload, ArrowRight, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/medical-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Diagnostic médical
                <span className="block text-accent">assisté par IA</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Révolutionnez vos diagnostics en imagerie médicale grâce à l'intelligence artificielle de pointe
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="group">
                <Upload className="mr-2 h-5 w-5" />
                Analyser une image
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Découvrir nos services
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Brain className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-semibold">IA Avancée</div>
                  <div className="text-white/80 text-sm">Algorithmes de pointe</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-semibold">Sécurisé</div>
                  <div className="text-white/80 text-sm">Données protégées</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <Card className="p-8 bg-white/95 backdrop-blur shadow-card-medical">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Uploadez votre image médicale
                  </h3>
                  <p className="text-muted-foreground">
                    Formats supportés: DICOM, JPG, PNG
                  </p>
                </div>
                
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Glissez-déposez votre fichier ici ou
                  </p>
                  <Button variant="link" className="p-0 h-auto font-semibold">
                    cliquez pour sélectionner
                  </Button>
                </div>

                <Button className="w-full" size="lg" variant="medical">
                  Commencer l'analyse
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;