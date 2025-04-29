import type { PlaceResult } from './google';

export type QuizStore = {
  currentStep: number;
  agreeToTerms: boolean;
  stepOne: {
    answer: string;
    answered: boolean;
  };
  stepTwo: {
    answer: string;
    location: PlaceResult | '';
    radius: number;
    answered: boolean;
  };
  stepThree: {
    answers: string[];
    answered: boolean;
  };
  stepFour: {
    answer: string;
    answered: boolean;
  };
  stepFive: {
    answers: string[];
    answered: boolean;
  };
};
