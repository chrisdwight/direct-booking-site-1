import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'bedroom' | 'bathroom' | 'kitchen' | 'amenity' | 'view';
  title: {
    en: string;
    es: string;
  };
}

interface PhotoGalleryProps {
  propertyName: string;
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ propertyName, photos }) => {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', en: 'All Photos', es: 'Todas las Fotos' },
    { key: 'exterior', en: 'Exterior', es: 'Exterior' },
    { key: 'interior', en: 'Interior', es: 'Interior' },
    { key: 'bedroom', en: 'Bedrooms', es: 'Habitaciones' },
    { key: 'bathroom', en: 'Bathrooms', es: 'Baños' },
    { key: 'kitchen', en: 'Kitchen', es: 'Cocina' },
    { key: 'amenity', en: 'Amenities', es: 'Amenidades' },
    { key: 'view', en: 'Views', es: 'Vistas' }
  ];

  const filteredPhotos = activeCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="photo-gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">
          {language === 'en' ? 'Photo Gallery' : 'Galería de Fotos'}
        </h2>
        <p className="gallery-subtitle">
          {language === 'en' 
            ? `Explore ${propertyName} through our comprehensive photo collection`
            : `Explora ${propertyName} a través de nuestra colección completa de fotos`
          }
        </p>
      </div>

      {/* Category Filter Dropdown */}
      <div className="gallery-filter-dropdown">
        <label htmlFor="category-select" className="filter-label">
          {language === 'en' ? 'Filter by:' : 'Filtrar por:'}
        </label>
        <select
          id="category-select"
          className="category-select"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category.key} value={category.key}>
              {category[language]}
            </option>
          ))}
        </select>
      </div>

      {/* Photo Grid */}
      {filteredPhotos.length > 0 && (
        <div className="photo-grid">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="photo-item"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="grid-image"
                loading="lazy"
              />
              <div className="photo-overlay">
                <h4>{photo.title[language]}</h4>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredPhotos.length === 0 && (
        <div className="gallery-empty">
          <p>
            {language === 'en' 
              ? 'No photos available for this category.' 
              : 'No hay fotos disponibles para esta categoría.'}
          </p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="lightbox-container" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedPhoto(null)}>×</button>
            
            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={() => {
                const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
                const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
                setSelectedPhoto(filteredPhotos[newIndex]);
              }}
            >
              ‹
            </button>
            
            <div className="lightbox-content">
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <h3>{selectedPhoto.title[language]}</h3>
                <p>{filteredPhotos.findIndex(p => p.id === selectedPhoto.id) + 1} / {filteredPhotos.length}</p>
              </div>
            </div>
            
            <button 
              className="lightbox-nav lightbox-next" 
              onClick={() => {
                const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
                const newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
                setSelectedPhoto(filteredPhotos[newIndex]);
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
