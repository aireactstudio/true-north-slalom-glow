
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopNavigation = () => {
  return (
    <div className="bg-blue-950 text-white py-2 px-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="#" className="text-white hover:text-blue-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
            <path d="M22 4s-2.7 8.2-9.3 11.7c-6.5 3.5-12.7-.2-12.7-.2s2.7-8.2 9.3-11.7C16 .3 22 4 22 4z"/>
            <path d="M15 7l.01.01"/>
          </svg>
        </Link>
        <Link to="#" className="text-white hover:text-blue-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </Link>
        <Link to="#" className="text-white hover:text-blue-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
          </svg>
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="text-sm">Sales: 1.855.383.4300</span>
        </div>
        <div className="hidden md:flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="text-sm">24/7 Customer Support: 1.800.372.1660</span>
        </div>
        <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white text-xs rounded px-3 py-1">
          See Service Pricing
        </Button>
        <Button variant="ghost" size="sm" className="text-white text-xs">
          Client Login
        </Button>
        <Button variant="ghost" size="sm" className="text-white p-1">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

// Main Navigation Menu data structure
const mainMenuItems = [
  {
    title: "Healthcare IT",
    href: "/healthcare-it",
    megaMenu: [
      {
        title: "Managed Services",
        links: [
          { name: "Healthcare IT Consulting", href: "/healthcare-it/consulting" },
          { name: "Managed IT & HelpDesk Support", href: "/healthcare-it/managed-it" },
          { name: "Software License Management", href: "/healthcare-it/software-license" },
          { name: "Data and Analytics Consulting", href: "/healthcare-it/data-analytics" },
          { name: "Cloud-Hosted Virtual Desktop", href: "/healthcare-it/virtual-desktop" },
        ]
      },
      {
        title: "Healthcare Cloud",
        links: [
          { name: "Cloud Management & Migration", href: "/healthcare-it/cloud-management" },
          { name: "Azure Healthcare Services", href: "/healthcare-it/azure" },
          { name: "Private Cloud Hosting", href: "/healthcare-it/private-cloud" },
          { name: "Hybrid Cloud Hosting", href: "/healthcare-it/hybrid-cloud" },
          { name: "Hosted Cloud Services", href: "/healthcare-it/hosted-cloud" },
        ]
      },
      {
        title: "Cloud Backup Services",
        links: [
          { name: "Server Imaging", href: "/healthcare-it/server-imaging" },
          { name: "VMware Consulting", href: "/healthcare-it/vmware" },
        ]
      },
      {
        title: "Compliance Consulting",
        links: [
          { name: "PCI Compliance", href: "/healthcare-it/pci-compliance" },
          { name: "HIPAA Compliance", href: "/healthcare-it/hipaa-compliance" },
        ]
      },
      {
        title: "Infrastructure as a Service",
        links: [
          { name: "IaaS Security", href: "/healthcare-it/iaas-security" },
        ]
      },
      {
        title: "Cloud Hosted Desktop Solutions",
        links: [
          { name: "HIPAA-Compliant Hosting Services", href: "/healthcare-it/hipaa-hosting" },
          { name: "Healthcare VDI Services", href: "/healthcare-it/vdi-services" },
          { name: "Secure MD Jump: Thin Client OS", href: "/healthcare-it/thin-client" },
          { name: "Secure MD Workspace Cloud", href: "/healthcare-it/workspace-cloud" },
          { name: "Secure MD Edge: Hybrid Cloud Provider", href: "/healthcare-it/edge-hybrid-cloud" },
        ]
      }
    ]
  },
  {
    title: "Healthcare Security",
    href: "/healthcare-security",
    megaMenu: [
      {
        title: "Healthcare Cybersecurity",
        links: [
          { name: "Patient Data Backup & Recovery", href: "/healthcare-security/patient-data" },
          { name: "Cybersecurity Audit", href: "/healthcare-security/audit" },
        ]
      },
      {
        title: "IT Disaster Recovery & Solutions",
        links: [
          { name: "Continuous Data Replication", href: "/healthcare-security/data-replication" },
          { name: "Data Protection", href: "/healthcare-security/data-protection" },
          { name: "Business Continuity & Disaster Recovery", href: "/healthcare-security/business-continuity" },
        ]
      },
      {
        title: "Vendor Support",
        links: [
          { name: "Microsoft", href: "/vendors/microsoft" },
          { name: "AthenaHealth", href: "/vendors/athenahealth" },
          { name: "Aprima", href: "/vendors/aprima" },
          { name: "Switch", href: "/vendors/switch" },
          { name: "Allscripts", href: "/vendors/allscripts" },
          { name: "Cisco", href: "/vendors/cisco" },
          { name: "Citrix", href: "/vendors/citrix" },
          { name: "Dell", href: "/vendors/dell" },
          { name: "eClinicalWorks", href: "/vendors/eclinicalworks" },
          { name: "GE Healthcare", href: "/vendors/ge-healthcare" },
          { name: "NextGen", href: "/vendors/nextgen" },
        ]
      }
    ]
  },
  {
    title: "EHR/EMR Support",
    href: "/ehr-emr-support",
    megaMenu: [
      {
        title: "EHR & EMR Consulting",
        links: [
          { name: "EMR Support", href: "/ehr-emr/support" },
          { name: "EMR Hosting", href: "/ehr-emr/hosting" },
          { name: "EMR Integration", href: "/ehr-emr/integration" },
          { name: "EMR Testing", href: "/ehr-emr/testing" },
          { name: "EMR Archiving", href: "/ehr-emr/archiving" },
          { name: "EMR Conversion", href: "/ehr-emr/conversion" },
        ]
      },
      {
        title: "Resources",
        links: [
          { name: "EHR Performance Assessment", href: "/ehr-emr/performance-assessment" },
          { name: "EMR HIPAA Compliance Checklist", href: "/ehr-emr/hipaa-checklist" },
        ]
      },
      {
        title: "Vendor Support",
        links: [
          { name: "Microsoft", href: "/vendors/microsoft" },
          { name: "AthenaHealth", href: "/vendors/athenahealth" },
          { name: "Aprima", href: "/vendors/aprima" },
          { name: "Switch", href: "/vendors/switch" },
          { name: "Allscripts", href: "/vendors/allscripts" },
          { name: "Cisco", href: "/vendors/cisco" },
          { name: "Citrix", href: "/vendors/citrix" },
          { name: "Dell", href: "/vendors/dell" },
          { name: "eClinicalWorks", href: "/vendors/eclinicalworks" },
          { name: "GE Healthcare", href: "/vendors/ge-healthcare" },
          { name: "NextGen", href: "/vendors/nextgen" },
        ]
      }
    ]
  },
  {
    title: "Resources",
    href: "/resources",
    megaMenu: [
      {
        title: "Resources",
        links: [
          { name: "Blogs", href: "/resources/blogs" },
          { name: "Checklists", href: "/resources/checklists" },
          { name: "Guides & eBooks", href: "/resources/guides" },
          { name: "Case Studies", href: "/resources/case-studies" },
          { name: "Assessments & Reports", href: "/resources/assessments" },
        ]
      }
    ]
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    megaMenu: []
  }
];

const NavigationMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuToggle = (menuTitle: string) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  const handleMenuEnter = (menuTitle: string) => {
    setActiveMenu(menuTitle);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="w-full bg-blue-900" onMouseLeave={handleMenuLeave}>
      <TopNavigation />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex-shrink-0">
            <div className="text-white font-bold text-2xl">
              <img 
                src="https://cdn-ildgilf.nitrocdn.com/yPlgDgPaMVJZvmIRpddkPotnZbbEHqnY/assets/images/optimized/rev-503a6b3/www.truenorthitg.com/wp-content/uploads/2021/03/truenorth-logo-1.png" 
                alt="TrueNorth ITG" 
                className="h-12" 
              />
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {mainMenuItems.map((item) => (
              <div key={item.title} 
                className="relative group"
                onMouseEnter={() => item.megaMenu.length > 0 && handleMenuEnter(item.title)}
              >
                <Link 
                  to={item.href} 
                  className={`text-white py-2 flex items-center text-base font-medium space-x-1 border-b-2 ${
                    activeMenu === item.title ? 'border-yellow-400' : 'border-transparent'
                  } hover:border-yellow-400 transition-all duration-300`}
                >
                  <span>{item.title}</span>
                  {item.megaMenu.length > 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white rounded-full px-6">
              Let's talk
            </Button>
            <Search className="h-6 w-6 text-white cursor-pointer" />
          </div>
        </div>
      </div>
      
      {/* Mega Menus */}
      {mainMenuItems.map((item) => (
        item.megaMenu.length > 0 && (
          <div 
            key={`mega-${item.title}`}
            className={`bg-blue-900 absolute w-full left-0 z-50 overflow-hidden transition-all duration-500 ${
              activeMenu === item.title 
                ? 'opacity-100 max-h-[800px]' 
                : 'opacity-0 max-h-0 pointer-events-none'
            }`}
          >
            <div className="container mx-auto py-12 px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {item.megaMenu.map((section, idx) => (
                  <div key={`section-${idx}`} className="space-y-6">
                    <h3 className="text-yellow-400 text-xl font-medium">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIdx) => (
                        <li key={`link-${linkIdx}`}>
                          <Link 
                            to={link.href}
                            className="text-white hover:text-yellow-200 transition-colors"
                            onClick={() => setActiveMenu(null)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default NavigationMenu;
