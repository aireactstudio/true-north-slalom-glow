
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const HealthcareIT = () => {
  return (
    <div className="min-h-screen">
      <Navbar transparent={false} />
      
      <div className="pt-32 pb-16 bg-gradient-to-r from-blue-900 to-indigo-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Healthcare IT Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Industry-leading IT services designed specifically for healthcare organizations
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            Request a Consultation
          </Button>
        </div>
      </div>
      
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Healthcare IT Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Managed IT Services</h3>
            <p className="text-gray-600 mb-6">
              Complete IT management for healthcare organizations, practices, and clinics.
            </p>
            <Link to="/healthcare-it/managed-it" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Healthcare Cloud Solutions</h3>
            <p className="text-gray-600 mb-6">
              Secure and compliant cloud hosting, migration, and management.
            </p>
            <Link to="/healthcare-it/cloud-management" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">IT Compliance Consulting</h3>
            <p className="text-gray-600 mb-6">
              HIPAA, PCI, and other healthcare compliance solutions for your IT infrastructure.
            </p>
            <Link to="/healthcare-it/hipaa-compliance" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HealthcareIT;
