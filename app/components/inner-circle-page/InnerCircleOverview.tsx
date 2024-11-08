import React from "react";

const InnerCircleOverview: React.FC = () => {
  return (
    <section className="py-16 text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold font-axiforma mb-6 leading-snug text-heading">
        Join Our Exclusive{" "}
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Inner Circle Mastermind
        </span>{" "}
        Group
      </h2>
      <p className="text-sm text-subheading px-6 md:px-0 max-w-2xl mx-auto">
        A paid engagement with a 12-month commitment for monthly meetings led by
        our experienced Directors. Connect with other association leaders, share
        strategies, and grow together.
      </p>
    </section>
  );
};

export default InnerCircleOverview;
