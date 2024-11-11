"use client"
import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { fetchServiceDetails } from '@/graphql';
import { Services } from '@/interfaces/services';

const ConsultingServices: React.FC = () => {
  const [consultingServices, setConsultingServices] = useState<Services[]>([]);

  const loadConsultingServices = async () => {
    const allServices = await fetchServiceDetails();
    const filteredServices = allServices.filter(
      (service: Services) => service.category === "Consulting"
    );
    setConsultingServices(filteredServices);
  };

  useEffect(() => {
    loadConsultingServices();
  }, []);

  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <h2 className="text-4xl font-extrabold font-axiforma mb-8 text-heading">
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Consulting Services
        </span>
      </h2>
      <p className="text-subheading max-w-2xl mx-auto mb-12">
        We offer a range of consulting services to help associations grow, engage members, and enhance operational efficiency.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
        {consultingServices.map((service, index) => (
          <li
            key={index}
            className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <FaCheckCircle className="text-rebrand text-2xl mt-1" />
            <span className="text-lg font-axiforma text-heading">{service.serviceName}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ConsultingServices;
