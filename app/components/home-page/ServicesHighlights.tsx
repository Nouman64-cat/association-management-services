import React from 'react';

const services = [
  { title: "Administration Services", description: "Flexible, scalable pricing for all association needs." },
  { title: "Consulting Services", description: "Strategies for growth, member retention, and governance." },
  { title: "Accelerated Startup Package", description: "Get your association up and running quickly." }
];

const ServicesHighlights: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold font-axiforma mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHighlights;
