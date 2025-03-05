export type Step1Config = {
  title: string;
  subtitle?: string;
  options: {
    id: string;
    text: string;
  }[];
};

export const step1Config: Step1Config = {
  title: 'How would you describe your financial planning journey?',
  subtitle:
    'Your answer helps us show the best options, but you can adjust this later.',
  options: [
    {
      id: 'step-1-1',
      text: 'I’m just getting started'
    },
    {
      id: 'step-1-2',
      text: 'I’ve been managing my own investments'
    },
    {
      id: 'step-1-3',
      text: 'I’ve worked with an advisor before'
    },
    {
      id: 'step-1-4',
      text: 'I have an advisor but might switch'
    },
    {
      id: 'step-1-5',
      text: 'Other'
    }
  ]
};
