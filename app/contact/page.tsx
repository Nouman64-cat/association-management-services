import React from 'react';
import {
  ContactForm,
  ContactInformation,
  MapSection,
  SocialMediaLinks,
} from '../components/contact-page';

const ContactPage: React.FC = () => {
  return (
    <div className='font-axiforma'>
      <ContactForm />
      <ContactInformation />
      <MapSection />
      <SocialMediaLinks />
    </div>
  );
};

export default ContactPage;
