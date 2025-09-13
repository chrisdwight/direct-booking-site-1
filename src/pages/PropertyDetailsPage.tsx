import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyPage from '../components/PropertyPage';
import ContactSection from '../components/ContactSection';

const PropertyDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="property-details-page">
            <PropertyPage />
            <ContactSection />
        </div>
    );
};

export default PropertyDetailsPage;