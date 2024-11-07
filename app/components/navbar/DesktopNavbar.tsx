import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/ams_logo.png'

const DesktopNavbar: React.FC = () => {
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
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        
        {/* Services Dropdown */}
        <li className="relative group">
          <button className="flex items-center space-x-1">
            <span>Services</span>
            <FaChevronDown />
          </button>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-2 p-4 transition-all duration-200">
            <Link href="/services/administration" className="block px-4 py-2 hover:bg-gray-100">Administration Services</Link>
            <Link href="/services/consulting" className="block px-4 py-2 hover:bg-gray-100">Consulting Services</Link>
            <Link href="/services/startup" className="block px-4 py-2 hover:bg-gray-100">Accelerated Startup Package</Link>
          </div>
        </li>
        
        <li><Link href="/inner-circle">Inner Circle</Link></li>
        
        {/* Resources Dropdown */}
        <li className="relative group">
          <button className="flex items-center space-x-1">
            <span>Resources</span>
            <FaChevronDown />
          </button>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-2 p-4 transition-all duration-200">
            <Link href="/resources/guides" className="block px-4 py-2 hover:bg-gray-100">Guides and Whitepapers</Link>
            <Link href="/resources/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
            <Link href="/resources/case-studies" className="block px-4 py-2 hover:bg-gray-100">Case Studies</Link>
            <Link href="/resources/tools" className="block px-4 py-2 hover:bg-gray-100">Tools</Link>
          </div>
        </li>
        
        <li><Link href="/get-started">Get Started</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
