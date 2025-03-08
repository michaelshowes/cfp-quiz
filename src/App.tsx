import { useState } from 'react';

import { AnimatePresence, motion } from 'motion/react';

import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import AnimateStep from './components/steps/AnimateStep';
import { stepConfig } from './components/steps/stepConfig';
import { stepCount } from './config';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className={'relative mx-auto h-dvh w-full max-w-[950px]'}>
      {currentStep < stepCount + 1 ? (
        <>
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
        </>
      ) : (
        <AnimatePresence>
          <motion.div
            key={currentStep}
            className={'flex h-dvh w-full flex-col items-center justify-center'}
            initial={{ opacity: 0, translateY: -30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -30 }}
          >
            <object
              data='/puzzle.svg'
              type='image/svg+xml'
              className={'size-[174px]'}
            ></object>
            <div className={'text-2xl font-bold'}>Finding Your Matches...</div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
