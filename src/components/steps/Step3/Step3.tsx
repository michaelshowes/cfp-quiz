import { useState } from 'react';

import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

import GoalCard from '@/components/GoalCard';

import StepHeader from '../StepHeader';
import { step3Config } from './step3.config';

export default function Step3() {
  const [selectedOptions, setSelectedOptions] = useState<string[] | null>(null);
  const { title, subtitle, options } = step3Config;

  const addToSelectedOptions = (optionText: string) => {
    setSelectedOptions((prev) => {
      if (!prev) {
        return [optionText];
      }

      return [...prev, optionText];
    });
  };

  const removeFromSelectedOptions = (optionText: string) => {
    setSelectedOptions((prev) => {
      if (!prev) {
        return null;
      }

      return prev.filter((option) => option !== optionText);
    });
  };

  console.log(selectedOptions);

  const staggerFadeIn = {
    initial: {
      opacity: 0,
      x: -20
    },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.02 * i
      }
    })
  };

  return (
    <div className={'pb-16'}>
      <StepHeader
        title={title}
        subtitle={subtitle}
      />

      <div className={'pt-12'}>
        <div className={'grid grid-cols-3 gap-11'}>
          {options.map((option, i) => (
            <motion.div
              key={option.id}
              variants={staggerFadeIn}
              initial={'initial'}
              animate={'animate'}
              custom={i}
            >
              <GoalCard
                option={option}
                key={option.id}
                add={addToSelectedOptions}
                remove={removeFromSelectedOptions}
              />
            </motion.div>
          ))}
          <button
            className={
              'group relative flex min-h-[130px] cursor-pointer flex-col items-center justify-center gap-5 rounded-sm border border-gray-200 px-6 py-5 shadow-lg shadow-black/5 transition-all duration-200 hover:border-transparent'
            }
          >
            <div
              className={
                'border-blue absolute inset-0 rounded-sm border-2 opacity-0 transition-all duration-200 group-hover:opacity-100'
              }
            />
            <div
              className={
                'flex items-center gap-1.5 text-lg font-bold uppercase'
              }
            >
              <span
                className={
                  'decoration-blue underline decoration-2 underline-offset-6'
                }
              >
                Show More
              </span>
              <ChevronRight
                size={16}
                className={'stroke-3'}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
