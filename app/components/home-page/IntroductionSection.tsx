import React from 'react';
import { FaRegChartBar, FaRegUser, FaRegCheckCircle, FaRegMoneyBillAlt } from 'react-icons/fa';

const features = [
  { title: "Sustainable Growth", icon: <FaRegChartBar className="text-2xl text-rebrand" /> },
  { title: "Member Engagement", icon: <FaRegUser className="text-2xl text-rebrand" /> },
  { title: "Legal Compliance", icon: <FaRegCheckCircle className="text-2xl text-rebrand" /> },
  { title: "Financial Stability", icon: <FaRegMoneyBillAlt className="text-2xl text-rebrand" /> },
];

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-12 text-center max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold font-axiforma mb-6 text-heading leading-snug">
        We <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">specialize</span> in empowering<br /> associations to succeed
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 text-subheading">
        {features.map((feature, index) => (
          <div key={index} className="flex justify-center items-center space-x-3">
            {feature.icon}
            <p className="text-base font-axiforma">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroductionSection;
