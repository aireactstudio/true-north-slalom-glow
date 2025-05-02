
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const EhrEmrSupport = () => {
  return (
    <div className="min-h-screen">
      <Navbar transparent={false} />
      
      <div className="pt-32 pb-16 bg-gradient-to-r from-green-900 to-green-700">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            EHR/EMR Support Services
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mb-8">
            Comprehensive support for electronic health record and medical record systems
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            Get EHR/EMR Support
          </Button>
        </div>
      </div>
      
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our EHR/EMR Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">EMR Support</h3>
            <p className="text-gray-600 mb-6">
              24/7 technical support for your electronic medical record system.
            </p>
            <Link to="/ehr-emr/support" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">EMR Hosting</h3>
            <p className="text-gray-600 mb-6">
              Secure, compliant hosting solutions for your EMR/EHR systems.
            </p>
            <Link to="/ehr-emr/hosting" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">EMR Integration</h3>
            <p className="text-gray-600 mb-6">
              Seamless integration of your EMR with other healthcare systems.
            </p>
            <Link to="/ehr-emr/integration" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EhrEmrSupport;
