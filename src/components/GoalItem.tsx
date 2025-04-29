import { useState } from 'react';

import { motion } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

import { cn } from '@/lib/utils';

import Checkmark from './icons/Checkmark';
import { Step3Option } from './steps/Step3/step3.config';
import { Checkbox } from './ui/checkbox';

type GoalItemProps = {
  option: Step3Option;
  add: (option: string) => void;
  remove: (option: string) => void;
  index: number;
};

export default function GoalItem({
  option,
  add,
  remove,
  index
}: GoalItemProps) {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false);
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  });

  const staggerFadeIn = {
    initial: {
      opacity: 0,
      x: -20
    },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * i
      }
    })
  };

  if (isMobile) {
    return (
      <motion.div
        key={option.id}
        variants={staggerFadeIn}
        initial={'initial'}
        animate={'animate'}
        custom={index}
        className={cn(
          'group relative -mt-0.5 flex cursor-pointer flex-col justify-between gap-5 border-t-2 border-b-2 border-transparent p-4 transition-colors duration-200 hover:border-black md:px-6 md:py-5',
          { 'border-t-black border-b-black bg-yellow-100': checked }
        )}
      >
        <Checkbox
          className={'absolute inset-0 z-10 size-[unset] opacity-0'}
          onCheckedChange={(value) => {
            setChecked(value);
            if (value) add(option.text);
            if (!value) remove(option.text);
          }}
        />
        <div className={'flex items-center'}>
          {option.icon}
          <div className={'mr-auto ml-2.5 max-w-[75%] text-lg font-bold'}>
            {option.text}
          </div>
          <div
            className={cn(
              'flex size-7 items-center justify-center rounded-full bg-black/15 transition-all',
              { 'bg-yellow-300': checked }
            )}
          >
            <Checkmark selected={checked} />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={option.id}
      variants={staggerFadeIn}
      initial={'initial'}
      animate={'animate'}
      custom={index}
      className={cn(
        'group relative flex min-h-[130px] cursor-pointer flex-col justify-between gap-5 rounded-sm border border-gray-200 p-4 shadow-lg shadow-black/5 transition-colors duration-200 hover:border-transparent md:px-6 md:py-5',
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
            { 'bg-yellow-300': checked }
          )}
        >
          <Checkmark selected={checked} />
        </div>
      </div>
      <div className={'max-w-[75%] text-lg font-bold'}>{option.text}</div>
    </motion.div>
  );
}
