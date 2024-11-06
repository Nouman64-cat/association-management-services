import React from 'react';

const HowToJoinSection: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-4">How to Join</h2>
      <p className="text-lg max-w-3xl mx-auto">
        Become a member today and connect with other leaders who share your challenges and goals. Our Inner Circle group offers exclusive access to strategies and insights that drive success.
      </p>
      <button className="mt-6 bg-gradient-to-r from-pinkish via-bluish to-orangish text-white font-axiforma px-6 py-3 rounded-full hover:bg-opacity-80">
        Join Now
      </button>
    </section>
  );
};

export default HowToJoinSection;
