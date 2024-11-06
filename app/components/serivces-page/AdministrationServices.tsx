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
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">Administration Services</h2>
      <ul className="list-disc list-inside mx-auto max-w-2xl text-left">
        {administrationServices.map((service, index) => (
          <li key={index} className="text-lg mb-2">{service}</li>
        ))}
      </ul>
      <p className="mt-4 text-gray-600">Scalable pricing based on membership size, with lower cost per member as your association grows.</p>
    </section>
  );
};

export default AdministrationServices;
