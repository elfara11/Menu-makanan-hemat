import React, { useState } from 'react';
import WelcomeFlow from '../components/onboarding/WelcomeFlow';
import PreferenceSetup from '../components/onboarding/PreferenceSetup';
import AllergyFilter from '../components/onboarding/AllergyFilter';

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeFlow onNext={nextStep} />;
      case 2:
        return <PreferenceSetup onNext={nextStep} />;
      case 3:
        return <AllergyFilter onNext={nextStep} />;
      default:
        return <WelcomeFlow onNext={nextStep} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Selamat Datang di MealsAI!</h1>
      {renderStep()}
    </div>
  );
};

export default Onboarding;