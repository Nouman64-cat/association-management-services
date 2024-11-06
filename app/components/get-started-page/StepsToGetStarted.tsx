import React from 'react';

const steps = [
  { title: "Contact Us", description: "Schedule a consultation to discuss your association's needs." },
  { title: "Assessment", description: "We’ll evaluate your current association needs." },
  { title: "Proposal", description: "Receive tailored solutions based on your association's requirements." },
  { title: "Onboarding", description: "Seamless integration of our administration services." }
];

const StepsToGetStarted: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">Steps to Get Started</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold font-axiforma">{step.title}</h3>
            <p className="text-gray-700 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsToGetStarted;
