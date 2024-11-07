import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '@/public/ams_logo.png';

const DesktopNavbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Helper function to check if a route is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      <Link href="/" className="text-xl font-bold">
        <div className='flex items-center gap-3'>
          <Image
            src={logo}
            alt='AMS | Association Management Services'
            width={50}
            height={50}
          />
          <div className='flex flex-col'>
            <h1 className='font-axiforma text-orangish leading-none'>AMS</h1>
            <p className='text-[12px] leading-tight text-zinc-500'>Association Management Services</p>
          </div>
        </div>
      </Link>
      <ul className="flex space-x-8">
        <li>
          <Link href="/" legacyBehavior>
            <a className={`relative ${isActive('/') ? 'text-orangish font-semibold' : ''}`}>
              Home
              {isActive('/') && <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-orangish" />}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a className={`relative ${isActive('/about') ? 'text-orangish font-semibold' : ''}`}>
              About Us
              {isActive('/about') && <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-orangish" />}
            </a>
          </Link>
        </li>
        
        {/* Services Dropdown */}
        <li className="relative dropdown">
          <button
            onClick={() => toggleDropdown('services')}
            className="flex items-center space-x-1"
          >
            <span className={`relative ${pathname.includes('/services') ? 'text-orangish font-semibold' : ''}`}>
              Services
              {pathname.includes('/services') && <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-orangish" />}
            </span>
            <FaChevronDown />
          </button>
          {openDropdown === 'services' && (
            <div className="absolute left-0 flex flex-col bg-white shadow-lg rounded-md mt-2 p-4">
              <Link href="/services/administration" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/services/administration') ? 'text-orangish font-semibold' : ''}`}>Administration Services</Link>
              <Link href="/services/consulting" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/services/consulting') ? 'text-orangish font-semibold' : ''}`}>Consulting Services</Link>
              <Link href="/services/startup" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/services/startup') ? 'text-orangish font-semibold' : ''}`}>Accelerated Startup Package</Link>
            </div>
          )}
        </li>
        
        <li>
          <Link href="/inner-circle" legacyBehavior>
            <a className={`relative ${isActive('/inner-circle') ? 'text-orangish font-semibold' : ''}`}>
              Inner Circle
              {isActive('/inner-circle') && <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-orangish" />}
            </a>
          </Link>
        </li>
        
        {/* Resources Dropdown */}
        <li className="relative dropdown">
          <button
            onClick={() => toggleDropdown('resources')}
            className="flex items-center space-x-1"
          >
            <span className={`relative ${pathname.includes('/resources') ? 'text-orangish font-semibold' : ''}`}>
              Resources
              {pathname.includes('/resources') && <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-orangish" />}
            </span>
            <FaChevronDown />
          </button>
          {openDropdown === 'resources' && (
            <div className="absolute left-0 flex flex-col bg-white shadow-lg rounded-md mt-2 p-4">
              <Link href="/resources/guides" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/resources/guides') ? 'text-orangish font-semibold' : ''}`}>Guides and Whitepapers</Link>
              <Link href="/resources/blog" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/resources/blog') ? 'text-orangish font-semibold' : ''}`}>Blog</Link>
              <Link href="/resources/case-studies" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/resources/case-studies') ? 'text-orangish font-semibold' : ''}`}>Case Studies</Link>
              <Link href="/resources/tools" className={`block px-4 py-2 hover:bg-gray-100 ${isActive('/resources/tools') ? 'text-orangish font-semibold' : ''}`}>Tools</Link>
            </div>
          )}
        </li>
        
        <li>
          <Link href="/get-started" legacyBehavior>
            <a className={`relative ${isActive('/get-started') ? 'text-orangish font-semibold' : ''}`}>
              Get Started
              {isActive('/get-started') && <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-orangish" />}
            </a>
          </Link>
        </li>
        
        <li>
          <Link href="/contact" legacyBehavior>
            <a className={`relative ${isActive('/contact') ? 'text-orangish font-semibold' : ''}`}>
              Contact Us
              {isActive('/contact') && <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-orangish" />}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
