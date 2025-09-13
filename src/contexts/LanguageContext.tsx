import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    contactUs: 'Contact Us',
    
    // Property Cards
    viewDetails: 'View Details',
    available: 'Available',
    notAvailable: 'Not Available',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    guests: 'Guests',
    
    // Property Details
    overview: 'Overview',
    amenities: 'Amenities',
    houseRules: 'House Rules',
    features: 'Features',
    location: 'Location',
    pricePerNight: 'per night',
    minimumStay: 'Minimum stay',
    nights: 'nights',
    checkIn: 'Check-in',
    checkOut: 'Check-out',
    bookNow: 'Book Now',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followUs: 'Follow Us',
    legalInfo: 'Legal Info',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cancellationPolicy: 'Cancellation Policy',
    allRightsReserved: 'All rights reserved',
    
    // Contact
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    
    // Common
    loading: 'Loading...',
    error: 'Error loading property',
    currency: '$',
    
    // Calendar
    selectArrival: 'Select your arrival date',
    selectDeparture: 'Select your departure date',
    guest: 'guest',
    totalLabel: 'Total'
  },
  es: {
    // Navigation
    home: 'Inicio',
    contactUs: 'Contáctanos',
    
    // Property Cards
    viewDetails: 'Ver Detalles',
    available: 'Disponible',
    notAvailable: 'No Disponible',
    bedrooms: 'Habitaciones',
    bathrooms: 'Baños',
    guests: 'Huéspedes',
    
    // Property Details
    overview: 'Descripción',
    amenities: 'Amenidades',
    houseRules: 'Reglas de la Casa',
    features: 'Características',
    location: 'Ubicación',
    pricePerNight: 'por noche',
    minimumStay: 'Estancia mínima',
    nights: 'noches',
    checkIn: 'Entrada',
    checkOut: 'Salida',
    bookNow: 'Reservar Ahora',
    
    // Footer
    quickLinks: 'Enlaces Rápidos',
    contactInfo: 'Información de Contacto',
    followUs: 'Síguenos',
    legalInfo: 'Información Legal',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    cancellationPolicy: 'Política de Cancelación',
    allRightsReserved: 'Todos los derechos reservados',
    
    // Contact
    phone: 'Teléfono',
    email: 'Correo',
    address: 'Dirección',
    
    // Common
    loading: 'Cargando...',
    error: 'Error al cargar la propiedad',
    currency: '$',
    
    // Calendar
    selectArrival: 'Selecciona tu fecha de llegada',
    selectDeparture: 'Selecciona tu fecha de salida',
    guest: 'huésped',
    totalLabel: 'Total'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
