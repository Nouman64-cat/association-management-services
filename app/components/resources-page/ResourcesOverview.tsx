import React from 'react';

const ResourcesOverview: React.FC = () => {
  return (
    <section className="py-16 text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold font-axiforma mb-6 leading-snug text-heading">
      Access Our{" "}
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
           Expert Resources
        </span>
      </h2>
      <p className="text-sm text-subheading px-6 md:px-0 max-w-2xl mx-auto">
        Discover guides, articles, case studies, and tools designed to help associations and community groups thrive.
      </p>
    </section>
  );
};

export default ResourcesOverview;
