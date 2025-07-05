
import React, { useState } from "react";
import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import SearchResults from "@/components/SearchResults";
import Slides from "@/components/Slides";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Shield, CreditCard, Gift, Percent, Tag } from "lucide-react";

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [searchData, setSearchData] = useState(null);

  const handleSearch = (data: any) => {
    console.log("Données de recherche:", data);
    setSearchData(data);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setSearchData(null);
  };

  if (showResults && searchData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <SearchResults searchData={searchData} onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Réservez vos billets de bus en ligne
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Trouvez et réservez facilement vos trajets avec les meilleures compagnies de transport
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className="relative -mt-8 z-10">
        <div className="container mx-auto px-4">
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>

      {/* Slides Section */}
      <Slides />

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Pourquoi choisir Sekou Voyage ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Large réseau</h3>
                <p className="text-gray-600 text-sm">
                  Plus de 100 destinations dans toute la Côte d'Ivoire
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Réservation rapide</h3>
                <p className="text-gray-600 text-sm">
                  Réservez en quelques clics, 24h/24 et 7j/7
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Paiement sécurisé</h3>
                <p className="text-gray-600 text-sm">
                  Transactions 100% sécurisées et garanties
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Meilleurs prix</h3>
                <p className="text-gray-600 text-sm">
                  Comparez et trouvez les tarifs les plus avantageux
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Promotional Offers */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Offres pour vous
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-orange-800">Réduction 20%</h3>
                <p className="text-orange-700 mb-4">
                  Profitez de 20% de réduction sur tous les trajets Abidjan-Bouaké
                </p>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Code: ABIDJAN20
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-green-800">Voyage gratuit</h3>
                <p className="text-green-700 mb-4">
                  Réservez 5 trajets et obtenez le 6ème gratuitement
                </p>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Programme fidélité
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-purple-800">Première réservation</h3>
                <p className="text-purple-700 mb-4">
                  15% de réduction sur votre première réservation
                </p>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Code: BIENVENUE15
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Trajets populaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { from: "Abidjan", to: "Bouaké", price: "15000 FCFA", duration: "3h30" },
              { from: "Yamoussoukro", to: "Korhogo", price: "12000 FCFA", duration: "2h45" },
              { from: "San-Pédro", to: "Abidjan", price: "18000 FCFA", duration: "4h15" },
              { from: "Daloa", to: "Man", price: "8000 FCFA", duration: "2h00" },
              { from: "Gagnoa", to: "Divo", price: "5000 FCFA", duration: "1h30" },
              { from: "Abengourou", to: "Bondoukou", price: "10000 FCFA", duration: "2h30" }
            ].map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">
                      {route.from} → {route.to}
                    </h3>
                    <span className="text-primary font-bold">{route.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">Durée: {route.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Sekou Voyage</h3>
              <p className="text-gray-400 text-sm">
                Votre partenaire de confiance pour tous vos déplacements en bus.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Réservation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Annulation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Modification</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Aide</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">CGV</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Confidentialité</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sekou Voyage. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
