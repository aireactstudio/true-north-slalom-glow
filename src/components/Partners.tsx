
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Partners: React.FC = () => {
  // Partner logos using the actual logo files
  const partners = [
    { name: 'Cisco', logo: '/lovable-uploads/Cisco-1.webp' },
    { name: 'Citrix', logo: '/lovable-uploads/Citrix-1.jpg' },
    { name: 'Microsoft Gold Partner', logo: '/lovable-uploads/misrosoft-partner-logo.jpg' },
    { name: 'Modernizing Medicine', logo: '/lovable-uploads/Modernizing-medicine.jpg' },
    { name: 'VMware', logo: '/lovable-uploads/VMware.jpg' },
  ];
  
  const isMobile = useIsMobile();

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold">Trusted Technology Partners</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">We work with industry leaders to deliver the best solutions for our clients</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className={`max-h-12 md:max-h-16 w-auto object-contain transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
