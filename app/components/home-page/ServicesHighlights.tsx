"use client"
import React, { useState, useEffect } from 'react';
import { FaRegBuilding, FaRegChartBar, FaRegHandshake, FaRegLightbulb, FaRegPaperPlane, FaRegUser } from 'react-icons/fa';
import { fetchServiceDetails } from '@/graphql';
import { Services } from '@/interfaces/services';


const iconMapping = [
  <FaRegBuilding />,   // Building icon - commonly used for offices, institutions
  <FaRegLightbulb />,  // Lightbulb icon - symbolizing ideas, innovation
  <FaRegPaperPlane />, // Paper plane icon - representing messaging, communication
  <FaRegChartBar />,   // Chart bar icon - suitable for analytics, reports
  <FaRegHandshake />,  // Handshake icon - great for partnerships, agreements
  <FaRegUser />        // User icon - versatile for personal services, clients
];

const ServicesHighlights: React.FC = () => {
  const [services, setServices] = useState<Services[]>([]);

  const loadServices = async () => {
    const response = await fetchServiceDetails();
    setServices(response);
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <h2 className="text-4xl font-extrabold font-axiforma mb-8 text-heading">
        Our{' '}
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Services
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <div className="text-rebrand text-4xl mb-4">
              {iconMapping[index % iconMapping.length]}
            </div>
            <h3 className="text-xl font-semibold font-axiforma mb-2 text-heading">
              {service.serviceName}
            </h3>
            <p className="text-gray-600 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHighlights;
