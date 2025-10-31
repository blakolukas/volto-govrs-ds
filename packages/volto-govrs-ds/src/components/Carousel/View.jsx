import React from 'react';
import { useState, useEffect } from 'react';
import './Carousel.css';

// Helper function to get YouTube video ID
const getYouTubeId = (url) => {
  const match = url?.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
};

// Helper function to get Vimeo video ID
const getVimeoId = (url) => {
  const match = url?.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

function CarouselView({ data = {} }) {
  const { items = [], autoplay = true, autoplaySpeed = 3000 } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoplay || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // If no items, show placeholder
  if (!items || items.length === 0) {
    return (
      <div className="carousel-placeholder">
        <p>No carousel items configured. Please add items in edit mode.</p>
      </div>
    );
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button
          className="carousel-button carousel-button-prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          ❮
        </button>

        <div className="carousel-content">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              {item.videoUrl ? (
                (() => {
                  const youtubeId = getYouTubeId(item.videoUrl);
                  const vimeoId = getVimeoId(item.videoUrl);

                  if (youtubeId) {
                    return (
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={item.title || `YouTube video ${index + 1}`}
                        className="carousel-video carousel-iframe"
                        style={{ border: 0 }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    );
                  } else if (vimeoId) {
                    return (
                      <iframe
                        src={`https://player.vimeo.com/video/${vimeoId}`}
                        title={item.title || `Vimeo video ${index + 1}`}
                        className="carousel-video carousel-iframe"
                        style={{ border: 0 }}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    );
                  } else {
                    // Direct video URL
                    return (
                      <video
                        src={item.videoUrl}
                        controls
                        className="carousel-video"
                        aria-label={item.title || `Video ${index + 1}`}
                      >
                        Your browser does not support the video tag.
                      </video>
                    );
                  }
                })()
              ) : item.image ? (
                <img
                  src={item.image}
                  alt={item.title || `Slide ${index + 1}`}
                  className="carousel-image"
                />
              ) : null}
              {
                (item.title || item.description) && 
                <div className='carousel-text'>
                  {item.title && <h3 className="carousel-title">{item.title}</h3>}
                  {item.description && <p className="carousel-description">{item.description}</p>}
                </div>
              }
            </div>
          ))}
        </div>

        <button
          className="carousel-button carousel-button-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselView;