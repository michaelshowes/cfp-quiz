import { useState } from 'react';

import LocationSearch from '@/components/LocationSearch';
import Radios from '@/components/Radios';

import StepHeader from '../StepHeader';
import { step2Config } from './step2.config';

export default function Step2() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { title, subtitle, options, locationSearchLabel } = step2Config;
  const locationOption = step2Config.options[0].text;
  const showLocationSearch = selectedOption === locationOption;

  console.log(selectedOption);

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
        {showLocationSearch && <LocationSearch label={locationSearchLabel} />}
      </div>
    </div>
  );
}
