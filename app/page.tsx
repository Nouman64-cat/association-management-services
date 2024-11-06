import React from 'react';
import {
  HeroSection,
  IntroductionSection,
  ServicesHighlights,
  TestimonialsPreview,
  InnerCircleLink,
} from './components/home-page';
const HomePage: React.FC = () => {
  return (
    <div className='font-axiforma'>
      <HeroSection />
      <IntroductionSection />
      <ServicesHighlights />
      <TestimonialsPreview />
      <InnerCircleLink />
    </div>
  );
};

export default HomePage;
