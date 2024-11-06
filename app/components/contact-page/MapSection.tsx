import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-4">Our Location</h2>
      <div className="w-full h-64 bg-gray-200 rounded-lg">
        {/* Embed Google Map here if available */}
        <p className="text-gray-600 mt-8">Map Placeholder</p>
      </div>
    </section>
  );
};

export default MapSection;
