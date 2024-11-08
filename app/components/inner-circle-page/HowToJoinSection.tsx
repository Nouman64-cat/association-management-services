import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const HowToJoinSection: React.FC = () => {
  return (
    <section className="py-16 px-4 text-center bg-light-grayish">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-6 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            How to Join
          </span>
        </h2>
        <p className="text-lg text-subheading max-w-2xl mx-auto mb-10">
          Become a member today and connect with other leaders who share your challenges and goals. Our Inner Circle group offers exclusive access to strategies and insights that drive success.
        </p>
        <div className="flex justify-center">
          <button className="flex items-center gap-4 bg-gradient-to-r from-bluish via-pinkish to-orangish text-white font-axiforma px-12 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300 hover-fly">
            Join Now
            <span className="icon-fly">
              <FaTelegramPlane className="text-xl animate-fly" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToJoinSection;
