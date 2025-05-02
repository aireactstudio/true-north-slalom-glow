
import React from 'react';
import NavigationMenu from './NavigationMenu';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <NavigationMenu />
    </div>
  );
};

export default Navbar;
