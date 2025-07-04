
import BusCard from "./BusCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchResultsProps {
  searchData: any;
  onBack: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchData, onBack }) => {
  // Données de bus simulées
  const buses = [
    {
      id: "1",
      company: "TransExpress",
      departureTime: "06:00",
      arrivalTime: "10:30",
      duration: "4h 30m",
      price: 25,
      seatsAvailable: 12,
      rating: 4.5,
      amenities: ["WiFi", "Climatisation", "Toilettes"],
      busType: "Autocar de luxe"
    },
    {
      id: "2",
      company: "BusConfort",
      departureTime: "08:15",
      arrivalTime: "12:45",
      duration: "4h 30m",
      price: 22,
      seatsAvailable: 8,
      rating: 4.2,
      amenities: ["WiFi", "Prises électriques", "Snacks"],
      busType: "Bus standard"
    },
    {
      id: "3",
      company: "RapidLine",
      departureTime: "14:30",
      arrivalTime: "19:00",
      duration: "4h 30m",
      price: 28,
      seatsAvailable: 15,
      rating: 4.7,
      amenities: ["WiFi", "Climatisation", "Divertissement"],
      busType: "Bus Premium"
    },
    {
      id: "4",
      company: "CityBus",
      departureTime: "20:00",
      arrivalTime: "00:30",
      duration: "4h 30m",
      price: 18,
      seatsAvailable: 6,
      rating: 4.0,
      amenities: ["Climatisation", "Toilettes"],
      busType: "Bus économique"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-4 text-gray-600 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Nouvelle recherche
        </Button>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {searchData.departure} → {searchData.arrival}
          </h2>
          <p className="text-gray-600">
            {searchData.departureDate?.toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
            {searchData.returnDate && (
              <span> • Retour: {searchData.returnDate.toLocaleDateString('fr-FR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            )}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {buses.length} bus disponibles
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {buses.map((bus) => (
          <BusCard key={bus.id} bus={bus} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
