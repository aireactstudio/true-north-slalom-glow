
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => (
  <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
    <CardHeader className="pb-4">
      <div className="text-tnorth mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-tnorth-surface-light">
        {icon}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="text-base text-gray-600">
        {description}
      </CardDescription>
    </CardContent>
    <CardFooter>
      <Link 
        to={link}
        className="text-tnorth hover:text-tnorth-light font-medium inline-flex items-center"
      >
        Learn more
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </CardFooter>
  </Card>
);

const cloudIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const securityIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const healthcareIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const consultingIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

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

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600">
            We deliver transformative IT solutions that drive innovation, 
            enhance security, and optimize operations for businesses across industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
