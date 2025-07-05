
import { Bus, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-primary rounded-lg">
              <Bus className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary">Sekou Voyage</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Accueil</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Mes Réservations</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Aide</a>
            <Button variant="outline" size="sm" className="ml-4">
              <User className="h-4 w-4 mr-2" />
              Connexion
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
