import React from 'react';

const teamMembers = [
  { name: "John Doe", role: "CEO", bio: "John has over 20 years of experience in association management." },
  { name: "Jane Smith", role: "COO", bio: "Jane specializes in strategic growth and member engagement." },
  { name: "Emily Johnson", role: "CFO", bio: "Emily is an expert in financial administration and compliance." }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-4">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-xl font-semibold font-axiforma">{member.name}</h3>
            <p className="text-gray-700 font-axiforma">{member.role}</p>
            <p className="mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
