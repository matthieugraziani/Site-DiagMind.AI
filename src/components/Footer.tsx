import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">DiagMind.AI</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Solution d'intelligence artificielle pour l'aide au diagnostic en imagerie médicale.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">Radiographie</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">IRM Cérébrale</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Scanner Thoracique</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Imagerie Cardiaque</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Entreprise</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-accent transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Équipe</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Actualités</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@diagmind.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60">
              © 2024 DiagMind.AI. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-background/60">
              <a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-accent transition-colors">Conditions d'utilisation</a>
              <a href="#" className="hover:text-accent transition-colors">Mentions légales</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;