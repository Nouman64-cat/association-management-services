import React from 'react';
import { FaRegHeart, FaRegLightbulb, FaRegStar } from 'react-icons/fa';
import { HiOutlineShieldCheck } from 'react-icons/hi';

const values = [
  { name: "Commitment", icon: <FaRegHeart className="text-rebrand w-6 h-6" /> },
  { name: "Integrity", icon: <HiOutlineShieldCheck className="text-rebrand w-6 h-6" /> },
  { name: "Innovation", icon: <FaRegLightbulb className="text-rebrand w-6 h-6" /> },
  { name: "Excellence", icon: <FaRegStar className="text-rebrand w-6 h-6" /> },
];

const ValuesSection: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-extrabold font-axiforma text-heading mb-8">
        We <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">specialize</span> in empowering <br /> associations to succeed
      </h2>
      <div className="flex flex-wrap justify-center gap-12 mt-6">
        {values.map((value, index) => (
          <div key={index} className="flex items-center space-x-3">
            {value.icon}
            <p className="text-lg font-semibold font-axiforma text-gray-700">{value.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
