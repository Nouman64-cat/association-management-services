import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 px-4 text-center bg-light-grayish">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-6 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            Ready to Get Started?
          </span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Contact us today to schedule a free consultation and see how we can
          help your association thrive.
        </p>
        <div className="flex justify-center">
          <button className="flex gap-4 items-center bg-gradient-to-r from-bluish via-pinkish to-orangish text-white font-axiforma px-14 py-3 rounded-lg hover:bg-opacity-80 hover-fly">
            Get Started Today
            <span className="icon-fly">
              <FaTelegramPlane className="text-xl" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
