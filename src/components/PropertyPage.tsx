import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Property } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import PhotoGallery from './PhotoGallery';
import BookingCalendar from './BookingCalendar';
import { fallbackProperties } from '../data/fallbackProperties';

const PropertyPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { language, t } = useLanguage();
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Using shared fallbackProperties for non-API environments (e.g., GitHub Pages)

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