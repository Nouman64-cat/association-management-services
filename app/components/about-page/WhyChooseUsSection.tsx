import React from 'react';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 text-center bg-slate-50">
      <h2 className="text-4xl font-extrabold font-axiforma mb-6 text-heading">
        Why <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">Choose Us?</span>
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-subheading font-axiforma">
        Our experience, flexible pricing, and comprehensive services make us the go-to partner for community groups and associations.
      </p>
    </section>
  );
};

export default WhyChooseUsSection;
