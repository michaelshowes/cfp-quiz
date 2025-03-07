import { useState } from 'react';

import Radios from '@/components/Radios';

import StepHeader from '../StepHeader';
import { step4Config } from './step4.config';

export default function Step4() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { title, subtitle, options } = step4Config;

  return (
    <div className={'pb-16'}>
      <StepHeader
        title={title}
        subtitle={subtitle}
      />

      <div className={'pt-12'}>
        <Radios
          options={options}
          setSelectedOption={setSelectedOption}
        />
      </div>
    </div>
  );
}
