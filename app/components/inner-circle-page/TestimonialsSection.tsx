import React from 'react';

const testimonials = [
  { quote: "The Inner Circle meetings are a game changer – the networking and advice are priceless.", name: "Maria S." },
  { quote: "Connecting with other leaders has been invaluable for us – the support and insights have helped us immensely.", name: "Robert A." },
  { quote: "Being part of the Inner Circle has allowed us to grow and solve challenges with expert guidance.", name: "Linda K." }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-8">What Our Inner Circle Members Say</h2>
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

export default TestimonialsSection;
