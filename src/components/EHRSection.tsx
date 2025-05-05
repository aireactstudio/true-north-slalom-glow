import React from 'react';
import { ArrowRight } from 'lucide-react';

const EHRSection: React.FC = () => {
  // EHR/EMR systems that True North supports
  const ehrSystems = [
    { name: 'AthenaHealth', color: 'text-white' },
    { name: 'Centricity', subtext: '(Virence Health)', color: 'text-blue-400' },
    { name: 'NextGen', color: 'text-blue-400' },
    { name: 'Allscripts', color: 'text-blue-400' },
    { name: 'Aprima', color: 'text-blue-400' },
    { name: 'And more!', color: 'text-white' }
  ];

  return (
    <section className="py-20 bg-tnorth-surface-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] right-[5%] w-80 h-80 bg-blue-800/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-indigo-900/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          {/* Image section - reversed order from HealthcareSection */}
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative flex justify-center">
              {/* Decorative dots pattern behind image */}
              <div className="absolute top-0 left-0 w-32 h-32 pattern-grid-lg text-blue-500/20 transform -translate-x-6 -translate-y-6"></div>
              
              {/* Image container with shadow */}
              <div className="relative z-10 w-full max-w-lg rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/images/automate-admin.jpg" 
                  alt="Healthcare professionals discussing EHR integration" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-tnorth-surface-dark to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Improve Patient Outcomes By Integrating Healthcare Systems With Your EHR To Automate Time Consuming Admin Work
            </h2>
            
            <p className="text-lg text-white/70 mb-10">
              Whether you need optimization, implementation, or migration, TrueNorthITG can help you with any of your EHR/EMR needs:
            </p>
            
            <ul className="space-y-4 mb-10">
              {ehrSystems.map((system, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span className={`${system.color}`}>
                    {system.name} {system.subtext && <span className="text-white/70 text-sm">({system.subtext})</span>}
                  </span>
                </li>
              ))}
            </ul>
            
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-medium rounded-lg transition-colors group"
            >
              <span>Contact Us Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EHRSection;
