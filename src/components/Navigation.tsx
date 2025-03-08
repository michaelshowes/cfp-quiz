import { ChevronLeft, ChevronRight } from 'lucide-react';

import { stepCount } from '@/config';

type NavigationProps = {
  step: number;
  next: () => void;
  prev: () => void;
};

export default function Navigation({ step, prev, next }: NavigationProps) {
  const lastStep = step > stepCount - 1;

  return (
    <div className={'flex items-center justify-between bg-gray-100'}>
      {step > 2 && (
        <button
          className={
            'flex w-[146px] items-center justify-center gap-2 bg-gray-200 px-6 py-2.5 font-bold transition-all hover:bg-black hover:text-white'
          }
          onClick={prev}
        >
          <ChevronLeft className={'stroke-3'} />
          Back
        </button>
      )}

      <button
        className={
          'bg-yellow ml-auto flex min-w-[146px] items-center justify-center gap-2 px-6 py-2.5 font-bold transition-all hover:bg-black hover:text-white'
        }
        onClick={next}
      >
        {lastStep ? 'Find Your Matches' : 'Next'}
        <ChevronRight className={'stroke-3'} />
      </button>
    </div>
  );
}
