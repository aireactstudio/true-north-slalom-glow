
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, Shield, Activity, LightbulbIcon, BarChart3, Brain, Trophy } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
    <div className="text-tnorth mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 flex-grow mb-4">{description}</p>
    <Link 
      to={link}
      className="text-tnorth hover:text-tnorth-dark font-medium inline-flex items-center mt-auto"
    >
      Learn more
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </div>
);

const cloudIcon = <Cloud className="h-10 w-10 text-tnorth" />;
const securityIcon = <Shield className="h-10 w-10 text-tnorth" />;
const healthcareIcon = <Activity className="h-10 w-10 text-tnorth" />;
const consultingIcon = <LightbulbIcon className="h-10 w-10 text-tnorth" />;

const services = [
  {
    title: "Cloud Solutions",
    description: "Enterprise-grade hybrid cloud hosting, migration, and IaaS solutions tailored for your business needs with top security and reliability.",
    icon: cloudIcon,
    link: "/services/cloud"
  },
  {
    title: "IT Security",
    description: "Comprehensive security assessment, penetration testing, and compliance solutions to protect your digital assets and sensitive data.",
    icon: securityIcon,
    link: "/services/security"
  },
  {
    title: "Healthcare IT",
    description: "Specialized EHR implementation, healthcare systems integration, analytics, and patient portal solutions for healthcare providers.",
    icon: healthcareIcon,
    link: "/services/healthcare-it"
  },
  {
    title: "Strategic Consulting",
    description: "Expert IT strategy, digital transformation, and technology roadmap consulting to align your IT initiatives with business objectives.",
    icon: consultingIcon,
    link: "/services/consulting"
  }
];

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  buttonText: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color, buttonText, link }) => (
  <div className={`relative overflow-hidden rounded-xl group bg-gradient-to-r ${color} p-0.5`}>
    <div className="relative bg-tnorth-dark p-6 h-full flex flex-col justify-between rounded-lg overflow-hidden">
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
          className="rounded-full bg-transparent border-white text-white hover:bg-white/10 w-full group-hover:bg-white group-hover:text-tnorth transition-all duration-300"
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

const features = [
  {
    title: "Recognized AI leadership",
    description: "AWS GenAI Consulting Partner of the Year - Global",
    icon: <Trophy className="h-8 w-8 text-white" />,
    color: "from-pink-500 to-purple-700",
    buttonText: "See why we won",
    link: "/awards"
  },
  {
    title: "AI to ROI framework",
    description: "See how we turn AI ambition into measurable business value",
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    color: "from-blue-500 to-cyan-400",
    buttonText: "Get AI results",
    link: "/ai-framework"
  },
  {
    title: "AI research & insights",
    description: "Key findings from our AI Research Report",
    icon: <Brain className="h-8 w-8 text-white" />,
    color: "from-yellow-400 to-amber-600",
    buttonText: "Read our AI report",
    link: "/ai-research"
  }
];

// Convert services to a format compatible with the FeatureCard component
const serviceFeatures = [
  {
    title: "Cloud Solutions",
    description: "Enterprise-grade hybrid cloud hosting, migration, and IaaS solutions tailored for your business needs with top security and reliability.",
    icon: cloudIcon,
    color: "from-blue-500 to-indigo-600",
    buttonText: "Learn more",
    link: "/services/cloud"
  },
  {
    title: "IT Security",
    description: "Comprehensive security assessment, penetration testing, and compliance solutions to protect your digital assets and sensitive data.",
    icon: securityIcon,
    color: "from-red-500 to-rose-600",
    buttonText: "Learn more",
    link: "/services/security"
  },
  {
    title: "Healthcare IT",
    description: "Specialized EHR implementation, healthcare systems integration, analytics, and patient portal solutions for healthcare providers.",
    icon: healthcareIcon,
    color: "from-green-500 to-emerald-600",
    buttonText: "Learn more",
    link: "/services/healthcare-it"
  },
  {
    title: "Strategic Consulting",
    description: "Expert IT strategy, digital transformation, and technology roadmap consulting to align your IT initiatives with business objectives.",
    icon: consultingIcon,
    color: "from-purple-500 to-violet-600",
    buttonText: "Learn more",
    link: "/services/consulting"
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-tnorth-surface-dark">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Core Services</h2>
          <p className="text-lg text-white/80">
            We deliver transformative IT solutions that drive innovation, 
            enhance security, and optimize operations for businesses across industries.
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
