
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import TabsSection from '@/components/TabsSection';
import ServicesOverview from '@/components/ServicesOverview';
import StatsSection from '@/components/StatsSection';
import MapSection from '@/components/MapSection';
// import SlidingBlocks from '@/components/SlidingBlocks'; // Temporarily commented out
import HealthcareSection from '@/components/HealthcareSection';
import EHRSection from '@/components/EHRSection';
import TrustReasons from '@/components/TrustReasons';
import FAQ from '@/components/FAQ';
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
      />
      
      <SectionDivider className="relative z-10" />
      
      <ServicesOverview />
      
      <StatsSection />
      
      <TabsSection 
        tabs={[
          {
            id: 'managed-cloud',
            title: 'Managed Cloud',
            content: {
              heading: 'Accelerate Physician Performance and Eliminate Downtime',
              services: [
                'Cloud Hosting with True North',
                'AWS and Azure Managed Cloud Services',
                'Hybrid Cloud Managed Services',
                'Clinical Workflow Optimization',
                'EMR/EHR Hosting and Optimization'
              ],
              primaryCta: {
                text: 'REQUEST MY CONSULTATION',
                href: '/consultation'
              },
              secondaryCta: {
                text: 'DOWNLOAD EHR PERFORMANCE REPORT',
                href: '/download-report'
              }
            }
          },
          {
            id: 'security-dr',
            title: 'Managed Security & DR',
            content: {
              heading: 'Securing Patient Data from Theft and Disaster',
              services: [
                'HIPAA Real Time Security Monitoring',
                'Disaster Recovery & Business Continuity',
                'Security & Compliance Solutions',
                'Patches & Upgrades',
                'Ransomware Protection'
              ],
              primaryCta: {
                text: 'REQUEST MY CONSULTATION',
                href: '/consultation'
              },
              secondaryCta: {
                text: 'REQUEST A NETWORK SECURITY AUDIT',
                href: '/security-audit'
              }
            }
          },
          {
            id: 'managed-it',
            title: 'Managed IT Solutions',
            content: {
              heading: 'Transform Healthcare IT and Reduce IT Issues',
              services: [
                'IT Staff Augmentation & Support',
                'Healthcare Focused IT Management',
                'IT Consulting & Professional Services',
                'Clinical IT Workflow Support and Optimization'
              ],
              primaryCta: {
                text: 'REQUEST MY CONSULTATION',
                href: '/consultation'
              },
              secondaryCta: {
                text: 'DOWNLOAD HIPAA COMPLIANCE CHECKLIST',
                href: '/hipaa-checklist'
              }
            }
          }
        ]}
      />
      
      {/* SlidingBlocks component temporarily removed */}
      

      
      <HealthcareSection />
      
      <EHRSection />
      
      <TrustReasons />
      
      <FAQ />
      
      <Testimonials />
      
      <Partners />
      
      <MapSection />
      
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
