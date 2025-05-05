
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Partner {
  name: string;
  logo: string;
}

const Partners: React.FC = () => {
  // Partner logos using the actual logo files
  const partners: Partner[] = [
    { name: 'Cisco', logo: '/lovable-uploads/Cisco-1.webp' },
    { name: 'Citrix', logo: '/lovable-uploads/Citrix-1.jpg' },
    { name: 'Microsoft Gold Partner', logo: '/lovable-uploads/misrosoft-partner-logo.jpg' },
    { name: 'Modernizing Medicine', logo: '/lovable-uploads/Modernizing-medicine.jpg' },
    { name: 'VMware', logo: '/lovable-uploads/VMware.jpg' },
  ];
  
  const isMobile = useIsMobile();

  return (
    <section className="py-24 bg-tnorth-surface-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-96 h-96 bg-blue-800/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-[20%] w-64 h-64 bg-indigo-900/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Trusted Technology Partners
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            We collaborate with industry-leading technology providers to deliver secure, scalable, and innovative healthcare IT solutions
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-800/40 p-6 rounded-lg hover:shadow-lg transition-all duration-300 w-full h-full flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="max-h-14 md:max-h-16 w-auto object-contain filter brightness-125"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
