import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ChevronRight, Server, Shield, Cpu } from 'lucide-react';

interface TabItem {
  id: string;
  title: string;
  content: {
    heading: string;
    services: string[];
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta?: {
      text: string;
      href: string;
    };
  };
}

interface TabsSectionProps {
  tabs: TabItem[];
  className?: string;
}

// Get the icon based on tab ID
const getTabIcon = (id: string) => {
  switch (id) {
    case 'managed-cloud':
      return <Server className="w-5 h-5" />;
    case 'security-dr':
      return <Shield className="w-5 h-5" />;
    case 'managed-it':
      return <Cpu className="w-5 h-5" />;
    default:
      return <Server className="w-5 h-5" />;
  }
};

const TabsSection: React.FC<TabsSectionProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [flipCount, setFlipCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;
  
  // Function to switch tabs with animation
  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    
    // Increment the flip count to trigger rotation
    setFlipCount(prev => prev + 1);
    
    // Wait for half of the animation time before updating content
    setTimeout(() => {
      setActiveTab(tabId);
    }, 350);
  };

  return (
    <section className={cn("py-24 bg-tnorth-surface-dark text-white relative overflow-hidden", className)}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
            Our Healthcare IT Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            We offer comprehensive IT solutions designed specifically for healthcare providers
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Side: Tabs */}
          <div className="md:w-1/3 lg:w-1/4">
            <div className="bg-blue-900/50 rounded-lg overflow-hidden border border-blue-800/50 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "w-full text-left py-5 px-6 flex items-center gap-3 font-medium transition-all duration-300 border-l-4",
                    activeTab === tab.id
                      ? "bg-blue-800/70 text-white border-blue-400 shadow-md"
                      : "text-white/80 hover:bg-blue-800/40 hover:text-white border-transparent"
                  )}
                >
                  <div className={cn(
                    "p-2 rounded-full transition-colors",
                    activeTab === tab.id ? "bg-blue-700" : "bg-blue-900/70"
                  )}>
                    {getTabIcon(tab.id)}
                  </div>
                  <div className="flex-1">
                    <div>{tab.title}</div>
                    <div className="text-xs text-blue-300/80 mt-1 font-normal">
                      {tab.id === 'managed-cloud' && 'AWS & Azure Hosting Solutions'}
                      {tab.id === 'security-dr' && 'HIPAA Compliant Protection'}
                      {tab.id === 'managed-it' && 'Healthcare IT Strategy'}
                    </div>
                  </div>
                  <ChevronRight 
                    className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      activeTab === tab.id ? "opacity-100" : "opacity-0"
                    )} 
                  />
                </button>
              ))}
            </div>
            
            {/* Decorative corner accent */}
            <div className="hidden lg:block h-48 w-48 relative mt-8">
              <div className="absolute top-0 left-0 w-24 h-px bg-blue-500/30"></div>
              <div className="absolute top-0 left-0 h-24 w-px bg-blue-500/30"></div>
              <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-blue-500"></div>
            </div>
          </div>

          {/* Right Side: Content with 3D flip animation */}
          <div className="md:w-2/3 lg:w-3/4 relative" style={{ perspective: '1000px', minHeight: '550px' }}>
            <div 
              ref={cardRef}
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.7s ease-in-out',
                position: 'relative',
                width: '100%',
                height: '100%',
                transformOrigin: 'center center',
                transform: `rotateY(${flipCount * 180}deg)`
              }}
            >
              {/* Front side */}
              <div 
                style={{
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                className="bg-blue-800/20 backdrop-blur-md p-8 md:p-10 rounded-lg shadow-xl border border-blue-700/50"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeContent?.heading}</h2>
                <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {activeContent?.services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4 group hover:bg-blue-800/20 p-3 rounded-md transition-all">
                      <div className="flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors mt-0.5">
                        <CheckCircle size={20} className="stroke-[1.5]" />
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">{service}</p>
                        <p className="text-blue-300/70 text-sm mt-1">Healthcare Industry Standard</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mt-12 border-t border-blue-700/50 pt-8">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-600/20"
                    asChild
                  >
                    <a href={activeContent?.primaryCta.href}>
                      <span>{activeContent?.primaryCta.text}</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  
                  {activeContent?.secondaryCta && (
                    <Button 
                      className="bg-transparent border border-blue-500 text-blue-300 hover:bg-blue-800/50 font-medium px-6 py-3 rounded-md transition-all duration-300"
                      asChild
                    >
                      <a href={activeContent?.secondaryCta?.href}>
                        <span>{activeContent?.secondaryCta?.text}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Back side */}
              <div 
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                className="bg-blue-800/20 backdrop-blur-md p-8 md:p-10 rounded-lg shadow-xl border border-blue-700/50"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeContent?.heading}</h2>
                <div className="w-16 h-1 bg-blue-600 mb-6"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {activeContent?.services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4 group hover:bg-blue-800/20 p-3 rounded-md transition-all">
                      <div className="flex-shrink-0 text-blue-400 group-hover:text-blue-300 transition-colors mt-0.5">
                        <CheckCircle size={20} className="stroke-[1.5]" />
                      </div>
                      <div>
                        <p className="text-white/90 font-medium">{service}</p>
                        <p className="text-blue-300/70 text-sm mt-1">Healthcare Industry Standard</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mt-12 border-t border-blue-700/50 pt-8">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-600/20"
                    asChild
                  >
                    <a href={activeContent?.primaryCta.href}>
                      <span>{activeContent?.primaryCta.text}</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  
                  {activeContent?.secondaryCta && (
                    <Button 
                      className="bg-transparent border border-blue-500 text-blue-300 hover:bg-blue-800/50 font-medium px-6 py-3 rounded-md transition-all duration-300"
                      asChild
                    >
                      <a href={activeContent?.secondaryCta?.href}>
                        <span>{activeContent?.secondaryCta?.text}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;