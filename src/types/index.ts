export interface LocalizedContent {
  en: string;
  es: string;
}

export interface LocalizedArray {
  en: string[];
  es: string[];
}

export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'bedroom' | 'bathroom' | 'kitchen' | 'amenity' | 'view';
  title: LocalizedContent;
}

export interface Property {
  id: number;
  name: string;
  location: string;
  image: string;
  available: boolean;
  summary: LocalizedContent;
  description: LocalizedContent;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  pricePerNight: number;
  minimumStay: number;
  amenities: LocalizedArray;
  houseRules: LocalizedArray;
  features: LocalizedArray;
  checkIn: string;
  checkOut: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  photos?: Photo[];
  blackoutDates?: string[]; // Array of dates in YYYY-MM-DD format that are not available
}                            

export interface Availability {
    date: string;
    isAvailable: boolean;
}