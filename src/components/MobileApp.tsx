
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Download, Bell, MapPin } from "lucide-react";

const MobileApp = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Téléchargez l'app Sekou Voyage
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Réservez vos billets où que vous soyez, suivez vos trajets en temps réel et profitez d'offres exclusives sur mobile.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Interface intuitive</h3>
                  <p className="text-sm text-gray-600">Réservez en 3 clics seulement</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Notifications</h3>
                  <p className="text-sm text-gray-600">Alertes de départ et promotions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Suivi en temps réel</h3>
                  <p className="text-sm text-gray-600">Localisez votre bus en direct</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900">Mode hors ligne</h3>
                  <p className="text-sm text-gray-600">Accédez à vos billets sans internet</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="hover:scale-105 transition-transform duration-200"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Télécharger sur l'App Store"
                  className="h-14 rounded-lg shadow-sm"
                />
              </a>
              <a 
                href="#" 
                className="hover:scale-105 transition-transform duration-200"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Télécharger sur Google Play"
                  className="h-14 rounded-lg shadow-sm"
                />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop" 
                alt="Application mobile Sekou Voyage"
                className="relative w-64 mx-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce shadow-lg">
                GRATUIT
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-600">Téléchargements</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">4.8</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-gray-600">Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
