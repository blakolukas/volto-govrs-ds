import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

// Helper function to get YouTube video ID
const getYouTubeId = (url) => {
  const match = url?.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/,
  );
  return match ? match[1] : null;
};

// Helper function to get Vimeo video ID
const getVimeoId = (url) => {
  const match = url?.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

function CarouselView({ data = {} }) {
  const {
    items = [],
    autoplay = true,
    autoplaySpeed = 3000,
    circular = true,
    width = 'default',
    indicators = 'default',
    enableSwipe = true,
    noArrowsMobile = false,
  } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState({});
  const [slideDirection, setSlideDirection] = useState('right');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Auto-play functionality
  useEffect(() => {
    if (!autoplay || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % items.length;
        // Stop autoplay at last slide if not circular
        if (!circular && nextIndex === 0) {
          clearInterval(interval);
          return prevIndex;
        }
        return nextIndex;
      });
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, items.length, circular, currentIndex]);

  const goToSlide = (index) => {
    if (index === currentIndex || isTransitioning) return;
    setPrevIndex(currentIndex);
    setSlideDirection(index > currentIndex ? 'right' : 'left');
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    // Don't navigate if at first slide and not circular
    if (!circular && currentIndex === 0) return;
    setPrevIndex(currentIndex);
    setSlideDirection('left');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    // Don't navigate if at last slide and not circular
    if (!circular && currentIndex === items.length - 1) return;
    setPrevIndex(currentIndex);
    setSlideDirection('right');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch handlers for swipe functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    if (!enableSwipe) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!enableSwipe) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!enableSwipe) return;
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // If no items, show placeholder
  if (!items || items.length === 0) {
    return (
      <div className="carousel-placeholder">
        <p>No carousel items configured. Please add items in edit mode.</p>
      </div>
    );
  }

  // Determine if buttons should be disabled
  const isPrevDisabled = !circular && currentIndex === 0;
  const isNextDisabled = !circular && currentIndex === items.length - 1;

  return (
    <div className={`carousel-container`}>
      <div className="carousel-wrapper">
        <button
          className={`carousel-button carousel-button-prev icon-${width} ${noArrowsMobile ? 'hide-on-mobile' : ''}`}
          onClick={goToPrevious}
          disabled={isPrevDisabled}
          aria-label="Previous slide"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div
          className={`carousel-content carousel-width-${width}`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            const isPrevious = index === prevIndex && isTransitioning;
            const shouldShow = isActive || isPrevious;

            // When sliding right, old slide goes left. When sliding left, old slide goes right.
            const slideOutDirection =
              slideDirection === 'right' ? 'left' : 'right';

            let slideClass = 'carousel-slide';
            if (isActive) {
              slideClass = `carousel-slide active slide-in-${slideDirection}`;
            } else if (isPrevious) {
              slideClass = `carousel-slide previous slide-out-${slideOutDirection}`;
            }

            return (
              <div
                key={index}
                className={slideClass}
                style={{ display: shouldShow ? 'block' : 'none' }}
              >
                {item.videoUrl ? (
                  (() => {
                    const youtubeId = getYouTubeId(item.videoUrl);
                    const vimeoId = getVimeoId(item.videoUrl);

                    if (youtubeId) {
                      return loadedVideos[index] ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                          title={item.title || `YouTube video ${index + 1}`}
                          className="carousel-video carousel-iframe"
                          style={{ border: 0 }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="carousel-video-thumbnail"
                          onClick={() =>
                            setLoadedVideos({
                              ...loadedVideos,
                              [index]: true,
                            })
                          }
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setLoadedVideos({
                                ...loadedVideos,
                                [index]: true,
                              });
                            }
                          }}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                            alt={item.title || `Video thumbnail ${index + 1}`}
                            className="carousel-thumbnail-image"
                          />
                          <button
                            className="carousel-play-overlay"
                            aria-label="Play video"
                          >
                            <span className="play-icon"></span>
                          </button>
                        </div>
                      );
                    } else if (vimeoId) {
                      return loadedVideos[index] ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
                          title={item.title || `Vimeo video ${index + 1}`}
                          className="carousel-video carousel-iframe"
                          style={{ border: 0 }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          className="carousel-video-thumbnail"
                          onClick={() =>
                            setLoadedVideos({
                              ...loadedVideos,
                              [index]: true,
                            })
                          }
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setLoadedVideos({
                                ...loadedVideos,
                                [index]: true,
                              });
                            }
                          }}
                        >
                          <div className="carousel-thumbnail-placeholder">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            <span>Vimeo Video</span>
                          </div>
                          <button
                            className="carousel-play-overlay"
                            aria-label="Play video"
                          >
                            <span className="play-icon"></span>
                          </button>
                        </div>
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
                          <track kind="captions" />
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
                ) : (
                  <div className="carousel-image-placeholder">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span>No image or video</span>
                  </div>
                )}
                {(item.title || item.description) && (
                  <div className="carousel-text">
                    {item.title && (
                      <h3 className="carousel-title">{item.title}</h3>
                    )}
                    {item.description && (
                      <p className="carousel-description">{item.description}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          className={`carousel-button carousel-button-next icon-${width} ${noArrowsMobile ? 'hide-on-mobile' : ''}`}
          onClick={goToNext}
          disabled={isNextDisabled}
          aria-label="Next slide"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className={`carousel-indicators carousel-indicators-${indicators}`}>
        {indicators === 'numbers' ? (
          <div className="carousel-indicator-numbers">
            {currentIndex + 1} / {items.length}
          </div>
        ) : (
          items.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CarouselView;
