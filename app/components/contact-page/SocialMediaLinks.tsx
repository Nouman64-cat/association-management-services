import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinks: React.FC = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold font-axiforma mb-4">Follow Us</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-600">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-700">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
