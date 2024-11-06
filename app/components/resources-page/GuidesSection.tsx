import React from 'react';

const guides = [
  { title: "Membership Growth Guide", description: "Strategies to increase member engagement and retention." },
  { title: "Compliance Checklist", description: "Ensure your organization meets all legal and regulatory requirements." },
  { title: "Governance Best Practices", description: "Effective governance models for associations." }
];

const GuidesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">Guides and Whitepapers</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {guides.map((guide, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold font-axiforma">{guide.title}</h3>
            <p className="text-gray-700">{guide.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuidesSection;
