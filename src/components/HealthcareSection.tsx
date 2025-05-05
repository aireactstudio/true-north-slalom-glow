import React from 'react';
import { Check } from 'lucide-react';

const HealthcareSection: React.FC = () => {
  return (
    <section className="py-20 bg-tnorth-surface-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-[20%] w-64 h-64 bg-indigo-900/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          {/* Content section */}
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Treat More Patients Per Doctor Per Day With Faster System Load Times And Modern Technology
            </h2>
            
            <p className="text-lg text-white/70 mb-10">
              We'll ensure that your practice exceeds MACRA standards and complies with HIPAA regulations.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-blue-600/30 mt-1">
                  <Check className="h-5 w-5 text-blue-400" strokeWidth={2.5} />
                </div>
                <p className="text-white/90">
                  <span className="font-medium">Eliminate crashes & downtime</span> with a team that has 40+ years of IT expertise in the healthcare industry
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-blue-600/30 mt-1">
                  <Check className="h-5 w-5 text-blue-400" strokeWidth={2.5} />
                </div>
                <p className="text-white/90">
                  <span className="font-medium">Keep all your patient data secure</span> from hackers, and never worry about being held ransom
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-blue-600/30 mt-1">
                  <Check className="h-5 w-5 text-blue-400" strokeWidth={2.5} />
                </div>
                <p className="text-white/90">
                  <span className="font-medium">Be 100% compliant</span> with HIPAA and PCI standards
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-blue-600/30 mt-1">
                  <Check className="h-5 w-5 text-blue-400" strokeWidth={2.5} />
                </div>
                <p className="text-white/90">
                  <span className="font-medium">Have 0 bottlenecks, 0 data security risks,</span> and 0 cost in-efficiencies
                </p>
              </div>
            </div>
            
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
            >
              See Service Pricing
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          {/* Image section */}
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative dots pattern behind image */}
              <div className="absolute bottom-0 right-0 w-32 h-32 pattern-grid-lg text-blue-500/20 transform translate-x-6 translate-y-6"></div>
              
              {/* Image container with shadow */}
              <div className="relative z-10 w-full max-w-md rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/surgeon.jpg" 
                  alt="Surgeon in operating room" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-tnorth-surface-dark to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareSection;
