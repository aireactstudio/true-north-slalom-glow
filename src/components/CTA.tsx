
import React from 'react';
import { Button } from "@/components/ui/button";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage = "/lovable-uploads/5eed2065-379d-48f8-84dc-1c138fb424c6.png",
}) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-tnorth-dark opacity-90" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl mb-8">{description}</p>
          <Button 
            className="bg-white text-tnorth-dark hover:bg-gray-100 px-8 py-6 text-lg h-auto"
            asChild
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
