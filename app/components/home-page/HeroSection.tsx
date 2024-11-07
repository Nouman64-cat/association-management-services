import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <h1 className="text-5xl font-extrabold font-axiforma mb-4 text-heading leading-snug">
        Empowering Associations <br></br> to <span className='bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent'>Grow and Thrive</span>
      </h1>
      <p className="text-sm mb-6 text-subheading">
        Expert Administration and Consulting Services for Community Groups and Membership-Based Organizations
      </p>
      <div className='flex justify-center'>
        <button className="flex gap-4 items-center bg-gradient-to-r from-bluish via-pinkish to-orangish text-white font-axiforma px-10 py-3 rounded-full hover:bg-opacity-80">
          Get Started Today <span><FaTelegramPlane className='text-xl' /></span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
