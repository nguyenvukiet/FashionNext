import React, { useRef, useEffect } from 'react';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

const LightGalleryComponent = ({ images }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = lightGallery(galleryRef.current, {
      plugins: [lgThumbnail, lgFullscreen],
      speed: 500,
    });

    return () => {
      gallery.destroy(true);
    };
  }, []);

  return (
    <div ref={galleryRef} className="fb-img-list gallery mt-12">
      {images.map((image, index) => (
        <a key={index} className="fb-img-item" href={image}>
          <img src={image} alt={`hinh ${index}`} />
        </a>
      ))}
    </div>
  );
};

export default LightGalleryComponent;