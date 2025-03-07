import { JSX } from 'react';

import Budget from '@/components/icons/Budget';
import Debt from '@/components/icons/Debt';
import FinancialPlan from '@/components/icons/FinancialPlan';
import Insurance from '@/components/icons/Insurance';
import Investments from '@/components/icons/Investments';
import Legacy from '@/components/icons/Legacy';
import Retirement from '@/components/icons/Retirement';
import Taxes from '@/components/icons/Taxes';

export type Step3Option = {
  id: string;
  text: string;
  icon: JSX.Element;
};

export type Step3Config = {
  title: string;
  subtitle?: string;
  options: Step3Option[];
};

export const step3Config: Step3Config = {
  title: 'Let’s talk about financial goals. What’s on your mind?',
  subtitle: 'Pick as many as you’d like!',
  options: [
    {
      id: 'step-3-1',
      text: 'Saving for Retirement',
      icon: <Retirement />
    },
    {
      id: 'step-3-2',
      text: 'Creating a Full Financial Plan',
      icon: <FinancialPlan />
    },
    {
      id: 'step-3-3',
      text: 'Growing My Investments',
      icon: <Investments />
    },
    {
      id: 'step-3-4',
      text: 'Managing Taxes',
      icon: <Taxes />
    },
    {
      id: 'step-3-5',
      text: 'Leaving a Legacy',
      icon: <Legacy />
    },
    {
      id: 'step-3-6',
      text: 'Paying off Debt',
      icon: <Debt />
    },
    {
      id: 'step-3-7',
      text: 'Budgeting',
      icon: <Budget />
    },
    {
      id: 'step-3-8',
      text: 'Insurance Planning',
      icon: <Insurance />
    }
  ]
};
