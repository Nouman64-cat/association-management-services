import React from "react";

const GetStartedOverview: React.FC = () => {
  return (
    <section className="py-16 text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold font-axiforma mb-6 leading-snug text-heading">
        Partner with Us to{" "}
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Manage Your Association
        </span>{" "}
        More Effectively
      </h2>
      <p className="text-lg text-subheading px-6 md:px-0 max-w-2xl mx-auto">
        Focus on what truly matters – your members. Let us handle the rest with
        our expert administration services.
      </p>
    </section>
  );
};

export default GetStartedOverview;
