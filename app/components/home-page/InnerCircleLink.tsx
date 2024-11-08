import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const InnerCircleLink: React.FC = () => {
  return (
    <section className="py-12 text-center bg-slate-100">
      <h2 className="text-4xl font-extrabold font-axiforma mb-4 text-heading">
        Join Our Inner Circle <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Mastermind
        </span> Group
      </h2> 
      <p className="mb-6 text-subheading">
        Connect with other leaders and access exclusive tips and strategies.
      </p>
      <div className="flex justify-center">
        <button className="flex items-center gap-4 bg-gradient-to-r from-bluish via-pinkish to-orangish text-white font-axiforma px-14 py-3 rounded-lg hover:bg-opacity-80 hover-fly transition duration-300">
          Join Now
          <span className="icon-fly">
            <FaTelegramPlane className="text-xl" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default InnerCircleLink;
