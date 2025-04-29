import { useRef } from 'react';

import Radios from '@/components/Radios';
import { setStepOneAnswer } from '@/store';

import StepHeader from '../StepHeader';
import { step1Config } from './step1.config';

export default function Step1() {
  const ref = useRef<HTMLDivElement>(null);
  const { title, subtitle, options } = step1Config;

  return (
    <div
      className={'md:pb-16'}
      ref={ref}
    >
      <StepHeader
        title={title}
        subtitle={subtitle}
      />

      <div className={'max-md:pt-8'}>
        <Radios
          options={options}
          setSelectedOption={setStepOneAnswer}
        />
      </div>
    </div>
  );
}
