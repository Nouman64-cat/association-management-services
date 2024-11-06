import React from 'react';
import {
  MissionSection,
  TeamSection,
  ValuesSection,
  WhyChooseUsSection,
} from '../components/about-page';

const AboutPage: React.FC = () => {
  return (
    <div>
      <MissionSection />
      <TeamSection />
      <ValuesSection />
      <WhyChooseUsSection />
    </div>
  );
};

export default AboutPage;
