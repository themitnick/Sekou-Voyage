
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
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop",
      price: "15 000 FCFA",
      duration: "3h30",
      rating: 4.8
    },
    {
      id: 2,
      title: "Trajet direct Abidjan - Yamoussoukro",
      description: "Service premium avec Wi-Fi gratuit à bord",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&h=400&fit=crop",
      price: "12 000 FCFA",
      duration: "2h45",
      rating: 4.9
    },
    {
      id: 3,
      title: "Excursion vers San-Pédro",
      description: "Profitez du paysage côtier dans nos bus panoramiques",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      price: "18 000 FCFA",
      duration: "4h15",
      rating: 4.7
    },
    {
      id: 4,
      title: "Destination Korhogo",
      description: "Explorez le Nord de la Côte d'Ivoire en tout confort",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      price: "20 000 FCFA",
      duration: "5h00",
      rating: 4.6
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Découvrez nos destinations populaires
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {slides.map((slide) => (
                <CarouselItem key={slide.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{slide.rating}</span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">{slide.title}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{slide.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span className="text-xs">{slide.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <MapPin className="h-3 w-3" />
                            <span className="text-xs">Direct</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">{slide.price}</div>
                          <div className="text-xs text-gray-500">par personne</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Slides;
