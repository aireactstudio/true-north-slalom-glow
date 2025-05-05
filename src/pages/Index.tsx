
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import StatsSection from '@/components/StatsSection';
// import SlidingBlocks from '@/components/SlidingBlocks'; // Temporarily commented out
import FeaturedContent from '@/components/FeaturedContent';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Partners from '@/components/Partners';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar transparent />
      
      <Hero 
        title="Managed IT & Cloud Services for Healthcare"
        subtitle="TRUE NORTH ITG"
        description="We manage IT, cloud and security so you can focus on your patients"
        buttonText="Discover Our Services"
        buttonLink="/services"
        backgroundImage="/lovable-uploads/fe11fbd3-8a3c-4b73-9c5d-807dce50204b.png"
        backgroundVideo="/videos/hero-video.mp4"
        // The image above will be used as a poster frame until the video loads
      />
      
      <ServicesOverview />
      
      <StatsSection />
      
      {/* SlidingBlocks component temporarily removed */}
      
      <section className="py-20 bg-tnorth-surface-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Healthcare IT Solutions</h2>
              <p className="text-xl mb-8">
                Some of the most important IT solutions for healthcare providers to consider include Electronic Health Records (EHRs), 
                telemedicine, clinical decision support systems (CDSS), Internet of Medical Things (IoMT), and Artificial Intelligence (AI).
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-tnorth-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>EHRs enable you to store, manage, and exchange patient information digitally, ensuring timely access to accurate medical records.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-tnorth-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Telemedicine allows healthcare professionals to remotely evaluate, diagnose, and treat patients, enhancing access to services.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-tnorth-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CDSS provide evidence-based clinical guidelines and data analysis tools that assist in making informed decisions.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-tnorth-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>IoMT devices, such as wearables and remote monitoring systems, help you continuously monitor patients and collect data.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-tnorth-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI uses predictive analytics, medical imaging analysis, and natural language processing to help identify patterns.</span>
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
      
      <ContactForm />
      
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
