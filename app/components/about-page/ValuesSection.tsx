import React from 'react';

const values = [
  "Commitment",
  "Integrity",
  "Innovation",
  "Excellence"
];

const ValuesSection: React.FC = () => {
  return (
    <section className="py-12 text-center bg-gray-100">
      <h2 className="text-2xl font-bold font-axiforma mb-4">Our Values</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
            <p className="text-xl font-semibold font-axiforma">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
