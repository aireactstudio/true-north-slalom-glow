import React from 'react';
import { CheckSquare, Cloud, Calendar, Users, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <CheckSquare strokeWidth={1.5} />,
      value: "60%",
      description: "Reduction of IT Incidents after 4 months",
      gradient: "from-blue-400 to-purple-500",
      accent: "bg-blue-500"
    },
    {
      icon: <Cloud strokeWidth={1.5} />,
      value: "99.999%",
      description: "Average uptime with True North cloud",
      gradient: "from-indigo-500 to-purple-600",
      accent: "bg-indigo-500"
    },
    {
      icon: <Calendar strokeWidth={1.5} />,
      value: "15 Years",
      description: "1000's of Healthcare IT projects, 100+ practices under management",
      gradient: "from-purple-500 to-pink-500",
      accent: "bg-purple-500"
    },
    {
      icon: <Users strokeWidth={1.5} />,
      value: "30+",
      description: "Senior IT Consultants with over 10 Years EHR Experience",
      gradient: "from-blue-500 to-teal-400",
      accent: "bg-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-tnorth-surface-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-800 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-800 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-800/20 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            True North by the Numbers
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Our results-driven approach delivers measurable improvements to healthcare IT infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative bg-blue-900/30 backdrop-blur-sm border border-blue-800/40 rounded-xl overflow-hidden group"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className={cn("absolute top-0 right-0 w-24 h-24 -mt-4 -mr-4 transform rotate-45", stat.accent)}></div>
              </div>
              
              <div className="p-8 h-full">
                {/* Icon with gradient background */}
                <div className="mb-6 relative">
                  <div className={cn("w-16 h-16 rounded-lg bg-gradient-to-br flex items-center justify-center text-white", stat.gradient)}>
                    <div className="w-8 h-8">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center border border-blue-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3 h-3 text-blue-300" />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-4xl font-bold mb-3 text-white bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-blue-200/90 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
