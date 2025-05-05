
import React from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

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
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-[80vh] md:min-h-screen flex items-center w-full">
      {/* Background media (image or video) */}
      {backgroundVideo ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterImage || backgroundImage}
            className="absolute w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            {/* Fallback to image if video can't be played */}
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
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
    </div>
  );
};

export default Hero;
