
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight, Image, Video, Pause, Play } from 'lucide-react';

interface HeroMedia {
  type: 'image' | 'video';
  src: string;
  title?: string;
  description?: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  posterImage?: string; // Thumbnail for video before it loads
  overlayOpacity?: number;
  additionalMedia?: HeroMedia[];
}

const Hero: React.FC<HeroProps> = ({
  title = "Managed IT & Cloud Services\nfor Healthcare",
  subtitle,
  description = "We manage IT, cloud and security so you can focus on your patients",
  buttonText = "Learn More",
  buttonLink = "#",
  backgroundImage = "/lovable-uploads/fe11fbd3-8a3c-4b73-9c5d-807dce50204b.png",
  backgroundVideo,
  posterImage,
  overlayOpacity = 0.7,
  additionalMedia = []
}) => {
  const isMobile = useIsMobile();
  
  // Hard-code the three videos directly
  const allMedia: HeroMedia[] = [
    { type: 'video', src: '/videos/hero-video.mp4', title: 'Managed IT & Cloud Services', description: 'Enterprise solutions for healthcare providers' },
    { type: 'video', src: '/videos/hero-video-2.mp4', title: 'Healthcare IT Solutions', description: 'Secure infrastructure for medical facilities' },
    { type: 'video', src: '/videos/hero-video-3.mp4', title: 'Modern Healthcare Technology', description: 'Innovative systems for better patient care' }
  ];
  
  // Find initial video index (if exists)
  const initialVideoIndex = allMedia.findIndex(media => media.type === 'video');
  
  // State for current media index - start with video if available
  const [currentIndex, setCurrentIndex] = useState(initialVideoIndex >= 0 ? initialVideoIndex : 0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  
  // Current media being displayed
  const currentMedia = allMedia[currentIndex] || allMedia[0];
  
  // Video ref for controlling playback
  const videoRef = React.useRef<HTMLVideoElement>(null);
  
  // Handle play/pause
  useEffect(() => {
    if (currentMedia?.type === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentMedia]);
  
  // Auto-rotation timer
  useEffect(() => {
    let rotationTimer: number | null = null;
    
    if (isAutoRotating && allMedia.length > 1) {
      rotationTimer = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % allMedia.length);
      }, 4000); // 4 seconds per slide
    }
    
    return () => {
      if (rotationTimer !== null) {
        window.clearTimeout(rotationTimer);
      }
    };
  }, [currentIndex, isAutoRotating, allMedia.length]);
  
  // Functions to control the slider
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allMedia.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  return (
    <div className="relative min-h-[80vh] md:min-h-screen flex items-center w-full">
      {/* Background media (image or video) */}
      {currentMedia?.type === 'video' ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay={isPlaying}
            muted
            loop
            playsInline
            poster={posterImage || backgroundImage}
            className="absolute w-full h-full object-cover"
          >
            <source src={currentMedia.src} type="video/mp4" />
            {/* Fallback to image if video can't be played */}
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${currentMedia?.src || backgroundImage})` }}
        />
      )}
      
      {/* Overlay - reduced opacity gradient to showcase the background better */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"
      />
      
      {/* Content - flush with left edge */}
      <div className="relative z-20 pt-24 w-full">
        <div className="max-w-xl px-4 sm:px-6 md:px-8">
          {subtitle && (
            <p className="text-white text-base md:text-lg mb-3 md:mb-4 animate-fade-in font-medium tracking-wide drop-shadow-md">
              {subtitle}
            </p>
          )}
          <h1 className={`text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-3 md:mb-4 leading-tight animate-fade-in drop-shadow-md`} style={{ animationDelay: '0.1s' }}>
            {title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          {description && (
            <p className="text-base md:text-xl text-white/90 mb-4 md:mb-6 max-w-lg animate-fade-in drop-shadow-sm" style={{ animationDelay: '0.2s' }}>
              {description}
            </p>
          )}
          {buttonText && (
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="bg-transparent hover:bg-white text-white hover:text-blue-900 border-2 border-white px-5 md:px-6 py-2 md:py-3 text-sm md:text-base h-auto rounded-full transition-colors duration-300"
                asChild
              >
                <a href={buttonLink}>{buttonText}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Controller in bottom right corner */}
      {allMedia.length > 1 && (
        <div className="absolute bottom-6 right-6 z-30 flex items-center bg-black/40 backdrop-blur-sm rounded-full p-1.5 px-3 min-w-[200px] justify-between">
          <button 
            onClick={goToPrevious}
            className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          
          {/* Display current position */}
          <div className="flex space-x-1.5 mx-2 flex-grow justify-center">
            {allMedia.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full cursor-pointer ${idx === currentIndex ? 'w-6 bg-white' : 'w-3 bg-white/40'}`}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoRotating(false);
                }}
              />
            ))}
          </div>
          
          <div className="flex">
            {currentMedia?.type === 'video' && (
              <button 
                onClick={togglePlayPause}
                className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            )}
            
            {/* Auto-rotate toggle */}
            <button
              onClick={toggleAutoRotate}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isAutoRotating ? 'text-white bg-white/20' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
              aria-label={isAutoRotating ? "Turn off auto-rotation" : "Turn on auto-rotation"}
            >
              <span className="text-xs font-medium">Auto</span>
            </button>
          </div>
          
          <button 
            onClick={goToNext}
            className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero;
