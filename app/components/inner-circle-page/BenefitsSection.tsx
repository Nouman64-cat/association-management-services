import React from 'react';

const benefits = [
  "Monthly meetings with fellow association leaders",
  "Strategies, tips, and tricks for effective management",
  "Problem-solving and peer support",
  "Expert guidance on governance, growth, and best practices"
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">Benefits of the Inner Circle</h2>
      <ul className="list-disc list-inside mx-auto max-w-2xl text-left">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-lg mb-2">{benefit}</li>
        ))}
      </ul>
    </section>
  );
};

export default BenefitsSection;
