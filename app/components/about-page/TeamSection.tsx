import React from "react";
import { FaUserCircle } from "react-icons/fa";

const teamMembers = [
  { name: "John Doe", role: "CEO", bio: "John has over 20 years of experience in association management." },
  { name: "Jane Smith", role: "COO", bio: "Jane specializes in strategic growth and member engagement." },
  { name: "Emily Johnson", role: "CFO", bio: "Emily is an expert in financial administration and compliance." }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 text-center bg-slate-50 font-axiforma">
      <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
        Our <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">Team</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white py-8 px-12 rounded-2xl shadow-lg max-w-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <FaUserCircle className="text-rebrand text-6xl" />
            </div>
            <h3 className="text-2xl font-semibold text-rebrand font-axiforma">{member.name}</h3>
            <p className="text-gray-500 text-lg font-medium font-axiforma">{member.role}</p>
            <p className="mt-4 text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
