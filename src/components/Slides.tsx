
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { MapPin, Clock, Star } from "lucide-react";

const Slides = () => {
  const slides = [
    {
      id: 1,
      title: "Voyage confortable vers Bouaké",
      description: "Découvrez nos bus climatisés avec sièges inclinables",
      image: "/placeholder.svg",
      price: "15 000 FCFA",
      duration: "3h30",
      rating: 4.8
    },
    {
      id: 2,
      title: "Trajet direct Abidjan - Yamoussoukro",
      description: "Service premium avec Wi-Fi gratuit à bord",
      image: "/placeholder.svg",
      price: "12 000 FCFA",
      duration: "2h45",
      rating: 4.9
    },
    {
      id: 3,
      title: "Excursion vers San-Pédro",
      description: "Profitez du paysage côtier dans nos bus panoramiques",
      image: "/placeholder.svg",
      price: "18 000 FCFA",
      duration: "4h15",
      rating: 4.7
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Découvrez nos destinations
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{slide.rating}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-gray-600 mb-4">{slide.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{slide.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">Direct</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{slide.price}</div>
                          <div className="text-sm text-gray-500">par personne</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Slides;
