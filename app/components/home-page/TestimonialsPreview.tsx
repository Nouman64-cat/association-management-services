import React from 'react';

const testimonials = [
  { quote: "Association Management Services helped us streamline our membership processes.", name: "John D." },
  { quote: "Their team provided us with invaluable insights on governance and compliance.", name: "Sarah W." },
  { quote: "Thanks to their scalable pricing, we've grown without increasing costs.", name: "Tom M." }
];

const TestimonialsPreview: React.FC = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xs">
            <p className="italic text-gray-800">"{testimonial.quote}"</p>
            <p className="font-semibold mt-4">– {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPreview;
