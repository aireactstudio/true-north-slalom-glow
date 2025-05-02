
import React from 'react';

const Partners: React.FC = () => {
  // Partner logos using the newly uploaded images
  const partners = [
    { name: 'Cisco', logo: '/lovable-uploads/c152e9b9-2214-4f6a-9f7e-60a88a816960.png' },
    { name: 'Citrix', logo: '/lovable-uploads/1ac79533-fdd0-4f3a-9ef9-4e877ee628e9.png' },
    { name: 'Microsoft Gold Partner', logo: '/lovable-uploads/8c7a533f-d54f-4492-870e-4423ef65c305.png' },
    { name: 'Modernizing Medicine', logo: '/lovable-uploads/a7db0800-19d0-4073-9922-490670e1bbe0.png' },
    { name: 'VMware', logo: '/lovable-uploads/f77348d2-90ab-4085-a227-417876a3e0db.png' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Trusted Technology Partners</h2>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
