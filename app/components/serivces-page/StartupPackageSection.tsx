import React from 'react';

const StartupPackageSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-pinkish via-bluish to-orangish text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-6 leading-snug">
          <span className="text-white">
            Accelerated Startup Package
          </span>
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Get your new association or community project up and running quickly and efficiently with our startup package.
        </p>
        <button className="mt-4 bg-white text-pinkish font-axiforma px-10 py-3 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default StartupPackageSection;
