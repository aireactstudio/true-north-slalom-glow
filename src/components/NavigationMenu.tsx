import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

// Main Navigation Menu data structure
export const mainMenuItems = [
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
          { name: "Hosted Cloud Services", href: "/healthcare-it/hosted-services" },
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
    megaMenu: []
  },
  {
    title: "Contact Us",
    href: "/contact",
    megaMenu: []
  }
];

const NavigationMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleMenuToggle = (menuTitle: string) => {
    setActiveMenu(activeMenu === menuTitle ? null : menuTitle);
  };

  // Store timeout ID to be able to clear it
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  
  const handleMenuEnter = (menuTitle: string) => {
    if (!isMobile) {
      // Clear any existing timeout to prevent race conditions
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      // Immediately set the active menu to the current one
      setActiveMenu(menuTitle);
    }
  };

  const handleMenuLeave = () => {
    if (!isMobile) {
      // Set a shorter timeout to close the menu quickly when moving between items
      timeoutRef.current = setTimeout(() => {
        setActiveMenu(null);
        timeoutRef.current = null;
      }, 10);
    }
  };
  
  // Cancel menu closing when entering the mega menu
  const handleMegaMenuEnter = (menuTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(menuTitle);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveMobileMenu(null);
  };

  const toggleMobileSubmenu = (menuTitle: string) => {
    setActiveMobileMenu(activeMobileMenu === menuTitle ? null : menuTitle);
  };

  // Only return the desktop navigation menu items
  // The mobile menu toggle is handled in the Navbar component
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="flex space-x-8 relative">
        {mainMenuItems.map((item) => (
          <div key={item.title} 
            className="relative group"
            onMouseEnter={() => item.megaMenu.length > 0 && handleMenuEnter(item.title)}
            onMouseLeave={handleMenuLeave}
          >
            <Link 
              to={item.href} 
              className={`text-white py-2 flex items-center text-base font-medium space-x-1 drop-shadow-md ${
                activeMenu === item.title ? 'border-b-2 border-white' : ''
              } hover:border-b-2 hover:border-white transition-all duration-200`}
            >
              <span>{item.title}</span>
              {item.megaMenu.length > 0 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              )}
            </Link>
          </div>
        ))}
      </nav>
      
      {/* Desktop Mega Menus */}
      {mainMenuItems.map((item) => (
        item.megaMenu.length > 0 && (
          <div 
            key={`mega-${item.title}`}
            className={`bg-tnorth-dark/80 backdrop-blur-sm absolute w-full left-0 top-full z-50 overflow-hidden transition-all duration-300 ease-in-out ${
              activeMenu === item.title 
                ? 'opacity-100 max-h-[800px] visible' 
                : 'opacity-0 max-h-0 invisible'
            }`}
            onMouseEnter={() => handleMegaMenuEnter(item.title)}
            onMouseLeave={handleMenuLeave}
          >
            <div className="container mx-auto py-12 px-4 md:px-6 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {item.megaMenu.map((section, idx) => (
                  <div key={`section-${idx}`} className="space-y-6">
                    <h3 className="text-white text-xl font-medium drop-shadow-md">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIdx) => (
                        <li key={`link-${linkIdx}`}>
                          <Link 
                            to={link.href} 
                            className="text-white/90 hover:text-white flex items-center space-x-1 group drop-shadow-sm"
                            onClick={() => setActiveMenu(null)}
                          >
                            <span className="text-white/70 group-hover:text-tnorth-accent">›</span>
                            <span>{link.name}</span>
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
    </>  
  );
};

export default NavigationMenu;
