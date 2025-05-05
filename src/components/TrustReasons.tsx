import React, { useState, useEffect } from 'react';
import { Shield, Cloud, MonitorSmartphone, Clock, ChevronRight } from 'lucide-react';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const getBorderColorByIndex = (index: number, isActive: boolean) => {
  if (isActive) {
    switch (index % 4) {
      case 0: return 'border-blue-500';
      case 1: return 'border-red-500';
      case 2: return 'border-green-500';
      case 3: return 'border-purple-500';
      default: return 'border-blue-500';
    }
  } else {
    switch (index % 4) {
      case 0: return 'border-blue-800/40 hover:border-blue-600/70';
      case 1: return 'border-red-800/40 hover:border-red-600/70';
      case 2: return 'border-green-800/40 hover:border-green-600/70';
      case 3: return 'border-purple-800/40 hover:border-purple-600/70';
      default: return 'border-blue-800/40 hover:border-blue-600/70';
    }
  }
};

const getIconColorByIndex = (index: number) => {
  switch (index % 4) {
    case 0: return 'text-blue-400';
    case 1: return 'text-red-400';
    case 2: return 'text-green-400';
    case 3: return 'text-purple-400';
    default: return 'text-blue-400';
  }
};

const ReasonCard: React.FC<ReasonCardProps> = ({ 
  icon, 
  title, 
  description, 
  isActive, 
  onClick,
  index
}) => {
  return (
    <div
      className={`group cursor-pointer bg-blue-900/30 backdrop-blur-sm rounded-xl border-2 overflow-hidden transition-all duration-500 ${getBorderColorByIndex(index, isActive)} ${isActive 
        ? 'shadow-lg translate-y-0 scale-100' 
        : 'scale-95 hover:scale-97'
      }`}
      onClick={onClick}
      style={{ 
        animation: `fadeIn 0.5s ease-out forwards ${ index * 0.1}s`,
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className={`rounded-full p-4 w-16 h-16 flex items-center justify-center mb-5 transition-all duration-300 ${isActive ? 'bg-blue-600/30' : 'bg-blue-900/50 group-hover:bg-blue-800/70'}`}>
          <div className={`${getIconColorByIndex(index)}`}>{icon}</div>
        </div>
        
        <h3 className={`font-bold mb-3 transition-all duration-300 ${isActive ? 'text-white text-xl' : 'text-white/90 text-lg group-hover:text-white'}`}>
          {title}
        </h3>
        
        <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
        
        {!isActive && (
          <div className={`mt-auto flex items-center text-sm font-medium gap-1 opacity-80 group-hover:opacity-100 transition-opacity ${getIconColorByIndex(index)}`}>
            <span>Learn more</span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </div>
  );
};

const TrustReasons: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Add CSS animation to the document
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const reasons = [
    {
      icon: <Shield className="w-8 h-8" strokeWidth={1.5} />,
      title: "Guaranteed Service Levels",
      description: "We stand behind our service with guaranteed SLAs and financial compensation for any downtime. We're so confident in our reliability, we put our money where our mouth is—something few IT providers are willing to offer."
    },
    {
      icon: <Cloud className="w-8 h-8" strokeWidth={1.5} />,
      title: "Purpose-Built Cloud Solutions",
      description: "Our cloud infrastructure is specifically designed for healthcare applications, with HIPAA compliance built-in from the ground up. We understand the unique requirements of medical software and optimize our environment accordingly."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8" strokeWidth={1.5} />,
      title: "US-Based Monitoring Teams",
      description: "Your systems are monitored 24/7 by our US-based technical teams who understand healthcare IT. We don't just react to problems—we proactively optimize your systems to prevent issues before they impact your operations."
    },
    {
      icon: <Clock className="w-8 h-8" strokeWidth={1.5} />,
      title: "24/7 Emergency Response",
      description: "Healthcare never stops, and neither do we. Our support team is available around the clock with unlimited issue response and guaranteed emergency support when you need it most, ensuring your critical systems remain operational."
    }
  ];

  return (
    <section className="py-24 bg-tnorth-surface-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-blue-800/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-[30%] w-64 h-64 bg-indigo-900/10 rounded-full filter blur-3xl"></div>
        
        {/* Network-like pattern created with dots connected by lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1" fill="#3B82F6" />
              </pattern>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#gradient)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-16"
          style={{ 
            animation: 'fadeIn 0.5s ease-out forwards',
            opacity: 0,
            transform: 'translateY(20px)'
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Healthcare Organizations Trust True North
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            We understand the unique IT challenges in healthcare and deliver specialized solutions that ensure reliability, security, and performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>
        
        <div 
          className="mt-14 text-center"
          style={{ 
            animation: 'fadeIn 0.5s ease-out forwards 0.6s',
            opacity: 0,
            transform: 'translateY(20px)'
          }}
        >
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors group"
          >
            <span>Discuss Your Healthcare IT Needs</span>
            <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Decorative top and bottom gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
    </section>
  );
};

export default TrustReasons;
