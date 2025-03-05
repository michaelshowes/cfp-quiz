import Radios from '@/components/Radios';

import StepHeader from '../StepHeader';
import { step1Config } from './step1.config';

export default function Step1() {
  const { title, subtitle, options } = step1Config;

  return (
    <div className={'pb-16'}>
      <StepHeader
        title={title}
        subtitle={subtitle}
      />

      <div className={'pt-12'}>
        <Radios options={options} />
      </div>
    </div>
  );
}
