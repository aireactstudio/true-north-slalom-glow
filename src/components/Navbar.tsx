
import React from 'react';
import NavigationMenu from './NavigationMenu';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`w-full fixed top-0 left-0 z-50 ${transparent ? 'bg-transparent' : ''}`}>
      <NavigationMenu />
    </div>
  );
};

export default Navbar;
