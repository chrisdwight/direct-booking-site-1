import React from 'react';
import PropertyList from '../components/PropertyList';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Our Rental Properties</h1>
            <PropertyList />
        </div>
    );
};

export default HomePage;