import React from 'react';

const testimonials = [
  { quote: "The Inner Circle meetings are a game changer – the networking and advice are priceless.", name: "Maria S." },
  { quote: "Connecting with other leaders has been invaluable for us – the support and insights have helped us immensely.", name: "Robert A." },
  { quote: "Being part of the Inner Circle has allowed us to grow and solve challenges with expert guidance.", name: "Linda K." }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-light-grayish text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold font-axiforma mb-10 text-heading">
          <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
            What Our Inner Circle Members Say
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
            >
              <p className="italic text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-heading">– {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
