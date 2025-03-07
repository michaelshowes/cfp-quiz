import { create } from 'zustand';

const useStore = create((set) => ({
  steps: [],
  answers: {}, // Object to store answers with question IDs as keys
  addAnswer: (questionId, answer) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answer
      }
    }))
}));
