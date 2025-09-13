import React, { useEffect, useState } from 'react';
import { Property } from '../types';

interface Availability {
    date: string;
    isAvailable: boolean;
}

interface PropertyAvailabilityProps {
    propertyId: number;
}

const PropertyAvailability: React.FC<PropertyAvailabilityProps> = ({ propertyId }) => {
    const [availability, setAvailability] = useState<Availability[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const response = await fetch(`http://localhost:5000/availability?propertyId=${propertyId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAvailability(data);
            } catch (err) {
                  if (err instanceof Error) setError(err.message);
                  else setError(String(err));
            } finally {
                setLoading(false);
            }
        };

        fetchAvailability();
    }, [propertyId]);

    if (loading) {
        return <div>Loading availability...</div>;
    }

    if (error) {
        return <div>Error fetching availability: {error}</div>;
    }

    return (
        <div className="property-availability">
            <h3>Availability</h3>
            <ul>
                {availability.map((item) => (
                    <li key={item.date}>
                        {item.date}: {item.isAvailable ? 'Available' : 'Booked'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyAvailability;