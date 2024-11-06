import React from 'react';

const InnerCircleLink: React.FC = () => {
  return (
    <section className="py-12 text-center bg-gradient-to-r from-pinkish via-bluish to-orangish text-white">
      <h2 className="text-2xl font-bold font-axiforma mb-4">
        Join Our Inner Circle Mastermind Group
      </h2>
      <p className="mb-6">
        Connect with other leaders and access exclusive tips and strategies.
      </p>
      <button className="bg-white text-pinkish font-axiforma px-6 py-3 rounded-full hover:bg-opacity-80">
        Join Now
      </button>
    </section>
  );
};

export default InnerCircleLink;
