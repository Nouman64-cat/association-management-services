"use client";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <section className="py-16 text-center max-w-lg mx-auto">
      <h2 className="text-4xl font-extrabold font-axiforma mb-6 leading-snug text-heading">
        Get in <span className="bg-gradient-to-r from-bluish via-pinkish to-orangish bg-clip-text text-transparent">Touch</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-bluish focus:shadow-lg transition-all duration-300"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-bluish focus:shadow-lg transition-all duration-300"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-bluish focus:shadow-lg transition-all duration-300"
          rows={5}
          required
        />
        <div className="flex justify-center">
          <button className="flex gap-4 items-center bg-gradient-to-r from-bluish via-pinkish to-orangish text-white font-axiforma px-14 py-3 rounded-lg hover:bg-opacity-80 hover-fly transition duration-300">
            Send Message
            <span className="icon-fly">
              <FaTelegramPlane className="text-xl" />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
