import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Navigation({ step }: { step: number }) {
  return (
    <div className={'flex items-center justify-between bg-gray-100'}>
      {step > 2 && (
        <button
          className={
            'flex w-[146px] items-center justify-center gap-2 bg-gray-200 px-6 py-2.5 font-bold transition-all hover:bg-black hover:text-white'
          }
        >
          <ChevronLeft className={'stroke-3'} />
          Back
        </button>
      )}

      <button
        className={
          'bg-yellow ml-auto flex w-[146px] items-center justify-center gap-2 px-6 py-2.5 font-bold transition-all hover:bg-black hover:text-white'
        }
      >
        Next
        <ChevronRight className={'stroke-3'} />
      </button>
    </div>
  );
}
