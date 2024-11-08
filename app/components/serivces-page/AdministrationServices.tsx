import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const administrationServices = [
  "Membership management",
  "Event management",
  "Compliance and legal support",
  "Financial administration",
  "Communication management"
];

const AdministrationServices: React.FC = () => {
  return (
    <section className="py-16 bg-light-grayish">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold font-axiforma text-heading mb-4">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Administration Services
          </span>
        </h2>
        <p className="text-subheading max-w-xl mx-auto">
          Scalable pricing based on membership size, with lower cost per member as your association grows.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {administrationServices.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-transparent hover:border-gradient-to-r hover:from-bluish hover:via-pinkish hover:to-orangish shadow-md hover:shadow-lg transition-all rounded-3xl p-8 text-left"
          >
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-rebrand text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-heading">{service}</h3>
            </div>
            <p className="text-gray-600">
              Our {service.toLowerCase()} provides tailored solutions to support your association’s unique needs.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdministrationServices;
