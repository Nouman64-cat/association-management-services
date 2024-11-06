"use client"
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API)
    alert('Form submitted');
  };

  return (
    <section className="py-12 text-center max-w-lg mx-auto">
      <h2 className="text-2xl font-bold font-axiforma mb-4">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-pinkish via-bluish to-orangish text-white font-axiforma px-6 py-3 rounded-full hover:bg-opacity-80"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
