import { useState } from 'react';

import { cn } from '@/lib/utils';

import Checkmark from './icons/Checkmark';
import { Step3Option } from './steps/Step3/step3.config';
import { Checkbox } from './ui/checkbox';

type GoalCardProps = {
  option: Step3Option;
  add: (option: string) => void;
  remove: (option: string) => void;
};

export default function GoalCard({ option, add, remove }: GoalCardProps) {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false);

  return (
    <div
      className={cn(
        'group relative flex min-h-[130px] cursor-pointer flex-col justify-between gap-5 rounded-sm border border-gray-200 px-6 py-5 shadow-lg shadow-black/5 transition-all duration-200 hover:border-transparent',
        { 'border-transparent bg-gray-100': checked }
      )}
    >
      <div
        className={cn(
          'border-blue absolute inset-0 rounded-sm border-2 opacity-0 transition-all duration-200 group-hover:opacity-100',
          { 'border-black opacity-100': checked }
        )}
      />
      <Checkbox
        className={'absolute inset-0 z-10 size-[unset] opacity-0'}
        onCheckedChange={(value) => {
          setChecked(value);
          if (value) add(option.text);
          if (!value) remove(option.text);
        }}
      />
      <div className={'flex items-center justify-between'}>
        {option.icon}
        <div
          className={cn(
            'flex size-8 items-center justify-center rounded-full bg-black/15 transition-all',
            { 'bg-yellow': checked }
          )}
        >
          <Checkmark selected={checked} />
        </div>
      </div>
      <div className={'max-w-[75%] text-lg font-bold'}>{option.text}</div>
    </div>
  );
}
