import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section className="py-16 text-center max-w-4xl mx-auto">
      <h2 className="text-5xl font-extrabold font-axiforma mb-6 text-heading leading-snug">
        Our{' '}
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Mission
        </span>
      </h2>
      <p className="text-lg text-subheading px-6 md:px-0">
        To support membership-based organizations in achieving sustainable growth, member retention, and operational
        excellence.
      </p>
    </section>
  );
};

export default MissionSection;
