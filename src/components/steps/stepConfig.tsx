import { lazy } from 'react';

const Step1 = lazy(() => import('./Step1/Step1'));
const Step2 = lazy(() => import('./Step2/Step2'));
const Step3 = lazy(() => import('./Step3/Step3'));
const Step4 = lazy(() => import('./Step4/Step4'));
const Step5 = lazy(() => import('./Step5/Step5'));

type StepConfig = {
  step: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
};

export const stepConfig: StepConfig[] = [
  {
    step: 1,
    component: Step1
  },
  {
    step: 2,
    component: Step2
  },
  {
    step: 3,
    component: Step3
  },
  {
    step: 4,
    component: Step4
  },
  {
    step: 5,
    component: Step5
  }
];
