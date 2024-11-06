"use client"
import React, { useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';


const BaseNavbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='font-axiforma'>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </header>
  );
};

export default BaseNavbar;
