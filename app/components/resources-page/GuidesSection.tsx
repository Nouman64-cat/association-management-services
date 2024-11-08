import React from 'react';

const guides = [
  { title: "Membership Growth Guide", description: "Strategies to increase member engagement and retention." },
  { title: "Compliance Checklist", description: "Ensure your organization meets all legal and regulatory requirements." },
  { title: "Governance Best Practices", description: "Effective governance models for associations." }
];

const GuidesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Guides and Whitepapers
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <h3 className="text-xl font-semibold font-axiforma mb-4 text-heading">{guide.title}</h3>
              <p className="text-gray-700 text-base">{guide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;
