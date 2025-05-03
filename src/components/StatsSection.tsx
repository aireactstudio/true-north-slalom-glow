import React from 'react';
import { CheckSquare, Cloud, Calendar, Users } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <CheckSquare className="w-10 h-10 text-tnorth-accent" />,
      value: "60%",
      description: "Reduction of IT Incidents after 4 months"
    },
    {
      icon: <Cloud className="w-10 h-10 text-tnorth-accent" />,
      value: "99.999%",
      description: "Average uptime with True North cloud"
    },
    {
      icon: <Calendar className="w-10 h-10 text-tnorth-accent" />,
      value: "15 Years",
      description: "1000's of Healthcare IT projects over 15 years, 100+ practices under management"
    },
    {
      icon: <Users className="w-10 h-10 text-tnorth-accent" />,
      value: "30+",
      description: "Senior IT Consultants with over 10 Years EHR Experience"
    }
  ];

  return (
    <section className="py-16 bg-tnorth-surface-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 drop-shadow-md">
          True North by the Numbers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-tnorth mb-2">
                  {stat.value}
                </h3>
                <p className="text-tnorth-text-muted text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
