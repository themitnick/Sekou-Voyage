
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, ArrowLeftRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  onSearch: (searchData: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [isReturnTrip, setIsReturnTrip] = useState(false);

  const handleSwapCities = () => {
    const temp = departure;
    setDeparture(arrival);
    setArrival(temp);
  };

  const handleSearch = () => {
    if (!departure || !arrival || !departureDate) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    onSearch({
      departure,
      arrival,
      departureDate,
      returnDate: isReturnTrip ? returnDate : null,
      isReturnTrip
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="oneWay"
            name="tripType"
            checked={!isReturnTrip}
            onChange={() => setIsReturnTrip(false)}
            className="text-primary"
          />
          <Label htmlFor="oneWay">Aller simple</Label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="roundTrip"
            name="tripType"
            checked={isReturnTrip}
            onChange={() => setIsReturnTrip(true)}
            className="text-primary"
          />
          <Label htmlFor="roundTrip">Aller-retour</Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2">
            <div className="flex-1">
              <Label htmlFor="departure" className="text-sm font-medium text-gray-700">
                <MapPin className="inline h-4 w-4 mr-1" />
                Départ
              </Label>
              <Input
                id="departure"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder="Ville de départ"
                className="mt-1"
              />
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSwapCities}
              className="mt-6 p-2 hover:bg-primary/10"
            >
              <ArrowLeftRight className="h-4 w-4 text-primary" />
            </Button>
            
            <div className="flex-1">
              <Label htmlFor="arrival" className="text-sm font-medium text-gray-700">
                <MapPin className="inline h-4 w-4 mr-1" />
                Arrivée
              </Label>
              <Input
                id="arrival"
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                placeholder="Ville d'arrivée"
                className="mt-1"
              />
            </div>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-gray-700">Date de départ</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal mt-1",
                  !departureDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {departureDate ? format(departureDate, "dd/MM/yyyy", { locale: fr }) : "Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                disabled={(date) => date < new Date()}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {isReturnTrip && (
          <div>
            <Label className="text-sm font-medium text-gray-700">Date de retour</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal mt-1",
                    !returnDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {returnDate ? format(returnDate, "dd/MM/yyyy", { locale: fr }) : "Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  disabled={(date) => date < (departureDate || new Date())}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        )}

        <Button onClick={handleSearch} className="h-10 gradient-bg text-white font-medium">
          Rechercher
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
