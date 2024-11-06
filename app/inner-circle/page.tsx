import React from 'react';
import {
  InnerCircleOverview,
  BenefitsSection,
  HowToJoinSection,
  TestimonialsSection,
} from '../components/inner-circle-page';

const InnerCirclePage: React.FC = () => {
  return (
    <div className='font-axiforma'>
      <InnerCircleOverview />
      <BenefitsSection />
      <HowToJoinSection />
      <TestimonialsSection />
    </div>
  );
};

export default InnerCirclePage;
