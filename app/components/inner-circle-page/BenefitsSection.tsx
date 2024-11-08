import React from 'react';

const benefits = [
  "Monthly meetings with fellow association leaders",
  "Strategies, tips, and tricks for effective management",
  "Problem-solving and peer support",
  "Expert guidance on governance, growth, and best practices"
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma text-heading mb-8">
          Benefits of the <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">Inner Circle</span>
        </h2>
        <ul className="space-y-4 text-left text-lg text-gray-700 font-axiforma leading-relaxed">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <span className="text-rebrand text-2xl font-bold">•</span>
              <p>{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
