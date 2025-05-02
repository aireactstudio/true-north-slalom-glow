
import React from 'react';
import { Button } from "@/components/ui/button";

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
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-tnorth-dark z-10"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 pt-24">
        <div className="max-w-4xl">
          {subtitle && (
            <p className="text-tnorth-accent text-lg mb-4 animate-fade-in font-medium tracking-wide">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {description}
            </p>
          )}
          {buttonText && (
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                className="bg-tnorth hover:bg-tnorth-light text-white px-8 py-6 text-lg h-auto"
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
