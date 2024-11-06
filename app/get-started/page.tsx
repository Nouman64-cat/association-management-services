import React from 'react';
import {
  GetStartedOverview,
  StepsToGetStarted,
  CallToAction,
} from '../components/get-started-page';

const GetStartedPage: React.FC = () => {
  return (
    <div className='font-axiforma'>
      <GetStartedOverview />
      <StepsToGetStarted />
      <CallToAction />
    </div>
  );
};

export default GetStartedPage;
