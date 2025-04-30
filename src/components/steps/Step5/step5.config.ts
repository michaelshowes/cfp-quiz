export type Step5Option = {
  id: string;
  text: string;
};

export type Step5Config = {
  title: string;
  subtitle?: string;
  options: Step5Option[];
  termsAndConditionsUrl: string;
};

export const step5Config: Step5Config = {
  title:
    'Would you like to find an advisor with a focus in any of these areas?',
  subtitle: 'Optional—only answer if it’s important to you.',
  options: [
    {
      id: 'step-5-1',
      text: 'Young Professionals'
    },
    {
      id: 'step-5-2',
      text: 'Intergenerational Families'
    },
    {
      id: 'step-5-3',
      text: 'Retirees'
    },
    {
      id: 'step-5-4',
      text: 'Veterans'
    },
    {
      id: 'step-5-5',
      text: 'Governments Employees and Military Service people'
    },
    {
      id: 'step-5-6',
      text: 'Widows/Widowers'
    },
    {
      id: 'step-5-7',
      text: 'LGBTQ+ Individuals/Couples'
    },
    {
      id: 'step-5-8',
      text: 'Faith-Based Investing'
    },
    {
      id: 'step-5-9',
      text: 'Special Needs Individuals'
    }
  ],
  termsAndConditionsUrl: '#'
};
