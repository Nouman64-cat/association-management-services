import React from "react";

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-16 text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold font-axiforma mb-6 leading-snug text-heading">
        Comprehensive{" "}
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Administration and Consulting
        </span>{" "}
        Services for Associations
      </h2>
      <p className="text-sm text-subheading px-6 md:px-0 max-w-2xl mx-auto">
        AMS offers a full range of administration and consulting services to
        help associations and community groups achieve their goals.
      </p>
    </section>
  );
};

export default ServicesOverview;
