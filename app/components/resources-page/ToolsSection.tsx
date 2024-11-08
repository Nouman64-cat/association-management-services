import React from 'react';

const tools = [
  { name: "Membership Management Template", description: "A comprehensive template for managing members effectively." },
  { name: "Event Planning Checklist", description: "Step-by-step checklist for organizing successful events." },
  { name: "Financial Reporting Tool", description: "Simplify financial management with our easy-to-use tool." }
];

const ToolsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Tools
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <h3 className="text-xl font-semibold font-axiforma mb-4 text-heading">{tool.name}</h3>
              <p className="text-gray-700 text-base">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
