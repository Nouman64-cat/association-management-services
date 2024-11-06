import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-4">Ready to Get Started?</h2>
      <p className="text-lg max-w-3xl mx-auto">
        Contact us today to schedule a free consultation and see how we can help your association thrive.
      </p>
      <button className="mt-6 bg-gradient-to-r from-pinkish via-bluish to-orangish text-white font-axiforma px-6 py-3 rounded-full hover:bg-opacity-80">
        Contact Us
      </button>
    </section>
  );
};

export default CallToAction;
