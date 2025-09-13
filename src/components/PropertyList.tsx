import React, { useEffect, useState } from 'react';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

const PropertyList: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('http://localhost:5000/properties');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProperties(data);
            } catch (err) {
                if (err instanceof Error) setError(err.message);
                else setError(String(err));
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    if (loading) {
        return <div>Loading properties...</div>;
    }

    if (error) {
        return <div>Error fetching properties: {error}</div>;
    }

    return (
        <div className="property-list">
            {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;