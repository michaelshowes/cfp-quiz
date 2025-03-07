import { useState } from 'react';

import Checkboxes from '@/components/Checkboxes';
import { Checkbox } from '@/components/ui/checkbox';

import StepHeader from '../StepHeader';
import { step5Config } from './step5.config';

export default function Step5() {
  const [selectedOptions, setSelectedOptions] = useState<string[] | null>(null);
  const { title, subtitle } = step5Config;

  console.log(selectedOptions);

  return (
    <div className={'pb-16'}>
      <StepHeader
        title={title}
        subtitle={subtitle}
      />

      <div className={'pt-12'}>
        <Checkboxes
          options={step5Config.options}
          setSelectedOptions={setSelectedOptions}
        />
      </div>
      <div className={'border-t-border mt-7 border-t pt-7'}>
        <div className='flex items-center gap-4'>
          <Checkbox
            id={'terms'}
            className={'border-blue size-4.5 rounded-none'}
          />
          <label
            htmlFor={'terms'}
            className={'text-md cursor-pointer'}
          >
            I agree to{' '}
            <a
              href={'#'}
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
