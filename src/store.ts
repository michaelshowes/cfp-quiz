import { create } from 'zustand';

import { PlaceResult } from './types/google';
import { QuizStore } from './types/quiz';

export const useQuizStore = create<QuizStore>(() => ({
  currentStep: 1,
  agreeToTerms: false,
  stepOne: {
    answer: '',
    answered: false
  },
  stepTwo: {
    answer: '',
    location: {} as PlaceResult,
    radius: 5,
    answered: false
  },
  stepThree: {
    answers: [],
    answered: false
  },
  stepFour: {
    answer: '',
    answered: false
  },
  stepFive: {
    answers: [],
    answered: false
  }
}));

export const setCurrentStep = (step: number | ((prev: number) => number)) =>
  useQuizStore.setState((state) => ({
    ...state,
    currentStep: typeof step === 'function' ? step(state.currentStep) : step
  }));

export const setAgreeToTerms = (agree: boolean) =>
  useQuizStore.setState((state) => ({ ...state, agreeToTerms: agree }));

export const setStepOneAnswer = (answer: string) =>
  useQuizStore.setState((state) => ({
    ...state,
    stepOne: {
      answer,
      answered: true
    }
  }));

export const setStepTwoAnswer = (
  answer:
    | { answer: string; location: PlaceResult | ''; radius?: number }
    | ((prev: {
        answer: string;
        location: PlaceResult | '';
        radius: number;
      }) => {
        answer: string;
        location: PlaceResult | '';
        radius: number;
      })
) =>
  useQuizStore.setState((state) => ({
    ...state,
    stepTwo: {
      ...state.stepTwo,
      ...(typeof answer === 'function'
        ? answer({
            answer: state.stepTwo.answer,
            location: state.stepTwo.location,
            radius: state.stepTwo.radius
          })
        : {
            answer: answer.answer,
            location: answer.location,
            radius: answer.radius ?? state.stepTwo.radius
          }),
      answered: true
    }
  }));

export const setStepThreeAnswer = (
  answer: string[] | ((prev: string[]) => string[])
) =>
  useQuizStore.setState((state) => {
    const newAnswers =
      typeof answer === 'function' ? answer(state.stepThree.answers) : answer;
    return {
      ...state,
      stepThree: {
        answers: newAnswers,
        answered: newAnswers.length > 0
      }
    };
  });

export const setStepFourAnswer = (answer: string) =>
  useQuizStore.setState((state) => ({
    ...state,
    stepFour: {
      answer,
      answered: true
    }
  }));

export const setStepFiveAnswer = (
  answer: string[] | ((prev: string[]) => string[])
) =>
  useQuizStore.setState((state) => {
    const newAnswers =
      typeof answer === 'function' ? answer(state.stepFive.answers) : answer;
    return {
      ...state,
      stepFive: {
        answers: newAnswers,
        answered: newAnswers.length > 0
      }
    };
  });
