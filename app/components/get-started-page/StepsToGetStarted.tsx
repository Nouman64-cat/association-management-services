import React from 'react';

const steps = [
  { title: "Contact Us", description: "Schedule a consultation to discuss your association's needs." },
  { title: "Assessment", description: "We’ll evaluate your current association needs." },
  { title: "Proposal", description: "Receive tailored solutions based on your association's requirements." },
  { title: "Onboarding", description: "Seamless integration of our administration services." }
];

const StepsToGetStarted: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Steps to Get Started
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <h3 className="text-xl font-semibold font-axiforma mb-4 text-heading">{step.title}</h3>
              <p className="text-gray-700 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsToGetStarted;
