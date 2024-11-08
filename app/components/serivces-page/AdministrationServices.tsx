import React from 'react';

const administrationServices = [
  "Membership management",
  "Event management",
  "Compliance and legal support",
  "Financial administration",
  "Communication management"
];

const AdministrationServices: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-axiforma text-gray-800 mb-4">Administration Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Scalable pricing based on membership size, with lower cost per member as your association grows.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        {administrationServices.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg p-6 text-left"
          >
            <h3 className="text-xl font-semibold text-gray-700">{service}</h3>
            <p className="text-gray-500 mt-2">Our {service.toLowerCase()} provides tailored solutions to support your association’s unique needs.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdministrationServices;
