import { useRef } from 'react';

import { motion } from 'motion/react';

import GoalItem from '@/components/GoalItem';
import { setStepThreeAnswer } from '@/store';

import StepHeader from '../StepHeader';
import { step3Config } from './step3.config';

export default function Step3() {
  const ref = useRef<HTMLDivElement>(null);
  const { title, subtitle, options } = step3Config;

  const addToSelectedOptions = (optionText: string) => {
    setStepThreeAnswer((prev: string[]) => {
      if (!prev.length) {
        return [optionText];
      }

      return [...prev, optionText];
    });
  };

  const removeFromSelectedOptions = (optionText: string) => {
    setStepThreeAnswer((prev: string[]) => {
      if (!prev) {
        return [];
      }

      return prev.filter((option) => option !== optionText);
    });
  };

  return (
    <div
      className={'pb-16'}
      ref={ref}
    >
      <StepHeader
        title={title}
        subtitle={subtitle}
      />

      <div className={'max-md:pt-8'}>
        <div className={'grid gap-4 md:grid-cols-2'}>
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GoalItem
                option={option}
                add={addToSelectedOptions}
                remove={removeFromSelectedOptions}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
