import { useRef } from 'react';

import LocationSearch from '@/components/LocationSearch';
import Radios from '@/components/Radios';
import { cn } from '@/lib/utils';
import { setStepTwoAnswer, useQuizStore } from '@/store';

import StepHeader from '../StepHeader';
import { step2Config } from './step2.config';

export default function Step2() {
  const ref = useRef<HTMLDivElement>(null);
  const { title, subtitle, options, locationSearchLabel } = step2Config;
  const locationOption = step2Config.options[0].text;
  const { stepTwo } = useQuizStore();
  const showLocationSearch = stepTwo.answer === locationOption;

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
          setSelectedOption={(option: string) =>
            setStepTwoAnswer((prev) => ({ ...prev, answer: option }))
          }
        />
        {showLocationSearch && (
          <div className={cn('transition-all duration-500')}>
            <LocationSearch label={locationSearchLabel} />
          </div>
        )}
      </div>
    </div>
  );
}
