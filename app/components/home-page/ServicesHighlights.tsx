import React from 'react';
import { FaRegBuilding, FaRegLightbulb, FaRegPaperPlane } from 'react-icons/fa';

const services = [
  { title: "Administration Services", description: "Flexible, scalable pricing for all association needs.", icon: <FaRegBuilding /> },
  { title: "Consulting Services", description: "Strategies for growth, member retention, and governance.", icon: <FaRegLightbulb /> },
  { title: "Accelerated Startup Package", description: "Get your association up and running quickly.", icon: <FaRegPaperPlane /> }
];

const ServicesHighlights: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <h2 className="text-4xl font-extrabold font-axiforma mb-8 text-heading">
        Our <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">Services</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="text-rebrand text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold font-axiforma mb-2 text-heading">{service.title}</h3>
            <p className="text-gray-600 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHighlights;
