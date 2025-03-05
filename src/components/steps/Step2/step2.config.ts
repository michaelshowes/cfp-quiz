export type Step2Config = {
  title: string;
  subtitle?: string;
  options: {
    id: string;
    text: string;
  }[];
  locationSearchLabel?: string;
};

export const step2Config: Step2Config = {
  title: 'How would you prefer to connect with your advisor?',
  subtitle:
    'Your answer helps us show the best options, but you can adjust this later.',
  options: [
    {
      id: 'step-2-1',
      text: 'I like to meet in person, so I need someone nearby'
    },
    {
      id: 'step-2-2',
      text: 'Video or phone work best for me—I’m open to advisors from anywhere'
    },
    {
      id: 'step-2-3',
      text: 'Not sure yet'
    }
  ],
  locationSearchLabel: 'Where are you located?'
};
