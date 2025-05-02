
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const HealthcareSecurity = () => {
  return (
    <div className="min-h-screen">
      <Navbar transparent={false} />
      
      <div className="pt-32 pb-16 bg-gradient-to-r from-red-900 to-red-700">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Healthcare Security Solutions
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mb-8">
            Protecting patient data and ensuring compliance with industry regulations
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            Schedule a Security Assessment
          </Button>
        </div>
      </div>
      
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Healthcare Security Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Cybersecurity Solutions</h3>
            <p className="text-gray-600 mb-6">
              Advanced security measures to protect healthcare data and systems.
            </p>
            <Link to="/healthcare-security/audit" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Data Backup & Recovery</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive data protection and disaster recovery solutions.
            </p>
            <Link to="/healthcare-security/patient-data" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Business Continuity</h3>
            <p className="text-gray-600 mb-6">
              Ensuring your healthcare organization can continue operations through any disruption.
            </p>
            <Link to="/healthcare-security/business-continuity" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HealthcareSecurity;
