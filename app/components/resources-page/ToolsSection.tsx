import React from 'react';

const tools = [
  { name: "Membership Management Template", description: "A comprehensive template for managing members effectively." },
  { name: "Event Planning Checklist", description: "Step-by-step checklist for organizing successful events." },
  { name: "Financial Reporting Tool", description: "Simplify financial management with our easy-to-use tool." }
];

const ToolsSection: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">Tools</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold font-axiforma">{tool.name}</h3>
            <p className="text-gray-700 mt-2">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
