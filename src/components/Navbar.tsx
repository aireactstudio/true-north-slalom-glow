
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu, Globe, X } from "lucide-react";

// Industry and Services menu items
const industryMenuItems = [
  {
    title: 'Healthcare',
    items: [
      { name: 'Healthcare Provider', href: '/industries/healthcare/provider' },
      { name: 'Healthcare Payer', href: '/industries/healthcare/payer' },
      { name: 'Healthcare IT', href: '/industries/healthcare/it' },
      { name: 'Healthcare Security', href: '/industries/healthcare/security' },
    ]
  },
  {
    title: 'Financial Services',
    items: [
      { name: 'Banking', href: '/industries/financial/banking' },
      { name: 'Insurance', href: '/industries/financial/insurance' },
    ]
  },
  {
    title: 'Technology',
    items: [
      { name: 'Software', href: '/industries/technology/software' },
      { name: 'Hardware', href: '/industries/technology/hardware' },
      { name: 'Cloud Services', href: '/industries/technology/cloud' },
    ]
  },
];

const serviceMenuItems = [
  {
    title: 'Cloud Solutions',
    items: [
      { name: 'Hybrid Cloud Hosting', href: '/services/cloud/hybrid-hosting' },
      { name: 'Cloud Migration', href: '/services/cloud/migration' },
      { name: 'IaaS Solutions', href: '/services/cloud/iaas' },
      { name: 'AWS Services', href: '/services/cloud/aws' },
      { name: 'Azure Services', href: '/services/cloud/azure' },
    ]
  },
  {
    title: 'IT Security',
    items: [
      { name: 'Security Assessment', href: '/services/security/assessment' },
      { name: 'Penetration Testing', href: '/services/security/penetration-testing' },
      { name: 'Compliance Solutions', href: '/services/security/compliance' },
      { name: 'Security Operations', href: '/services/security/operations' },
    ]
  },
  {
    title: 'Healthcare IT',
    items: [
      { name: 'EHR Implementation', href: '/services/healthcare-it/ehr-implementation' },
      { name: 'Healthcare Integration', href: '/services/healthcare-it/integration' },
      { name: 'Healthcare Analytics', href: '/services/healthcare-it/analytics' },
      { name: 'Patient Portal Solutions', href: '/services/healthcare-it/patient-portal' },
    ]
  },
];

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMegaMenu = (menuName: string) => {
    setActiveMegaMenu(prev => prev === menuName ? null : menuName);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || !transparent || activeMegaMenu 
          ? 'bg-tnorth-dark shadow-lg' 
          : 'bg-transparent'
      }`}
      ref={menuRef}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-white font-bold text-2xl tracking-tight">TrueNorth ITG</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              className={`nav-link text-white px-2 py-1 ${activeMegaMenu === 'services' ? 'active' : ''}`}
              onClick={() => toggleMegaMenu('services')}
            >
              Services
            </button>
            <button 
              className={`nav-link text-white px-2 py-1 ${activeMegaMenu === 'industries' ? 'active' : ''}`}
              onClick={() => toggleMegaMenu('industries')}
            >
              Industries
            </button>
            <Link to="/insights" className="nav-link text-white px-2 py-1">
              Insights
            </Link>
            <Link to="/case-studies" className="nav-link text-white px-2 py-1">
              Case Studies
            </Link>
            <Link to="/about" className="nav-link text-white px-2 py-1">
              About Us
            </Link>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white">
              <Globe className="h-5 w-5" />
            </Button>
            <Button className="hidden md:flex bg-white text-tnorth hover:bg-gray-100">
              Contact Us
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Services Mega Menu */}
      <div 
        className={`mega-menu ${activeMegaMenu === 'services' ? 'open' : ''}`}
        aria-hidden={activeMegaMenu !== 'services'}
      >
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceMenuItems.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-tnorth-accent font-semibold text-lg border-b border-tnorth-light pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href} className="text-white hover:text-tnorth-accent transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-tnorth-light pt-4 text-right">
            <Link to="/services" className="text-white hover:text-tnorth-accent inline-flex items-center space-x-1">
              <span>See all services</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Industries Mega Menu */}
      <div 
        className={`mega-menu ${activeMegaMenu === 'industries' ? 'open' : ''}`}
        aria-hidden={activeMegaMenu !== 'industries'}
      >
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industryMenuItems.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-tnorth-accent font-semibold text-lg border-b border-tnorth-light pb-2">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, index) => (
                    <li key={index}>
                      <Link to={item.href} className="text-white hover:text-tnorth-accent transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-tnorth-light pt-4 text-right">
            <Link to="/industries" className="text-white hover:text-tnorth-accent inline-flex items-center space-x-1">
              <span>See all industries</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-tnorth-dark z-40 transition-transform duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-4 pb-6 overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            <div className="py-2 border-b border-tnorth-light">
              <h3 className="text-tnorth-accent font-semibold mb-2">Services</h3>
              <div className="pl-4 space-y-2">
                {serviceMenuItems.map((category, idx) => (
                  <div key={idx} className="mb-3">
                    <h4 className="text-white font-medium">{category.title}</h4>
                    <ul className="pl-4 mt-1 space-y-1">
                      {category.items.map((item, index) => (
                        <li key={index}>
                          <Link 
                            to={item.href} 
                            className="text-tnorth-text-muted hover:text-white" 
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="py-2 border-b border-tnorth-light">
              <h3 className="text-tnorth-accent font-semibold mb-2">Industries</h3>
              <div className="pl-4 space-y-2">
                {industryMenuItems.map((category, idx) => (
                  <div key={idx} className="mb-3">
                    <h4 className="text-white font-medium">{category.title}</h4>
                    <ul className="pl-4 mt-1 space-y-1">
                      {category.items.map((item, index) => (
                        <li key={index}>
                          <Link 
                            to={item.href} 
                            className="text-tnorth-text-muted hover:text-white" 
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <Link to="/insights" className="text-white py-2 border-b border-tnorth-light" onClick={() => setMobileMenuOpen(false)}>
              Insights
            </Link>
            <Link to="/case-studies" className="text-white py-2 border-b border-tnorth-light" onClick={() => setMobileMenuOpen(false)}>
              Case Studies
            </Link>
            <Link to="/about" className="text-white py-2 border-b border-tnorth-light" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            
            <div className="mt-auto">
              <Button className="w-full bg-white text-tnorth hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
