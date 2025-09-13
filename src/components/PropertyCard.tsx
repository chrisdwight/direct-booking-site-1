import React from 'react';
import { Property } from '../types';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const { language, t } = useLanguage();
  
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <div>
        <h2>{property.name}</h2>
        <p className="location">{property.location}</p>
        <p>{typeof property.summary === 'string' ? property.summary : property.summary[language]}</p>
        <div className="amenities">
          {(Array.isArray(property.amenities) ? property.amenities : property.amenities[language]).map((a, i) => (
            <span className="amenity" key={i}>{a}</span>
          ))}
        </div>
        <Link
          to={`/property/${property.id}`}
          style={{
            display: "inline-block",
            marginTop: "1rem",
            background: "#222",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
            letterSpacing: "0.03em",
            transition: "background 0.2s"
          }}
        >
          {t('viewDetails')}
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;