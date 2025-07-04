
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users, Star } from "lucide-react";

interface BusCardProps {
  bus: {
    id: string;
    company: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    price: number;
    seatsAvailable: number;
    rating: number;
    amenities: string[];
    busType: string;
  };
}

const BusCard: React.FC<BusCardProps> = ({ bus }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{bus.company}</h3>
            <p className="text-sm text-gray-600">{bus.busType}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{bus.rating}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{bus.departureTime}</p>
            <p className="text-sm text-gray-600">Départ</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-px bg-gray-300 flex-1"></div>
              <Clock className="h-4 w-4 text-gray-400" />
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{bus.duration}</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{bus.arrivalTime}</p>
            <p className="text-sm text-gray-600">Arrivée</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{bus.price}€</p>
            <p className="text-sm text-gray-600">par personne</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{bus.seatsAvailable} places disponibles</span>
            </div>
            <div className="flex space-x-1">
              {bus.amenities.slice(0, 3).map((amenity, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>
          
          <Button className="gradient-bg text-white">
            Sélectionner
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusCard;
