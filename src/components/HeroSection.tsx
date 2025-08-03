import { ArrowRight, Brain, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                DiagMind.AI
                <span className="block text-accent">Innovation en santé</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Pionniers de l'intelligence artificielle appliquée à l'imagerie médicale
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="group">
                Découvrir notre mission
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Notre expertise
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center space-y-3">
                <Brain className="h-8 w-8 text-accent" />
                <div className="text-center">
                  <div className="font-semibold">Innovation</div>
                  <div className="text-white/80 text-sm">Recherche de pointe</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Shield className="h-8 w-8 text-accent" />
                <div className="text-center">
                  <div className="font-semibold">Excellence</div>
                  <div className="text-white/80 text-sm">Standards élevés</div>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Brain className="h-8 w-8 text-accent" />
                <div className="text-center">
                  <div className="font-semibold">Vision</div>
                  <div className="text-white/80 text-sm">Futur de la santé</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;