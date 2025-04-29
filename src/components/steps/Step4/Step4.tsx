import { useRef } from 'react';

import Radios from '@/components/Radios';
import { setStepFourAnswer } from '@/store';

import StepHeader from '../StepHeader';
import { step4Config } from './step4.config';

export default function Step4() {
  const ref = useRef<HTMLDivElement>(null);
  const { title, subtitle, options } = step4Config;

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
        <Radios
          options={options}
          setSelectedOption={setStepFourAnswer}
        />
      </div>
    </div>
  );
}
