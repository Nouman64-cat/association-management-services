import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/ams_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-grayish text-gray-700 py-10 px-6 md:px-12 lg:px-24 font-axiforma">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="AMS | Association Management Services" width={50} height={50} />
            <div>
              <h2 className="text-2xl font-extrabold font-axiforma bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">AMS</h2>
              <p className="text-[12px] text-gray-500">Association Management Services</p>
            </div>
          </div>
          <p className="mt-4 text-sm">Providing customized solutions to help associations succeed with governance, compliance, and member retention.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-bold text-lg text-heading">Quick Links</h3>
          <Link href="/" className="hover:text-orangish">Home</Link>
          <Link href="/about" className="hover:text-orangish">About Us</Link>
          <Link href="/inner-circle" className="hover:text-orangish">Inner Circle</Link>
          <Link href="/get-started" className="hover:text-orangish">Get Started</Link>
          <Link href="/contact" className="hover:text-orangish">Contact Us</Link>
        </div>

        {/* Services Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-bold text-lg text-heading">Services</h3>
          <Link href="/services/administration" className="hover:text-orangish">Administration Services</Link>
          <Link href="/services/consulting" className="hover:text-orangish">Consulting Services</Link>
          <Link href="/services/startup" className="hover:text-orangish">Accelerated Startup Package</Link>
        </div>

        {/* Resources Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-bold text-lg text-heading">Resources</h3>
          <Link href="/resources/guides" className="hover:text-orangish">Guides and Whitepapers</Link>
          <Link href="/resources/blog" className="hover:text-orangish">Blog</Link>
          <Link href="/resources/case-studies" className="hover:text-orangish">Case Studies</Link>
          <Link href="/resources/tools" className="hover:text-orangish">Tools</Link>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="flex flex-col items-center md:flex-row md:justify-between mt-8 text-center space-y-4 md:space-y-0">
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-gray-500 hover:text-orangish">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="text-gray-500 hover:text-orangish">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-gray-500 hover:text-orangish">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-gray-500 hover:text-orangish">
            <FaInstagram size={24} />
          </Link>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} AMS. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
