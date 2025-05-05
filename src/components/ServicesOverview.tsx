
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Shield, HelpCircle, Database, Award, Lightbulb, BarChart3 } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  buttonText: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color, buttonText, link }) => (
  <div className={`relative overflow-hidden rounded-lg group border-2 ${color} transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20`}>
    <div className="bg-tnorth-dark p-6 h-full flex flex-col justify-between rounded-lg overflow-hidden">
      <div className="relative z-10">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 mb-6">
          {icon}
        </div>
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-6">{description}</p>
      </div>
      <div className="relative z-10">
        <Button 
          variant="outline" 
          className="rounded-lg bg-transparent border-white text-white hover:bg-white/10 w-full group-hover:bg-white/5 transition-all duration-300"
          asChild
        >
          <Link to={link}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

const ServicesOverview: React.FC = () => {
  // Healthcare service cards
  const serviceFeatures = [
    {
      title: "Improve My EMR Performance",
      description: "Optimize your Electronic Medical Records system for faster performance, better reliability, and enhanced user experience.",
      icon: <Database className="h-10 w-10 text-blue-400" />,
      color: "border-blue-600",
      buttonText: "Learn more",
      link: "/services/emr-optimization"
    },
    {
      title: "Secure My Patient Data",
      description: "HIPAA-compliant security solutions to protect sensitive patient information from breaches and ensure regulatory compliance.",
      icon: <Shield className="h-10 w-10 text-red-400" />,
      color: "border-red-600",
      buttonText: "Learn more",
      link: "/services/patient-data-security"
    },
    {
      title: "Migrate To The Cloud",
      description: "Seamless cloud migration services designed specifically for healthcare providers with zero downtime and data integrity guarantees.",
      icon: <Cloud className="h-10 w-10 text-green-400" />,
      color: "border-green-600",
      buttonText: "Learn more",
      link: "/services/cloud-migration"
    },
    {
      title: "My IT Needs Help",
      description: "Comprehensive managed IT support services for healthcare organizations with 24/7 monitoring and guaranteed response times.",
      icon: <HelpCircle className="h-10 w-10 text-purple-400" />,
      color: "border-purple-600",
      buttonText: "Learn more",
      link: "/services/managed-support"
    }
  ];

  // Other features (hidden but kept in code for potential future use)
  const additionalFeatures = [
    {
      title: "Recognized Healthcare IT Partner",
      description: "Award-winning healthcare solutions and services",
      icon: <Award className="h-8 w-8 text-white" />,
      color: "from-pink-500 to-purple-700",
      buttonText: "See our achievements",
      link: "/awards"
    },
    {
      title: "Improved Patient Outcomes",
      description: "See how our solutions enhance care quality and efficiency",
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      color: "from-blue-500 to-cyan-400",
      buttonText: "View case studies",
      link: "/case-studies"
    },
    {
      title: "Healthcare IT Insights",
      description: "Key findings from our Healthcare Technology Report",
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      color: "from-yellow-400 to-amber-600",
      buttonText: "Read our research",
      link: "/healthcare-research"
    }
  ];

  return (
    <section className="py-20 bg-tnorth-surface-dark">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Purpose-Built IT Solutions for Healthcare</h2>
          <p className="text-lg text-white/80">
            We deliver specialized IT solutions designed exclusively for healthcare providers
            to improve patient care, ensure data security, and optimize clinical workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              buttonText={feature.buttonText}
              link={feature.link}
            />
          ))}
        </div>
      </div>
      <div className="mt-16 border-t border-white/10 mx-auto max-w-7xl"></div>
    </section>
  );
};

export default ServicesOverview;
