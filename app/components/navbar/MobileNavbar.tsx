"use client";
import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/ams_logo.png";

const MobileNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-4 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="AMS | Association Management Services"
              width={50}
              height={50}
            />
            <h1 className="font-axiforma text-orangish leading-none">AMS</h1>
          </div>
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-zinc-700">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <ul className="mt-4 space-y-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <button className="flex items-center space-x-1">
              <span>Services</span>
              <FaChevronDown />
            </button>
            <div className="ml-4 mt-2 space-y-2">
              <Link href="/services/administration" className="block">
                Administration Services
              </Link>
              <Link href="/services/consulting" className="block">
                Consulting Services
              </Link>
              <Link href="/services/startup" className="block">
                Accelerated Startup Package
              </Link>
            </div>
          </li>
          <li>
            <Link href="/inner-circle">Inner Circle</Link>
          </li>
          <li>
            <button className="flex items-center space-x-1">
              <span>Resources</span>
              <FaChevronDown />
            </button>
            <div className="ml-4 mt-2 space-y-2">
              <Link href="/resources/guides" className="block">
                Guides and Whitepapers
              </Link>
              <Link href="/resources/blog" className="block">
                Blog
              </Link>
              <Link href="/resources/case-studies" className="block">
                Case Studies
              </Link>
              <Link href="/resources/tools" className="block">
                Tools
              </Link>
            </div>
          </li>
          <li>
            <Link href="/get-started">Get Started</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
