import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-pinkish via-bluish to-orangish text-white py-16 text-center">
      <h1 className="text-4xl font-bold font-axiforma mb-4">
        Empowering Associations to Grow and Thrive
      </h1>
      <p className="text-lg mb-6">
        Expert Administration and Consulting Services for Community Groups and Membership-Based Organizations
      </p>
      <button className="bg-white text-pinkish font-axiforma px-6 py-3 rounded-full hover:bg-opacity-80">
        Get Started Today – Talk to Us About Your Association's Needs
      </button>
    </section>
  );
};

export default HeroSection;
