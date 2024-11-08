"use client"
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { fetchTeamBios } from "@/graphql";
import { TeamBio } from "@/interfaces/team";


const TeamSection: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamBio[]>([]);

  const loadTeamBios = async () => {
    const response = await fetchTeamBios();
    setTeamMembers(response);
  };

  useEffect(() => {
    loadTeamBios();
  }, []);

  return (
    <section className="py-16 text-center bg-slate-50 font-axiforma">
      <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
        Our{" "}
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Team
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white py-8 px-12 rounded-2xl shadow-lg max-w-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              {member.profileImage?.url ? (
                <img
                  src={member.profileImage.url}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-rebrand text-6xl" />
              )}
            </div>
            <h3 className="text-2xl font-semibold text-rebrand font-axiforma">
              {member.name}
            </h3>
            <p className="text-gray-500 text-lg font-medium font-axiforma">
              {member.title}
            </p>
            <p className="mt-4 text-gray-700">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
