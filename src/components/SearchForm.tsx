
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Users, Search } from "lucide-react";

interface SearchFormProps {
  onSearch: (data: any) => void;
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchData = {
      departure,
      destination,
      date,
      passengers: parseInt(passengers),
      company
    };
    console.log("Données de recherche:", searchData);
    onSearch(searchData);
  };

  const cities = [
    "Abidjan", "Bouaké", "Yamoussoukro", "San-Pédro", "Korhogo", 
    "Man", "Daloa", "Gagnoa", "Divo", "Abengourou", "Bondoukou"
  ];

  const companies = [
    { value: "utb", label: "UTB" },
    { value: "avs", label: "AVS" },
    { value: "luxury", label: "LUXURY" },
    { value: "momo-transport", label: "MOMO TRANSPORT" },
    { value: "mkt", label: "MKT" }
  ];

  return (
    <Card className="bg-white shadow-xl border-0">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Departure */}
            <div className="space-y-2">
              <Label htmlFor="departure" className="text-sm font-medium text-gray-700">
                <MapPin className="inline h-4 w-4 mr-1" />
                Départ
              </Label>
              <Select value={departure} onValueChange={setDeparture}>
                <SelectTrigger>
                  <SelectValue placeholder="Ville de départ" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Destination */}
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-sm font-medium text-gray-700">
                <MapPin className="inline h-4 w-4 mr-1" />
                Arrivée
              </Label>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger>
                  <SelectValue placeholder="Ville d'arrivée" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Company */}
            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Compagnie
              </Label>
              <Select value={company} onValueChange={setCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir compagnie" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((comp) => (
                    <SelectItem key={comp.value} value={comp.value}>
                      {comp.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                <Calendar className="inline h-4 w-4 mr-1" />
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Passengers */}
            <div className="space-y-2">
              <Label htmlFor="passengers" className="text-sm font-medium text-gray-700">
                <Users className="inline h-4 w-4 mr-1" />
                Passagers
              </Label>
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 passager</SelectItem>
                  <SelectItem value="2">2 passagers</SelectItem>
                  <SelectItem value="3">3 passagers</SelectItem>
                  <SelectItem value="4">4 passagers</SelectItem>
                  <SelectItem value="5">5+ passagers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button type="submit" size="lg" className="px-8">
              <Search className="h-4 w-4 mr-2" />
              Rechercher
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchForm;
