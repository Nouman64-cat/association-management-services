"use client"
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  { quote: "Association Management Services helped us streamline our membership processes.", name: "John D." },
  { quote: "Their team provided us with invaluable insights on governance and compliance.", name: "Sarah W." },
  { quote: "Thanks to their scalable pricing, we've grown without increasing costs.", name: "Tom M." },
  { quote: "The best decision we made was choosing AMS for our association's needs.", name: "Emily R." },
  { quote: "Their support team is responsive and understands our challenges.", name: "Mike L." },
  { quote: "Our association has grown tremendously with AMS by our side.", name: "Karen W." },
  { quote: "AMS provided customized solutions that perfectly fit our requirements.", name: "Samuel K." },
];

const TestimonialsPreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically transition to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-light-grayish text-center">
      <h2 className="text-4xl font-extrabold font-axiforma mb-12 text-heading">
        What Our <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">Clients</span> Say
      </h2>
      <div className="relative max-w-3xl mx-auto overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full p-8 bg-white rounded-3xl">
              <p className="italic text-lg text-gray-700">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold text-heading">– {testimonial.name}</p>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button onClick={goToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 border-gray-100 bg-gray-100 rounded-full shadow hover:border hover:border-zinc-300">
          <FaArrowLeft className='text-rebrand' />
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 border-gray-100 bg-gray-100 rounded-full shadow hover:border hover:border-zinc-300">
          <FaArrowRight className='text-rebrand' />
        </button>
      </div>
      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${index === currentIndex ? 'bg-orangish' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPreview;
