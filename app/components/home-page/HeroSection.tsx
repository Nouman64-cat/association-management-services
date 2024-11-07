"use client";

import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <h1 className="text-5xl font-extrabold font-axiforma mb-4 text-heading leading-snug">
        Empowering Associations <br /> to{' '}
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Grow and Thrive
        </span>
      </h1>
      <p className="text-sm mb-6 text-subheading">
        Expert Administration and Consulting Services for Community Groups
      </p>
      <div className="flex justify-center">
        <button className="flex gap-4 items-center bg-gradient-to-r from-bluish via-pinkish to-orangish text-white font-axiforma px-14 py-3 rounded-lg hover:bg-opacity-80 hover-fly">
          Get Started Today 
          <span className="icon-fly">
            <FaTelegramPlane className="text-xl" />
          </span>
        </button>
      </div>
      <p className="text-[12px] mt-1 text-subheading">
        Membership-Based Organizations
      </p>
    </section>
  );
};

export default HeroSection;
