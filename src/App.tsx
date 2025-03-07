import { useState } from 'react';

import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import AnimateStep from './components/steps/AnimateStep';
import { stepConfig } from './components/steps/stepConfig';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className={'relative mx-auto w-full max-w-[950px]'}>
      <ProgressIndicator currentStep={currentStep} />
      {stepConfig.map(({ step, component }) => (
        <AnimateStep
          key={step}
          currentStep={currentStep}
        >
          {currentStep === step && component}
        </AnimateStep>
      ))}
      <Navigation
        step={currentStep}
        next={handleNextStep}
        prev={handlePreviousStep}
      />
    </div>
  );
}
