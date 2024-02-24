import Layout from '@theme/Layout';
import React from 'react';
import PhotoGallery from '../components/PhotoGallery'; // Adjust the path as necessary

const images = [
  { src: '/img/ref1.png'},
  { src: '/img/ref2.png'},
  { src: '/img/ref3.png'},
  { src: '/img/ref4.png'},
  // Add more images as necessary
];

function References() {
  return (
    <Layout title="Referanser">
      <div>
        {/* <h1> -References- </h1> */}
        {/* Use the gallery component with the images array */}
        <PhotoGallery images={images} />
      </div>
    </Layout>
  );
}

export default References;
