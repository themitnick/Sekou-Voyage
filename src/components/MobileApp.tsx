
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Download, Bell, MapPin } from "lucide-react";

const MobileApp = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Téléchargez l'app Sekou Voyage
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Réservez vos billets où que vous soyez, suivez vos trajets en temps réel et profitez d'offres exclusives sur mobile.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Interface intuitive</h3>
                  <p className="text-sm text-white/80">Réservez en 3 clics seulement</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Notifications</h3>
                  <p className="text-sm text-white/80">Alertes de départ et promotions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Suivi en temps réel</h3>
                  <p className="text-sm text-white/80">Localisez votre bus en direct</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Mode hors ligne</h3>
                  <p className="text-sm text-white/80">Accédez à vos billets sans internet</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=60&fit=crop" 
                alt="Télécharger sur App Store"
                className="h-14 rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
              />
              <img 
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=200&h=60&fit=crop" 
                alt="Télécharger sur Google Play"
                className="h-14 rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          </div>
          
          <div className="text-center">
            <div className="relative inline-block">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop" 
                alt="Application mobile Sekou Voyage"
                className="w-64 mx-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm animate-pulse">
                GRATUIT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
