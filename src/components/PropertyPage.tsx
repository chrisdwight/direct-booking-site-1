import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Property } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import PhotoGallery from './PhotoGallery';
import BookingCalendar from './BookingCalendar';

const PropertyPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { language, t } = useLanguage();
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Define fallback properties at component level for easier access
    const fallbackProperties = [
        {
            "id": 1,
            "name": "Costa Bella",
            "location": "Rosarito, Mexico",
            "image": "/images/costabella/costabellaview.webp",
            "available": true,
            "summary": {
                "en": "A beautiful condo in a private community by the ocean.",
                "es": "Un hermoso condominio en una comunidad privada junto al océano."
            },
            "description": {
                "en": "Escape to this stunning oceanfront condo featuring breathtaking Pacific Ocean views. Located in the exclusive Costa Bella community, this luxury 2-bedroom retreat offers the perfect blend of modern comfort and coastal charm. Wake up to the sound of waves and enjoy spectacular sunsets from your private balcony.",
                "es": "Escápate a este impresionante condominio frente al océano con vistas espectaculares del Océano Pacífico. Ubicado en la exclusiva comunidad Costa Bella, este lujoso refugio de 2 habitaciones ofrece la combinación perfecta de comodidad moderna y encanto costero. Despierta con el sonido de las olas y disfruta de espectaculares atardeceres desde tu balcón privado."
            },
            "bedrooms": 2,
            "bathrooms": 2,
            "maxGuests": 6,
            "pricePerNight": 180,
            "minimumStay": 2,
            "amenities": {
                "en": ["Ocean View", "Private Pool", "High-Speed WiFi", "Secure Parking", "Clubhouse", "Kitchen", "Balcony", "24/7 Security"],
                "es": ["Vista al Océano", "Piscina Privada", "WiFi de Alta Velocidad", "Estacionamiento Seguro", "Casa Club", "Cocina", "Balcón", "Seguridad 24/7"]
            },
            "houseRules": {
                "en": ["No smoking inside", "No pets allowed", "Quiet hours: 10 PM - 8 AM", "Maximum 6 guests", "No parties or events"],
                "es": ["No fumar adentro", "No se permiten mascotas", "Horas de silencio: 10 PM - 8 AM", "Máximo 6 huéspedes", "No se permiten fiestas o eventos"]
            },
            "features": {
                "en": ["Oceanfront location", "Gated community", "Modern furnishings", "Full kitchen"],
                "es": ["Ubicación frente al océano", "Comunidad cerrada", "Mobiliario moderno", "Cocina completa"]
            },
            "checkIn": "3:00 PM",
            "checkOut": "11:00 AM",
            "coordinates": { "lat": 32.3668, "lng": -117.0417 },
            "blackoutDates": [
                "2025-08-15", "2025-08-16", "2025-08-17", // Owner vacation
                "2025-09-05", "2025-09-06", // Maintenance
                "2025-10-25", "2025-10-26", "2025-10-27", "2025-10-28" // Holiday booking
            ],
            "photos": [
                // Exterior Views
                {
                    "id": 1,
                    "src": "/images/costabella/exterior-1.jpg",
                    "alt": "Costa Bella main exterior view",
                    "category": "exterior" as const,
                    "title": {
                        "en": "Main Building Exterior",
                        "es": "Exterior Principal del Edificio"
                    }
                },
                {
                    "id": 2,
                    "src": "/images/costabella/exterior-2.webp",
                    "alt": "Costa Bella building entrance",
                    "category": "exterior" as const,
                    "title": {
                        "en": "Building Entrance",
                        "es": "Entrada del Edificio"
                    }
                },
                {
                    "id": 3,
                    "src": "/images/costabella/exterior-3.webp",
                    "alt": "Costa Bella exterior architecture",
                    "category": "exterior" as const,
                    "title": {
                        "en": "Exterior Architecture",
                        "es": "Arquitectura Exterior"
                    }
                },
                {
                    "id": 4,
                    "src": "/images/costabella/exterior-door.webp",
                    "alt": "Costa Bella apartment entrance door",
                    "category": "exterior" as const,
                    "title": {
                        "en": "Apartment Entrance",
                        "es": "Entrada del Apartamento"
                    }
                },
                // Interior Spaces
                {
                    "id": 5,
                    "src": "/images/costabella/living-room.webp",
                    "alt": "Costa Bella spacious living room",
                    "category": "interior" as const,
                    "title": {
                        "en": "Spacious Living Room",
                        "es": "Sala de Estar Amplia"
                    }
                },
                {
                    "id": 6,
                    "src": "/images/costabella/living-room-2.jpeg",
                    "alt": "Costa Bella living room alternate view",
                    "category": "interior" as const,
                    "title": {
                        "en": "Living Room - Another View",
                        "es": "Sala de Estar - Otra Vista"
                    }
                },
                {
                    "id": 7,
                    "src": "/images/costabella/dining-area.webp",
                    "alt": "Costa Bella elegant dining area",
                    "category": "interior" as const,
                    "title": {
                        "en": "Elegant Dining Area",
                        "es": "Área de Comedor Elegante"
                    }
                },
                // Kitchen
                {
                    "id": 8,
                    "src": "/images/costabella/kitchen-1.webp",
                    "alt": "Costa Bella modern kitchen",
                    "category": "kitchen" as const,
                    "title": {
                        "en": "Modern Kitchen",
                        "es": "Cocina Moderna"
                    }
                },
                {
                    "id": 9,
                    "src": "/images/costabella/kitchen-2.webp",
                    "alt": "Costa Bella kitchen counter and appliances",
                    "category": "kitchen" as const,
                    "title": {
                        "en": "Kitchen Counter & Appliances",
                        "es": "Mostrador y Electrodomésticos"
                    }
                },
                {
                    "id": 10,
                    "src": "/images/costabella/kitchen-3.webp",
                    "alt": "Costa Bella kitchen dining area",
                    "category": "kitchen" as const,
                    "title": {
                        "en": "Kitchen Dining Area",
                        "es": "Área de Comedor de Cocina"
                    }
                },
                // Bedrooms
                {
                    "id": 11,
                    "src": "/images/costabella/bedroom-1.webp",
                    "alt": "Costa Bella master bedroom",
                    "category": "bedroom" as const,
                    "title": {
                        "en": "Master Bedroom",
                        "es": "Habitación Principal"
                    }
                },
                {
                    "id": 12,
                    "src": "/images/costabella/bedroom-1-view.webp",
                    "alt": "Costa Bella master bedroom with ocean view",
                    "category": "bedroom" as const,
                    "title": {
                        "en": "Master Bedroom with Ocean View",
                        "es": "Habitación Principal con Vista al Océano"
                    }
                },
                {
                    "id": 13,
                    "src": "/images/costabella/bedroom-1-view-2.jpeg",
                    "alt": "Costa Bella master bedroom view alternate",
                    "category": "bedroom" as const,
                    "title": {
                        "en": "Master Bedroom - Window View",
                        "es": "Habitación Principal - Vista de Ventana"
                    }
                },
                {
                    "id": 14,
                    "src": "/images/costabella/bedroom-2.webp",
                    "alt": "Costa Bella second bedroom",
                    "category": "bedroom" as const,
                    "title": {
                        "en": "Second Bedroom",
                        "es": "Segunda Habitación"
                    }
                },
                {
                    "id": 15,
                    "src": "/images/costabella/bedroom-2-view.webp",
                    "alt": "Costa Bella second bedroom with view",
                    "category": "bedroom" as const,
                    "title": {
                        "en": "Second Bedroom with View",
                        "es": "Segunda Habitación con Vista"
                    }
                },
                // Bathrooms
                {
                    "id": 16,
                    "src": "/images/costabella/bathroom-1.webp",
                    "alt": "Costa Bella main bathroom",
                    "category": "bathroom" as const,
                    "title": {
                        "en": "Main Bathroom",
                        "es": "Baño Principal"
                    }
                },
                {
                    "id": 17,
                    "src": "/images/costabella/bathroom-2.webp",
                    "alt": "Costa Bella second bathroom",
                    "category": "bathroom" as const,
                    "title": {
                        "en": "Second Bathroom",
                        "es": "Segundo Baño"
                    }
                },
                // Views & Balcony
                {
                    "id": 18,
                    "src": "/images/costabella/costabellaview.webp",
                    "alt": "Stunning ocean view from Costa Bella",
                    "category": "view" as const,
                    "title": {
                        "en": "Panoramic Ocean View",
                        "es": "Vista Panorámica del Océano"
                    }
                },
                {
                    "id": 19,
                    "src": "/images/costabella/balcony.webp",
                    "alt": "Costa Bella private balcony",
                    "category": "view" as const,
                    "title": {
                        "en": "Private Balcony",
                        "es": "Balcón Privado"
                    }
                },
                {
                    "id": 20,
                    "src": "/images/costabella/balcony-2.jpeg",
                    "alt": "Costa Bella balcony with ocean view",
                    "category": "view" as const,
                    "title": {
                        "en": "Balcony Ocean View",
                        "es": "Vista al Océano desde el Balcón"
                    }
                },
                {
                    "id": 21,
                    "src": "/images/costabella/balcony-3.jpeg",
                    "alt": "Costa Bella balcony seating area",
                    "category": "view" as const,
                    "title": {
                        "en": "Balcony Seating Area",
                        "es": "Área de Estar del Balcón"
                    }
                },
                {
                    "id": 22,
                    "src": "/images/costabella/balcony-4.webp",
                    "alt": "Costa Bella balcony furniture",
                    "category": "view" as const,
                    "title": {
                        "en": "Balcony Furniture",
                        "es": "Mobiliario del Balcón"
                    }
                },
                {
                    "id": 23,
                    "src": "/images/costabella/balcony-5.jpeg",
                    "alt": "Costa Bella balcony sunset view",
                    "category": "view" as const,
                    "title": {
                        "en": "Balcony Sunset View",
                        "es": "Vista del Atardecer desde el Balcón"
                    }
                },
                // Amenities
                {
                    "id": 24,
                    "src": "/images/costabella/pool.webp",
                    "alt": "Costa Bella community pool",
                    "category": "amenity" as const,
                    "title": {
                        "en": "Community Pool",
                        "es": "Piscina Comunitaria"
                    }
                },
                {
                    "id": 25,
                    "src": "/images/costabella/jacuzzi.webp",
                    "alt": "Costa Bella relaxing jacuzzi",
                    "category": "amenity" as const,
                    "title": {
                        "en": "Relaxing Jacuzzi",
                        "es": "Jacuzzi Relajante"
                    }
                },
                {
                    "id": 26,
                    "src": "/images/costabella/gym.webp",
                    "alt": "Costa Bella fitness center",
                    "category": "amenity" as const,
                    "title": {
                        "en": "Fitness Center",
                        "es": "Centro de Fitness"
                    }
                },
                {
                    "id": 27,
                    "src": "/images/costabella/clubhouse.webp",
                    "alt": "Costa Bella clubhouse",
                    "category": "amenity" as const,
                    "title": {
                        "en": "Community Clubhouse",
                        "es": "Casa Club Comunitaria"
                    }
                },
                {
                    "id": 28,
                    "src": "/images/costabella/clubhouse-1.jpeg",
                    "alt": "Costa Bella clubhouse interior",
                    "category": "amenity" as const,
                    "title": {
                        "en": "Clubhouse Interior",
                        "es": "Interior de la Casa Club"
                    }
                },
                {
                    "id": 29,
                    "src": "/images/costabella/laundry-area.webp",
                    "alt": "Costa Bella laundry area",
                    "category": "amenity" as const,
                    "title": {
                        "en": "Laundry Area",
                        "es": "Área de Lavandería"
                    }
                },
                {
                    "id": 30,
                    "src": "/images/costabella/exteriorbbq.jpeg",
                    "alt": "Costa Bella exterior BBQ area",
                    "category": "amenity" as const,
                    "title": {
                        "en": "Outdoor BBQ Area",
                        "es": "Área de BBQ Exterior"
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "Mision Viejo",
            "location": "Rosarito, Mexico",
            "image": "/images/misionviejo/exterior1.jpeg",
            "available": false,
            "summary": {
                "en": "Brand new house with a beautiful ocean view.",
                "es": "Casa nueva con una hermosa vista al océano."
            },
            "description": {
                "en": "Experience luxury in this brand-new 3-bedroom house perched on the cliffs of Rosarito. This architectural masterpiece features floor-to-ceiling windows, a gourmet kitchen, and a stunning rooftop terrace with 360-degree ocean views. Perfect for families or groups seeking an unforgettable coastal getaway.",
                "es": "Experimenta el lujo en esta nueva casa de 3 habitaciones ubicada en los acantilados de Rosarito. Esta obra maestra arquitectónica cuenta con ventanas del piso al techo, una cocina gourmet y una impresionante terraza en la azotea con vistas de 360 grados al océano. Perfecto para familias o grupos que buscan una escapada costera inolvidable."
            },
            "bedrooms": 3,
            "bathrooms": 3,
            "maxGuests": 8,
            "pricePerNight": 250,
            "minimumStay": 3,
            "amenities": {
                "en": ["Ocean View", "Rooftop Terrace", "High-Speed WiFi", "BBQ Grill", "Full Kitchen", "Beach Access"],
                "es": ["Vista al Océano", "Terraza en la Azotea", "WiFi de Alta Velocidad", "Parrilla BBQ", "Cocina Completa", "Acceso a la Playa"]
            },
            "houseRules": {
                "en": ["No smoking inside", "No pets allowed", "Quiet hours: 10 PM - 8 AM", "Maximum 8 guests", "No parties or events"],
                "es": ["No fumar adentro", "No se permiten mascotas", "Horas de silencio: 10 PM - 8 AM", "Máximo 8 huéspedes", "No se permiten fiestas o eventos"]
            },
            "features": {
                "en": ["Modern architecture", "Fully furnished", "Outdoor dining area"],
                "es": ["Arquitectura moderna", "Completamente amueblado", "Área de comedor al aire libre"]
            },
            "checkIn": "4:00 PM",
            "checkOut": "11:00 AM",
            "coordinates": { "lat": 32.3598, "lng": -117.0380 },
            "blackoutDates": [
                "2025-07-30", "2025-07-31", // Maintenance
                "2025-08-20", "2025-08-21", "2025-08-22", // Previous booking
                "2025-09-15", "2025-09-16", "2025-09-17", "2025-09-18" // Owner stay
            ],
            "photos": [
                // Exteriors
                {
                    "id": 1,
                    "src": "/images/misionviejo/exterior1.jpeg",
                    "alt": "Mision Viejo house exterior",
                    "category": "exterior" as const,
                    "title": { "en": "Modern House Exterior", "es": "Exterior de Casa Moderna" }
                },
                {
                    "id": 2,
                    "src": "/images/misionviejo/exterior1.2.jpeg",
                    "alt": "Mision Viejo house exterior angle",
                    "category": "exterior" as const,
                    "title": { "en": "Exterior - Angle View", "es": "Exterior - Vista en Ángulo" }
                },
                {
                    "id": 3,
                    "src": "/images/misionviejo/exterior1.3.jpeg",
                    "alt": "Mision Viejo street-side exterior",
                    "category": "exterior" as const,
                    "title": { "en": "Street-side Exterior", "es": "Exterior desde la Calle" }
                },
                // Rooftop (Amenity)
                {
                    "id": 4,
                    "src": "/images/misionviejo/rooftop1.webp",
                    "alt": "Rooftop terrace view",
                    "category": "amenity" as const,
                    "title": { "en": "Rooftop Terrace", "es": "Terraza en la Azotea" }
                },
                {
                    "id": 5,
                    "src": "/images/misionviejo/rooftop1.2.jpeg",
                    "alt": "Rooftop seating area",
                    "category": "amenity" as const,
                    "title": { "en": "Rooftop Seating", "es": "Asientos en la Azotea" }
                },
                {
                    "id": 6,
                    "src": "/images/misionviejo/rooftop1.3.jpeg",
                    "alt": "Rooftop ocean view",
                    "category": "view" as const,
                    "title": { "en": "Rooftop Ocean View", "es": "Vista al Océano desde la Azotea" }
                },
                {
                    "id": 7,
                    "src": "/images/misionviejo/rooftop1.4.webp",
                    "alt": "Rooftop dining area",
                    "category": "amenity" as const,
                    "title": { "en": "Rooftop Dining Area", "es": "Área de Comedor en Azotea" }
                },
                // Living / Interior
                {
                    "id": 8,
                    "src": "/images/misionviejo/livingroom1.webp",
                    "alt": "Living room with sofa",
                    "category": "interior" as const,
                    "title": { "en": "Living Room", "es": "Sala de Estar" }
                },
                {
                    "id": 9,
                    "src": "/images/misionviejo/livingroom2.webp",
                    "alt": "Living room alternate view",
                    "category": "interior" as const,
                    "title": { "en": "Living Room - Alternate", "es": "Sala de Estar - Alterna" }
                },
                {
                    "id": 10,
                    "src": "/images/misionviejo/livingroom3.jpeg",
                    "alt": "Living room and TV",
                    "category": "interior" as const,
                    "title": { "en": "Cozy Living Area", "es": "Área de Estar Acogedora" }
                },
                // Kitchen
                {
                    "id": 11,
                    "src": "/images/misionviejo/fullkitchen1.webp",
                    "alt": "Modern full kitchen",
                    "category": "kitchen" as const,
                    "title": { "en": "Modern Kitchen", "es": "Cocina Moderna" }
                },
                {
                    "id": 12,
                    "src": "/images/misionviejo/fullkitchen2.jpeg",
                    "alt": "Kitchen with island",
                    "category": "kitchen" as const,
                    "title": { "en": "Kitchen with Island", "es": "Cocina con Isla" }
                },
                {
                    "id": 13,
                    "src": "/images/misionviejo/fullkitchen3.webp",
                    "alt": "Kitchen appliances",
                    "category": "kitchen" as const,
                    "title": { "en": "Kitchen Appliances", "es": "Electrodomésticos de Cocina" }
                },
                // Bedrooms
                {
                    "id": 14,
                    "src": "/images/misionviejo/bedroom1.1.jpeg",
                    "alt": "Master bedroom",
                    "category": "bedroom" as const,
                    "title": { "en": "Master Bedroom", "es": "Habitación Principal" }
                },
                {
                    "id": 15,
                    "src": "/images/misionviejo/bedroom1.2.jpeg",
                    "alt": "Master bedroom alternate",
                    "category": "bedroom" as const,
                    "title": { "en": "Master Bedroom - Alternate", "es": "Habitación Principal - Alterna" }
                },
                {
                    "id": 16,
                    "src": "/images/misionviejo/bedroom2.1.webp",
                    "alt": "Second bedroom",
                    "category": "bedroom" as const,
                    "title": { "en": "Second Bedroom", "es": "Segunda Habitación" }
                },
                {
                    "id": 17,
                    "src": "/images/misionviejo/bedroom2.2.jpeg",
                    "alt": "Second bedroom alternate",
                    "category": "bedroom" as const,
                    "title": { "en": "Second Bedroom - Alternate", "es": "Segunda Habitación - Alterna" }
                },
                {
                    "id": 18,
                    "src": "/images/misionviejo/bedroom2.3.jpeg",
                    "alt": "Second bedroom details",
                    "category": "bedroom" as const,
                    "title": { "en": "Second Bedroom Details", "es": "Detalles de la Segunda Habitación" }
                },
                {
                    "id": 19,
                    "src": "/images/misionviejo/bedroom3.1.jpeg",
                    "alt": "Third bedroom",
                    "category": "bedroom" as const,
                    "title": { "en": "Third Bedroom", "es": "Tercera Habitación" }
                },
                {
                    "id": 20,
                    "src": "/images/misionviejo/bedroom3.2.jpeg",
                    "alt": "Third bedroom alternate",
                    "category": "bedroom" as const,
                    "title": { "en": "Third Bedroom - Alternate", "es": "Tercera Habitación - Alterna" }
                },
                // Bathrooms
                {
                    "id": 21,
                    "src": "/images/misionviejo/fullbathroom1.jpeg",
                    "alt": "Full bathroom 1",
                    "category": "bathroom" as const,
                    "title": { "en": "Full Bathroom 1", "es": "Baño Completo 1" }
                },
                {
                    "id": 22,
                    "src": "/images/misionviejo/fullbathroom1.2.jpeg",
                    "alt": "Full bathroom 1 alternate",
                    "category": "bathroom" as const,
                    "title": { "en": "Full Bathroom 1 - Alternate", "es": "Baño Completo 1 - Alterno" }
                },
                {
                    "id": 23,
                    "src": "/images/misionviejo/fullbathroom2.jpeg",
                    "alt": "Full bathroom 2",
                    "category": "bathroom" as const,
                    "title": { "en": "Full Bathroom 2", "es": "Baño Completo 2" }
                },
                // Patio (Amenity)
                {
                    "id": 24,
                    "src": "/images/misionviejo/patio1.webp",
                    "alt": "Patio seating",
                    "category": "amenity" as const,
                    "title": { "en": "Patio Seating", "es": "Asientos en el Patio" }
                },
                {
                    "id": 25,
                    "src": "/images/misionviejo/patio1.2.jpeg",
                    "alt": "Patio dining",
                    "category": "amenity" as const,
                    "title": { "en": "Patio Dining", "es": "Comedor en el Patio" }
                },
                {
                    "id": 26,
                    "src": "/images/misionviejo/patio1.3.jpeg",
                    "alt": "Patio lounge",
                    "category": "amenity" as const,
                    "title": { "en": "Patio Lounge", "es": "Sala en el Patio" }
                }
            ]
        }
    ];

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                console.log('PropertyPage - id from useParams:', id);
                console.log('PropertyPage - window.location.pathname:', window.location.pathname);
                
                // Extract ID from URL if useParams fails
                let propertyId = id ? parseInt(id) : null;
                
                if (!propertyId) {
                    const pathMatch = window.location.pathname.match(/\/property\/(\d+)/);
                    if (pathMatch) {
                        propertyId = parseInt(pathMatch[1]);
                        console.log('Extracted ID from pathname:', propertyId);
                    }
                }
                
                // If still no ID, default to property 1
                if (!propertyId || isNaN(propertyId)) {
                    console.warn('No valid ID found, defaulting to property 1');
                    propertyId = 1;
                }
                
                console.log('Using property ID:', propertyId);
                
                // Find property in fallback data
                const foundProperty = fallbackProperties.find((prop: Property) => prop.id === propertyId);
                
                if (!foundProperty) {
                    console.error('Property not found, available IDs:', fallbackProperties.map(p => p.id));
                    throw new Error('Property not found');
                }
                
                console.log('Found property:', foundProperty.name);
                setProperty(foundProperty);
                
            } catch (err) {
                console.error('Error in fetchProperty:', err);
                if (err instanceof Error) setError(err.message);
                else setError(String(err));
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return <div className="loading">{t('loading')}</div>;
    }

    if (error) {
        return <div className="error">{t('error')}: {error}</div>;
    }

    if (!property) {
        return <div className="error">{t('error')}</div>;
    }

    return (
        <div className="property-page">
            {/* Hero Section */}
            <div className="property-hero">
                <img 
                    src={property.image} 
                    alt={property.name}
                    className="property-hero-image"
                />
                <div className="property-hero-overlay">
                    <div className="property-hero-content">
                        <h1>{property.name}</h1>
                        <p className="property-location">📍 {property.location}</p>
                        <div className="property-quick-info">
                            <span>{property.bedrooms} {t('bedrooms')}</span>
                            <span>{property.bathrooms} {t('bathrooms')}</span>
                            <span>{property.maxGuests} {t('guests')}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="property-content">
                <div className="property-main">
                    {/* Overview */}
                    <section className="property-section">
                        <h2>{t('overview')}</h2>
                        <p className="property-description">
                            {property.description[language]}
                        </p>
                    </section>

                    {/* Amenities */}
                    <section className="property-section">
                        <h2>{t('amenities')}</h2>
                        <div className="amenities-grid">
                            {property.amenities[language].map((amenity, index) => (
                                <div key={index} className="amenity-item">
                                    <span className="amenity-icon">✓</span>
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Features */}
                    <section className="property-section">
                        <h2>{t('features')}</h2>
                        <div className="features-grid">
                            {property.features[language].map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <span className="feature-icon">🏖️</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* House Rules */}
                    <section className="property-section">
                        <h2>{t('houseRules')}</h2>
                        <ul className="rules-list">
                            {property.houseRules[language].map((rule, index) => (
                                <li key={index}>{rule}</li>
                            ))}
                        </ul>
                    </section>

                    {/* Photo Gallery */}
                    {property.photos && property.photos.length > 0 && (
                        <section className="property-section">
                            <PhotoGallery 
                                propertyName={property.name}
                                photos={property.photos}
                            />
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="property-sidebar">
                    <BookingCalendar
                        pricePerNight={property.pricePerNight}
                        minimumStay={property.minimumStay}
                        checkIn={property.checkIn}
                        checkOut={property.checkOut}
                        maxGuests={property.maxGuests}
                        available={property.available}
                        blackoutDates={property.blackoutDates}
                    />

                    {/* Location */}
                    <div className="location-card">
                        <h3>{t('location')}</h3>
                        <p>{property.location}</p>
                        <div className="map-container">
                            <img 
                                src="/images/costabella/costabellamap.webp" 
                                alt={`${property.name} Location Map`}
                                className="location-map"
                            />
                            <div className="map-overlay">
                                <div className="map-pin">📍</div>
                                <span className="map-label">{property.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyPage;