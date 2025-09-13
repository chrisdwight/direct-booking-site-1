import { Property } from "../types";

export const fallbackProperties: Property[] = [
  {
    id: 1,
    name: "Costa Bella",
    location: "Rosarito, Mexico",
    image: "/images/costabella/costabellaview.webp",
    available: true,
    summary: {
      en: "A beautiful condo in a private community by the ocean.",
      es: "Un hermoso condominio en una comunidad privada junto al océano."
    },
    description: {
      en: "Escape to this stunning oceanfront condo featuring breathtaking Pacific Ocean views. Located in the exclusive Costa Bella community, this luxury 2-bedroom retreat offers the perfect blend of modern comfort and coastal charm. Wake up to the sound of waves and enjoy spectacular sunsets from your private balcony.",
      es: "Escápate a este impresionante condominio frente al océano con vistas espectaculares del Océano Pacífico. Ubicado en la exclusiva comunidad Costa Bella, este lujoso refugio de 2 habitaciones ofrece la combinación perfecta de comodidad moderna y encanto costero. Despierta con el sonido de las olas y disfruta de espectaculares atardeceres desde tu balcón privado."
    },
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 6,
    pricePerNight: 180,
    minimumStay: 2,
    amenities: {
      en: [
        "Ocean View",
        "Private Pool",
        "High-Speed WiFi",
        "Secure Parking",
        "Clubhouse",
        "Kitchen",
        "Balcony",
        "24/7 Security"
      ],
      es: [
        "Vista al Océano",
        "Piscina Privada",
        "WiFi de Alta Velocidad",
        "Estacionamiento Seguro",
        "Casa Club",
        "Cocina",
        "Balcón",
        "Seguridad 24/7"
      ]
    },
    houseRules: {
      en: [
        "No smoking inside",
        "No pets allowed",
        "Quiet hours: 10 PM - 8 AM",
        "Maximum 6 guests",
        "No parties or events"
      ],
      es: [
        "No fumar adentro",
        "No se permiten mascotas",
        "Horas de silencio: 10 PM - 8 AM",
        "Máximo 6 huéspedes",
        "No se permiten fiestas o eventos"
      ]
    },
    features: {
      en: ["Oceanfront location", "Gated community", "Modern furnishings", "Full kitchen"],
      es: ["Ubicación frente al océano", "Comunidad cerrada", "Mobiliario moderno", "Cocina completa"]
    },
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    coordinates: { lat: 32.3668, lng: -117.0417 },
    blackoutDates: [
      "2025-08-15",
      "2025-08-16",
      "2025-08-17",
      "2025-09-05",
      "2025-09-06",
      "2025-10-25",
      "2025-10-26",
      "2025-10-27",
      "2025-10-28"
    ],
    photos: [
      { id: 1, src: "/images/costabella/exterior-1.jpg", alt: "Costa Bella main exterior view", category: "exterior", title: { en: "Main Building Exterior", es: "Exterior Principal del Edificio" } },
      { id: 2, src: "/images/costabella/exterior-2.webp", alt: "Costa Bella building entrance", category: "exterior", title: { en: "Building Entrance", es: "Entrada del Edificio" } },
      { id: 3, src: "/images/costabella/exterior-3.webp", alt: "Costa Bella exterior architecture", category: "exterior", title: { en: "Exterior Architecture", es: "Arquitectura Exterior" } },
      { id: 4, src: "/images/costabella/exterior-door.webp", alt: "Costa Bella apartment entrance door", category: "exterior", title: { en: "Apartment Entrance", es: "Entrada del Apartamento" } },
      { id: 5, src: "/images/costabella/living-room.webp", alt: "Costa Bella spacious living room", category: "interior", title: { en: "Spacious Living Room", es: "Sala de Estar Amplia" } },
      { id: 6, src: "/images/costabella/living-room-2.jpeg", alt: "Costa Bella living room alternate view", category: "interior", title: { en: "Living Room - Another View", es: "Sala de Estar - Otra Vista" } },
      { id: 7, src: "/images/costabella/dining-area.webp", alt: "Costa Bella elegant dining area", category: "interior", title: { en: "Elegant Dining Area", es: "Área de Comedor Elegante" } },
      { id: 8, src: "/images/costabella/kitchen-1.webp", alt: "Costa Bella modern kitchen", category: "kitchen", title: { en: "Modern Kitchen", es: "Cocina Moderna" } },
      { id: 9, src: "/images/costabella/kitchen-2.webp", alt: "Costa Bella kitchen counter and appliances", category: "kitchen", title: { en: "Kitchen Counter & Appliances", es: "Mostrador y Electrodomésticos" } },
      { id: 10, src: "/images/costabella/kitchen-3.webp", alt: "Costa Bella kitchen dining area", category: "kitchen", title: { en: "Kitchen Dining Area", es: "Área de Comedor de Cocina" } },
      { id: 11, src: "/images/costabella/bedroom-1.webp", alt: "Costa Bella master bedroom", category: "bedroom", title: { en: "Master Bedroom", es: "Habitación Principal" } },
      { id: 12, src: "/images/costabella/bedroom-1-view.webp", alt: "Costa Bella master bedroom with ocean view", category: "bedroom", title: { en: "Master Bedroom with Ocean View", es: "Habitación Principal con Vista al Océano" } },
      { id: 13, src: "/images/costabella/bedroom-1-view-2.jpeg", alt: "Costa Bella master bedroom view alternate", category: "bedroom", title: { en: "Master Bedroom - Window View", es: "Habitación Principal - Vista de Ventana" } },
      { id: 14, src: "/images/costabella/bedroom-2.webp", alt: "Costa Bella second bedroom", category: "bedroom", title: { en: "Second Bedroom", es: "Segunda Habitación" } },
      { id: 15, src: "/images/costabella/bedroom-2-view.webp", alt: "Costa Bella second bedroom with view", category: "bedroom", title: { en: "Second Bedroom with View", es: "Segunda Habitación con Vista" } },
      { id: 16, src: "/images/costabella/bathroom-1.webp", alt: "Costa Bella main bathroom", category: "bathroom", title: { en: "Main Bathroom", es: "Baño Principal" } },
      { id: 17, src: "/images/costabella/bathroom-2.webp", alt: "Costa Bella second bathroom", category: "bathroom", title: { en: "Second Bathroom", es: "Segundo Baño" } },
      { id: 18, src: "/images/costabella/costabellaview.webp", alt: "Stunning ocean view from Costa Bella", category: "view", title: { en: "Panoramic Ocean View", es: "Vista Panorámica del Océano" } },
      { id: 19, src: "/images/costabella/balcony.webp", alt: "Costa Bella private balcony", category: "view", title: { en: "Private Balcony", es: "Balcón Privado" } },
      { id: 20, src: "/images/costabella/balcony-2.jpeg", alt: "Costa Bella balcony with ocean view", category: "view", title: { en: "Balcony Ocean View", es: "Vista al Océano desde el Balcón" } },
      { id: 21, src: "/images/costabella/balcony-3.jpeg", alt: "Costa Bella balcony seating area", category: "view", title: { en: "Balcony Seating Area", es: "Área de Estar del Balcón" } },
      { id: 22, src: "/images/costabella/balcony-4.webp", alt: "Costa Bella balcony furniture", category: "view", title: { en: "Balcony Furniture", es: "Mobiliario del Balcón" } },
      { id: 23, src: "/images/costabella/balcony-5.jpeg", alt: "Costa Bella balcony sunset view", category: "view", title: { en: "Balcony Sunset View", es: "Vista del Atardecer desde el Balcón" } },
      { id: 24, src: "/images/costabella/pool.webp", alt: "Costa Bella community pool", category: "amenity", title: { en: "Community Pool", es: "Piscina Comunitaria" } },
      { id: 25, src: "/images/costabella/jacuzzi.webp", alt: "Costa Bella relaxing jacuzzi", category: "amenity", title: { en: "Relaxing Jacuzzi", es: "Jacuzzi Relajante" } },
      { id: 26, src: "/images/costabella/gym.webp", alt: "Costa Bella fitness center", category: "amenity", title: { en: "Fitness Center", es: "Centro de Fitness" } },
      { id: 27, src: "/images/costabella/clubhouse.webp", alt: "Costa Bella clubhouse", category: "amenity", title: { en: "Community Clubhouse", es: "Casa Club Comunitaria" } },
      { id: 28, src: "/images/costabella/clubhouse-1.jpeg", alt: "Costa Bella clubhouse interior", category: "amenity", title: { en: "Clubhouse Interior", es: "Interior de la Casa Club" } },
      { id: 29, src: "/images/costabella/laundry-area.webp", alt: "Costa Bella laundry area", category: "amenity", title: { en: "Laundry Area", es: "Área de Lavandería" } },
      { id: 30, src: "/images/costabella/exteriorbbq.jpeg", alt: "Costa Bella exterior BBQ area", category: "amenity", title: { en: "Outdoor BBQ Area", es: "Área de BBQ Exterior" } }
    ]
  },
  {
    id: 2,
    name: "Mision Viejo",
    location: "Rosarito, Mexico",
    image: "/images/misionviejo/exterior1.jpeg",
    available: false,
    summary: {
      en: "Brand new house with a beautiful ocean view.",
      es: "Casa nueva con una hermosa vista al océano."
    },
    description: {
      en: "Experience luxury in this brand-new 3-bedroom house perched on the cliffs of Rosarito. This architectural masterpiece features floor-to-ceiling windows, a gourmet kitchen, and a stunning rooftop terrace with 360-degree ocean views. Perfect for families or groups seeking an unforgettable coastal getaway.",
      es: "Experimenta el lujo en esta nueva casa de 3 habitaciones ubicada en los acantilados de Rosarito. Esta obra maestra arquitectónica cuenta con ventanas del piso al techo, una cocina gourmet y una impresionante terraza en la azotea con vistas de 360 grados al océano. Perfecto para familias o grupos que buscan una escapada costera inolvidable."
    },
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 8,
    pricePerNight: 250,
    minimumStay: 3,
    amenities: {
      en: ["Ocean View", "Rooftop Terrace", "High-Speed WiFi", "BBQ Grill", "Full Kitchen", "Beach Access"],
      es: ["Vista al Océano", "Terraza en la Azotea", "WiFi de Alta Velocidad", "Parrilla BBQ", "Cocina Completa", "Acceso a la Playa"]
    },
    houseRules: {
      en: ["No smoking inside", "No pets allowed", "Quiet hours: 10 PM - 8 AM", "Maximum 8 guests", "No parties or events"],
      es: ["No fumar adentro", "No se permiten mascotas", "Horas de silencio: 10 PM - 8 AM", "Máximo 8 huéspedes", "No se permiten fiestas o eventos"]
    },
    features: {
      en: ["Modern architecture", "Fully furnished", "Outdoor dining area"],
      es: ["Arquitectura moderna", "Completamente amueblado", "Área de comedor al aire libre"]
    },
    checkIn: "4:00 PM",
    checkOut: "11:00 AM",
    coordinates: { lat: 32.3598, lng: -117.038 },
    blackoutDates: [
      "2025-07-30",
      "2025-07-31",
      "2025-08-20",
      "2025-08-21",
      "2025-08-22",
      "2025-09-15",
      "2025-09-16",
      "2025-09-17",
      "2025-09-18"
    ],
    photos: [
      { id: 1, src: "/images/misionviejo/exterior1.jpeg", alt: "Mision Viejo house exterior", category: "exterior", title: { en: "Modern House Exterior", es: "Exterior de Casa Moderna" } },
      { id: 2, src: "/images/misionviejo/exterior1.2.jpeg", alt: "Mision Viejo house exterior angle", category: "exterior", title: { en: "Exterior - Angle View", es: "Exterior - Vista en Ángulo" } },
      { id: 3, src: "/images/misionviejo/exterior1.3.jpeg", alt: "Mision Viejo street-side exterior", category: "exterior", title: { en: "Street-side Exterior", es: "Exterior desde la Calle" } },
      { id: 4, src: "/images/misionviejo/rooftop1.webp", alt: "Rooftop terrace view", category: "amenity", title: { en: "Rooftop Terrace", es: "Terraza en la Azotea" } },
      { id: 5, src: "/images/misionviejo/rooftop1.2.jpeg", alt: "Rooftop seating area", category: "amenity", title: { en: "Rooftop Seating", es: "Asientos en la Azotea" } },
      { id: 6, src: "/images/misionviejo/rooftop1.3.jpeg", alt: "Rooftop ocean view", category: "view", title: { en: "Rooftop Ocean View", es: "Vista al Océano desde la Azotea" } },
      { id: 7, src: "/images/misionviejo/rooftop1.4.webp", alt: "Rooftop dining area", category: "amenity", title: { en: "Rooftop Dining Area", es: "Área de Comedor en Azotea" } },
      { id: 8, src: "/images/misionviejo/livingroom1.webp", alt: "Living room with sofa", category: "interior", title: { en: "Living Room", es: "Sala de Estar" } },
      { id: 9, src: "/images/misionviejo/livingroom2.webp", alt: "Living room alternate view", category: "interior", title: { en: "Living Room - Alternate", es: "Sala de Estar - Alterna" } },
      { id: 10, src: "/images/misionviejo/livingroom3.jpeg", alt: "Living room and TV", category: "interior", title: { en: "Cozy Living Area", es: "Área de Estar Acogedora" } },
      { id: 11, src: "/images/misionviejo/fullkitchen1.webp", alt: "Modern full kitchen", category: "kitchen", title: { en: "Modern Kitchen", es: "Cocina Moderna" } },
      { id: 12, src: "/images/misionviejo/fullkitchen2.jpeg", alt: "Kitchen with island", category: "kitchen", title: { en: "Kitchen with Island", es: "Cocina con Isla" } },
      { id: 13, src: "/images/misionviejo/fullkitchen3.webp", alt: "Kitchen appliances", category: "kitchen", title: { en: "Kitchen Appliances", es: "Electrodomésticos de Cocina" } },
      { id: 14, src: "/images/misionviejo/bedroom1.1.jpeg", alt: "Master bedroom", category: "bedroom", title: { en: "Master Bedroom", es: "Habitación Principal" } },
      { id: 15, src: "/images/misionviejo/bedroom1.2.jpeg", alt: "Master bedroom alternate", category: "bedroom", title: { en: "Master Bedroom - Alternate", es: "Habitación Principal - Alterna" } },
      { id: 16, src: "/images/misionviejo/bedroom2.1.webp", alt: "Second bedroom", category: "bedroom", title: { en: "Second Bedroom", es: "Segunda Habitación" } },
      { id: 17, src: "/images/misionviejo/bedroom2.2.jpeg", alt: "Second bedroom alternate", category: "bedroom", title: { en: "Second Bedroom - Alternate", es: "Segunda Habitación - Alterna" } },
      { id: 18, src: "/images/misionviejo/bedroom2.3.jpeg", alt: "Second bedroom details", category: "bedroom", title: { en: "Second Bedroom Details", es: "Detalles de la Segunda Habitación" } },
      { id: 19, src: "/images/misionviejo/bedroom3.1.jpeg", alt: "Third bedroom", category: "bedroom", title: { en: "Third Bedroom", es: "Tercera Habitación" } },
      { id: 20, src: "/images/misionviejo/bedroom3.2.jpeg", alt: "Third bedroom alternate", category: "bedroom", title: { en: "Third Bedroom - Alternate", es: "Tercera Habitación - Alterna" } },
      { id: 21, src: "/images/misionviejo/fullbathroom1.jpeg", alt: "Full bathroom 1", category: "bathroom", title: { en: "Full Bathroom 1", es: "Baño Completo 1" } },
      { id: 22, src: "/images/misionviejo/fullbathroom1.2.jpeg", alt: "Full bathroom 1 alternate", category: "bathroom", title: { en: "Full Bathroom 1 - Alternate", es: "Baño Completo 1 - Alterno" } },
      { id: 23, src: "/images/misionviejo/fullbathroom2.jpeg", alt: "Full bathroom 2", category: "bathroom", title: { en: "Full Bathroom 2", es: "Baño Completo 2" } },
      { id: 24, src: "/images/misionviejo/patio1.webp", alt: "Patio seating", category: "amenity", title: { en: "Patio Seating", es: "Asientos en el Patio" } },
      { id: 25, src: "/images/misionviejo/patio1.2.jpeg", alt: "Patio dining", category: "amenity", title: { en: "Patio Dining", es: "Comedor en el Patio" } },
      { id: 26, src: "/images/misionviejo/patio1.3.jpeg", alt: "Patio lounge", category: "amenity", title: { en: "Patio Lounge", es: "Sala en el Patio" } }
    ]
  }
];
