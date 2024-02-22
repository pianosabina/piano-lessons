import React from 'react';

const PhotoGallery = ({ images }) => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // This will center the child items
    gap: '16px'
  }}>
    {images.map((image, index) => (
      // Set the width of each photo container to 100% to ensure only one photo per row
      <div key={index} style={{ width: '100%' }}>
        <img src={image.src} alt={image.alt} style={{ width: '50%', height: 'auto', borderRadius: '8px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>
    ))}
  </div>
);

export default PhotoGallery;
