
import React from 'react';

const Partners: React.FC = () => {
  // Partner logos would go here (using placeholder images)
  const partners = [
    { name: 'AWS', logo: '/lovable-uploads/19519767-7e4d-4e4f-ac55-b1bf82b0db44.png' },
    { name: 'Microsoft', logo: '/lovable-uploads/63f80472-0c9c-450e-962a-b29e16c96fb1.png' },
    { name: 'Google Cloud', logo: '/lovable-uploads/df6ca71a-07b2-493c-9f17-b8e935a84b70.png' },
    { name: 'Cisco', logo: '/lovable-uploads/94ddb473-c6e9-4b17-8148-019e545e1860.png' },
    { name: 'Epic', logo: '/lovable-uploads/5eed2065-379d-48f8-84dc-1c138fb424c6.png' },
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
