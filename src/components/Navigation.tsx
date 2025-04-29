import { ChevronLeft, ChevronRight } from 'lucide-react';

import { stepCount } from '@/config';
import { cn } from '@/lib/utils';
import { useQuizStore } from '@/store';

type NavigationProps = {
  step: number;
  next: () => void;
  prev: () => void;
};

export default function Navigation({ step, prev, next }: NavigationProps) {
  const lastStep = step > stepCount - 1;
  const store = useQuizStore();
  const { agreeToTerms } = store;

  const currentStepAnswered = (() => {
    switch (step) {
      case 1:
        return store.stepOne.answered;
      case 2:
        return store.stepTwo.answered;
      case 3:
        return store.stepThree.answered;
      case 4:
        return store.stepFour.answered;
      case 5:
        return store.stepFive.answered;
      default:
        return true;
    }
  })();

  const isDisabled = (lastStep && !agreeToTerms) || !currentStepAnswered;

  function handleNextStep() {
    next();
  }

  return (
    <div className={'flex items-center justify-between bg-gray-100'}>
      {step > 2 && (
        <button
          className={
            'flex items-center justify-center gap-1 bg-gray-200 px-3 py-2.5 text-xl font-bold transition-all hover:bg-black hover:text-white md:min-w-[146px] md:px-6 md:text-base'
          }
          onClick={prev}
        >
          <ChevronLeft className={'stroke-3'} />
          Back
        </button>
      )}

      <button
        className={cn(
          'ml-auto flex items-center justify-center gap-1 bg-yellow-300 px-3 py-2.5 text-xl font-bold transition-all hover:bg-black hover:text-white md:min-w-[146px] md:px-6 md:text-base',
          {
            'pointer-events-none bg-gray-300': isDisabled
          }
        )}
        onClick={handleNextStep}
        disabled={isDisabled}
      >
        {lastStep ? 'Find Your Matches' : 'Next'}
        <ChevronRight
          size={20}
          className={'stroke-3'}
        />
      </button>
    </div>
  );
}
