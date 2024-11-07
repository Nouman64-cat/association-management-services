import React from 'react';
import { FaChartLine, FaUsers, FaShieldAlt, FaDollarSign } from 'react-icons/fa';

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-12 text-center max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold font-axiforma mb-6 text-heading leading-snug">
        We <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">specialize</span> in empowering<br /> associations to succeed
      </h2>
      <div className="flex flex-wrap justify-center items-center space-x-16 text-subheading mt-8">
        <div className="flex items-center space-x-3">
          <FaChartLine className="text-2xl text-rebrand" />
          <p className="text-base font-axiforma">Sustainable Growth</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaUsers className="text-2xl text-rebrand" />
          <p className="text-base font-axiforma">Member Engagement</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaShieldAlt className="text-2xl text-rebrand" />
          <p className="text-base font-axiforma">Legal Compliance</p>
        </div>
        <div className="flex items-center space-x-3">
          <FaDollarSign className="text-2xl text-rebrand" />
          <p className="text-base font-axiforma">Financial Stability</p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
