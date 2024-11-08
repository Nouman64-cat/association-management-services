"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/ams_logo.png";

const MobileNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="px-4 py-4 shadow-md bg-white text-gray-700">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="AMS | Association Management Services"
              width={40}
              height={40}
            />
            <h1 className="font-axiforma text-lg font-extrabold bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
              AMS
            </h1>
          </div>
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-zinc-700">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <ul className="mt-4 space-y-4 text-left">
          <li className="hover:text-orangish">
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="hover:text-orangish">
            <Link href="/about" onClick={closeMenu}>About Us</Link>
          </li>
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center space-x-2 hover:text-orangish w-full"
            >
              <span>Services</span>
              <FaChevronDown className={`${servicesOpen ? "rotate-180" : ""} transition-transform duration-200`} />
            </button>
            {servicesOpen && (
              <div className="ml-4 mt-2 space-y-2 text-gray-600">
                <Link href="/services/administration" className="block hover:text-orangish" onClick={closeMenu}>
                  Administration Services
                </Link>
                <Link href="/services/consulting" className="block hover:text-orangish" onClick={closeMenu}>
                  Consulting Services
                </Link>
                <Link href="/services/startup" className="block hover:text-orangish" onClick={closeMenu}>
                  Accelerated Startup Package
                </Link>
              </div>
            )}
          </li>
          <li className="hover:text-orangish">
            <Link href="/inner-circle" onClick={closeMenu}>Inner Circle</Link>
          </li>
          <li>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center space-x-2 hover:text-orangish w-full"
            >
              <span>Resources</span>
              <FaChevronDown className={`${resourcesOpen ? "rotate-180" : ""} transition-transform duration-200`} />
            </button>
            {resourcesOpen && (
              <div className="ml-4 mt-2 space-y-2 text-gray-600">
                <Link href="/resources/guides" className="block hover:text-orangish" onClick={closeMenu}>
                  Guides and Whitepapers
                </Link>
                <Link href="/resources/blog" className="block hover:text-orangish" onClick={closeMenu}>
                  Blog
                </Link>
                <Link href="/resources/case-studies" className="block hover:text-orangish" onClick={closeMenu}>
                  Case Studies
                </Link>
                <Link href="/resources/tools" className="block hover:text-orangish" onClick={closeMenu}>
                  Tools
                </Link>
              </div>
            )}
          </li>
          <li className="hover:text-orangish">
            <Link href="/get-started" onClick={closeMenu}>Get Started</Link>
          </li>
          <li className="hover:text-orangish">
            <Link href="/contact" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
