import { Stethoscope, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">MediAI Diagnostic</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#comment-ca-marche" className="text-foreground hover:text-primary transition-colors">
              Comment ça marche
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Connexion</Button>
            <Button variant="medical">Commencer</Button>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;