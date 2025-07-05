
import React from "react";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "SOTRA",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop"
    },
    {
      id: 2,
      name: "STIF",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop"
    },
    {
      id: 3,
      name: "UTB",
      logo: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=200&h=100&fit=crop"
    },
    {
      id: 4,
      name: "CTE TRANSPORT",
      logo: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=100&fit=crop"
    },
    {
      id: 5,
      name: "EXPRESS VOYAGE",
      logo: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=200&h=100&fit=crop"
    },
    {
      id: 6,
      name: "RAPID TRANS",
      logo: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=200&h=100&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          Nos partenaires de confiance
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Nous collaborons avec les meilleures compagnies de transport de Côte d'Ivoire
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Plus de 50 compagnies partenaires dans tout le pays
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
