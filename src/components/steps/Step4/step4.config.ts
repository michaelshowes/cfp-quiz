export type Step4Config = {
  title: string;
  subtitle?: string;
  options: {
    id: string;
    text: string;
  }[];
};

export const step4Config: Step4Config = {
  title: 'How much are you thinking about investing?',
  subtitle:
    'This is just an estimate of your investable assets—things like cash, stocks, bonds, mutual funds, variable annuities, and any money you have in IRAs or current or former employer defined benefit plans.',
  options: [
    {
      id: 'step-4-1',
      text: 'Not sure yet—I just want to make a plan '
    },
    {
      id: 'step-4-2',
      text: 'Under $100K'
    },
    {
      id: 'step-4-3',
      text: '$100K – $250K'
    },
    {
      id: 'step-4-4',
      text: '$250K – $500K'
    },
    {
      id: 'step-4-5',
      text: '$500K – $1M'
    },
    {
      id: 'step-4-6',
      text: '$1M – $5M'
    },
    {
      id: 'step-4-7',
      text: 'More than $5M '
    }
  ]
};
