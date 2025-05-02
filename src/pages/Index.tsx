
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import FeaturedContent from '@/components/FeaturedContent';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar transparent />
      
      <Hero 
        title="Innovative IT Solutions for the Modern Enterprise"
        subtitle="TRUE NORTH ITG"
        description="We deliver secure, scalable, and reliable IT solutions that help organizations navigate their digital transformation journey with confidence."
        buttonText="Discover Our Services"
        buttonLink="/services"
      />
      
      <ServicesOverview />
      
      <section className="py-20 bg-tnorth-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare IT Expertise</h2>
              <p className="text-xl mb-8">
                We specialize in delivering secure, compliant IT solutions for 
                healthcare organizations of all sizes. From EHR implementation to 
                cloud migrations and security assessments, we understand the unique 
                challenges of healthcare IT.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-tnorth-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>HIPAA-compliant cloud hosting solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-tnorth-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>EHR implementation and optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-tnorth-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Healthcare security and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-tnorth-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interoperability and healthcare data integration</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/94ddb473-c6e9-4b17-8148-019e545e1860.png" 
                alt="Healthcare IT professionals" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-tnorth p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of healthcare IT expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedContent />
      
      <Testimonials />
      
      <Partners />
      
      <CTA 
        title="Ready to Transform Your IT Infrastructure?"
        description="Let's discuss how our solutions can help your organization achieve its technology goals."
        buttonText="Contact Our Experts"
        buttonLink="/contact"
      />
      
      <Footer />
    </div>
  );
};

export default Index;
