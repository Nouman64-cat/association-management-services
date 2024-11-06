import React from 'react';

const consultingServices = [
  "Membership growth strategies",
  "Membership software selection",
  "Membership benefits and levels",
  "Social media and communication strategies",
  "Sponsorship opportunities",
  "Board structure and governance",
  "Legal requirements",
  "Project and general management"
];

const ConsultingServices: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">Consulting Services</h2>
      <ul className="list-disc list-inside mx-auto max-w-2xl text-left">
        {consultingServices.map((service, index) => (
          <li key={index} className="text-lg mb-2">{service}</li>
        ))}
      </ul>
    </section>
  );
};

export default ConsultingServices;
