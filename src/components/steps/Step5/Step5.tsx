import { useRef } from 'react';

import Checkboxes from '@/components/Checkboxes';
import { Checkbox } from '@/components/ui/checkbox';
import { setAgreeToTerms, setStepFiveAnswer, useQuizStore } from '@/store';

import StepHeader from '../StepHeader';
import { step5Config } from './step5.config';

export default function Step5() {
  const ref = useRef<HTMLDivElement>(null);
  const { title, subtitle } = step5Config;
  const { agreeToTerms } = useQuizStore();

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
        <Checkboxes
          options={step5Config.options}
          setSelectedOptions={setStepFiveAnswer}
        />
      </div>
      <div className={'border-t-border mt-7 border-t pt-7'}>
        <div className='flex items-center gap-4'>
          <Checkbox
            id={'terms'}
            className={'border-blue size-4.5 rounded-none'}
            checked={agreeToTerms}
            onCheckedChange={setAgreeToTerms}
          />
          <label
            htmlFor={'terms'}
            className={'text-md cursor-pointer'}
          >
            I agree to{' '}
            <a
              href={step5Config.termsAndConditionsUrl}
              className={'font-bold'}
            >
              Terms and Conditions
            </a>{' '}
            for the Find a Certified Financial Planner® Professional Search
          </label>
        </div>
      </div>
    </div>
  );
}
