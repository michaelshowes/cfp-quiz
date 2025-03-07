import { JSX } from 'react';

import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import Step3 from './Step3/Step3';
import Step4 from './Step4/Step4';
import Step5 from './Step5/Step5';

type StepConfig = {
  step: number;
  component: JSX.Element;
};

export const stepConfig: StepConfig[] = [
  {
    step: 1,
    component: <Step1 />
  },
  {
    step: 2,
    component: <Step2 />
  },
  {
    step: 3,
    component: <Step3 />
  },
  {
    step: 4,
    component: <Step4 />
  },
  {
    step: 5,
    component: <Step5 />
  }
];
