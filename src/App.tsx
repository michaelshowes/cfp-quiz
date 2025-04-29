import { Fragment, useEffect, useRef } from 'react';

import Completed from './components/Completed';
import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import AnimateStep from './components/steps/AnimateStep';
import { stepConfig } from './components/steps/stepConfig';
import { stepCount } from './config';
import { setCurrentStep, useQuizStore } from './store';

export default function App() {
  const ref = useRef<HTMLDivElement>(null);
  const store = useQuizStore();
  const { currentStep } = store;

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  useEffect(() => {
    const pacContainer = document.querySelector('.pac-container');

    if (pacContainer) {
      const sibling = pacContainer.nextElementSibling;
      if (sibling && sibling.classList.contains('pac-container')) {
        sibling.remove();
      }
    }

    if (currentStep !== 2 && pacContainer) {
      pacContainer.remove();
    }
  }, [currentStep]);

  return (
    <main>
      <div
        className={'text-md bg-yellow-200 px-4 py-2.5 text-center md:hidden'}
      >
        <span className={'font-bold'}>Take the Quiz:</span> Get Matched With a
        CFP® Pro
      </div>
      <div className={'h-full md:px-20'}>
        <div
          className={
            'relative mx-auto flex h-full w-full max-w-[950px] flex-col justify-between sm:block'
          }
        >
          {currentStep < stepCount + 1 ? (
            <div>
              <div className={'pt-7'}>
                <ProgressIndicator currentStep={currentStep} />
                <div>
                  {stepConfig.map(({ step, component: Component }) => (
                    <Fragment key={step}>
                      {currentStep === step && (
                        <AnimateStep
                          key={step}
                          currentStep={currentStep}
                        >
                          <div className={'px-4 md:px-0'}>
                            <Component ref={ref} />
                          </div>
                        </AnimateStep>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>

              <div className={'fixed bottom-0 left-0 w-full'}>
                <Navigation
                  step={currentStep}
                  next={handleNextStep}
                  prev={handlePreviousStep}
                />
              </div>
            </div>
          ) : (
            <Completed />
          )}
        </div>
      </div>
    </main>
  );
}
