
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
  overlayOpacity?: number;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  buttonText = "Learn More",
  buttonLink = "#",
  backgroundImage = "/lovable-uploads/fe11fbd3-8a3c-4b73-9c5d-807dce50204b.png",
  overlayOpacity = 0.7,
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="relative min-h-[80vh] md:min-h-screen flex items-center w-full">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay - using a gradient overlay instead of a flat color for a more modern look */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 pt-24 w-full">
        <div className="max-w-4xl">
          {subtitle && (
            <p className="text-white text-base md:text-lg mb-3 md:mb-4 animate-fade-in font-medium tracking-wide drop-shadow-md">
              {subtitle}
            </p>
          )}
          <h1 className={`text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-4 md:mb-6 leading-tight animate-fade-in drop-shadow-md`} style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl animate-fade-in drop-shadow-sm" style={{ animationDelay: '0.2s' }}>
              {description}
            </p>
          )}
          {buttonText && (
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="bg-transparent hover:bg-white text-white hover:text-blue-900 border-2 border-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg h-auto rounded-full transition-colors duration-300"
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
