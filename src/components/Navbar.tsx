
import React, { useState, useEffect } from 'react';
import NavigationMenu, { mainMenuItems } from './NavigationMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Search, Globe, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = true }) => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  
  // Handle scroll effect for navbar background
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <div className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-blue-950/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://cdn-ildgilf.nitrocdn.com/yPlgDgPaMVJZvmIRpddkPotnZbbEHqnY/assets/images/optimized/rev-503a6b3/www.truenorthitg.com/wp-content/uploads/2021/03/truenorth-logo-1.png" 
              alt="TrueNorth ITG" 
              className="h-8 filter brightness-0 invert" 
            />
          </Link>
          
          {/* Main Navigation - Only shown on desktop */}
          <div className="hidden md:flex justify-center flex-1">
            <NavigationMenu />
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Let's talk button - Hidden on small mobile */}
            <Button 
              className="hidden sm:inline-flex rounded-full bg-white hover:bg-white/90 text-blue-900 px-4 py-2 shadow-sm text-sm font-medium"
            >
              Let's talk
            </Button>

            {/* Icons - Hidden on small mobile except the menu */}
            <button className="hidden sm:flex p-2 text-white hover:text-white/80 drop-shadow-sm">
              <Search size={20} />
            </button>
            <button className="hidden sm:flex p-2 text-white hover:text-white/80 drop-shadow-sm">
              <Globe size={20} />
            </button>
            
            {/* Mobile Menu Toggle - Only shown on mobile */}
            <button 
              className="p-2 text-white hover:text-white/80 drop-shadow-sm md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (slides in from right) */}
      <div 
        className={`fixed top-0 right-0 w-[85%] max-w-[400px] h-full bg-tnorth-dark/95 backdrop-blur-sm z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-auto`}
        style={{ height: '100vh' }}
      >
        <div className="px-6 py-6">
          {/* Close button */}
          <div className="flex justify-between items-center mb-8">
            <img 
              src="https://cdn-ildgilf.nitrocdn.com/yPlgDgPaMVJZvmIRpddkPotnZbbEHqnY/assets/images/optimized/rev-503a6b3/www.truenorthitg.com/wp-content/uploads/2021/03/truenorth-logo-1.png" 
              alt="TrueNorth ITG" 
              className="h-8 filter brightness-0 invert" 
            />
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:text-white/80"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-2 overflow-y-auto max-h-[calc(100vh-160px)]">
            {mainMenuItems.map((item) => (
              <div key={`mobile-menu-${item.title}`} className="border-b border-white/10 pb-2 mb-2">
                {/* Menu item header */}
                <div 
                  className="flex justify-between items-center py-3 cursor-pointer"
                  onClick={() => {
                    if (activeMobileMenu === item.title) {
                      setActiveMobileMenu(null);
                    } else {
                      setActiveMobileMenu(item.title);
                    }
                  }}
                >
                  <span className="text-white font-medium">{item.title}</span>
                  <span className="text-white transition-transform duration-200 transform">
                    {activeMobileMenu === item.title ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="12" x2="6" y2="12"></line>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="6" x2="12" y2="18"></line>
                        <line x1="18" y1="12" x2="6" y2="12"></line>
                      </svg>
                    )}
                  </span>
                </div>

                {/* Dropdown content */}
                {activeMobileMenu === item.title && (
                  <div className="pl-4 py-3 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                    {item.megaMenu.length > 0 ? (
                      <div className="space-y-5">
                        {item.megaMenu.map((section, idx) => (
                          <div key={`mobile-section-${idx}`} className="mb-3">
                            <h4 className="text-tnorth-accent text-sm font-medium mb-2">{section.title}</h4>
                            <ul className="space-y-2">
                              {section.links.map((link, linkIdx) => (
                                <li key={`mobile-link-${linkIdx}`}>
                                  <Link 
                                    to={link.href}
                                    className="text-white/80 hover:text-white text-sm block py-1.5 pl-3 border-l border-white/10"
                                    onClick={toggleMobileMenu}
                                  >
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-white/60 text-sm">No submenu items</div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Mobile-only CTA button */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <Button 
              className="w-full rounded-full bg-white hover:bg-white/90 text-tnorth px-4 py-3 shadow-sm text-sm font-medium"
            >
              Let's talk
            </Button>

            {/* Contact Info */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="text-white text-sm">
                <div className="font-medium text-tnorth-accent">Sales</div>
                <div>1.855.383.4300</div>
              </div>
              <div className="text-white text-sm">
                <div className="font-medium text-tnorth-accent">Support</div>
                <div>1.800.372.1660</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;
