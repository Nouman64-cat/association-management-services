"use client";
import { fetchTestimonials } from '@/graphql';
import { Testimonial } from '@/interfaces/testimonials';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TestimonialsPreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const loadTestimonials = async () => {
    const response = await fetchTestimonials();
    setTestimonials(response);
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  // Automatically transition to the next testimonial every 5 seconds
  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

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
        What Our{' '}
        <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">
          Clients
        </span>{' '}
        Say
      </h2>
      <div className="relative max-w-3xl mx-auto overflow-hidden">
        {/* Only display the current testimonial */}
        {testimonials.length > 0 && (
          <div className="p-8 bg-white rounded-3xl">
            <img
              src={testimonials[currentIndex].authorImage.url}
              alt={testimonials[currentIndex].authorName}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-opacity-45 border-rebrand"
            />
            <p className="italic text-lg text-gray-700">
              "{testimonials[currentIndex].testimonialText}"
            </p>
            <p className="mt-4 font-semibold text-heading">
              – {testimonials[currentIndex].authorName}
            </p>
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 border-gray-100 bg-gray-100 rounded-full shadow hover:border hover:border-zinc-300"
        >
          <FaArrowLeft className="text-rebrand" />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 border-gray-100 bg-gray-100 rounded-full shadow hover:border hover:border-zinc-300"
        >
          <FaArrowRight className="text-rebrand" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-orangish' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPreview;
