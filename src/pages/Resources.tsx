
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navbar transparent={false} />
      
      <div className="pt-32 pb-16 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
            Resources
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mb-8">
            Educational content, case studies, and tools to help your healthcare organization thrive
          </p>
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            Browse All Resources
          </Button>
        </div>
      </div>
      
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Blogs</h3>
            <p className="text-gray-600 mb-6">
              Industry insights, trends, and tips for healthcare IT professionals.
            </p>
            <Link to="/resources/blogs" className="text-blue-600 hover:underline">
              View blogs →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
            <p className="text-gray-600 mb-6">
              Real-world examples of how we've helped healthcare organizations overcome challenges.
            </p>
            <Link to="/resources/case-studies" className="text-blue-600 hover:underline">
              View case studies →
            </Link>
          </div>
          
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">eBooks & Guides</h3>
            <p className="text-gray-600 mb-6">
              In-depth resources on healthcare IT topics, compliance, and best practices.
            </p>
            <Link to="/resources/guides" className="text-blue-600 hover:underline">
              Download guides →
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
