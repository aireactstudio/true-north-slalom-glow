
import React from 'react';
import NavigationMenu from './NavigationMenu';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  return <NavigationMenu />;
};

export default Navbar;
