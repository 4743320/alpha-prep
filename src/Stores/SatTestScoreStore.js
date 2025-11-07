// stores/satTest.store.js
import { create } from "zustand";

const useSatTestStore = create((set, get) => ({
  // ======= STATE =======

  // Currently active module
  currentModule: "english1", // can be: "english1", "english2", "math1", "math2"

  // Current question index within the active module
  currentIndex: 0,

  // Answers per module
  // Format: { english1: {0:'A',1:'B'}, english2: {}, math1:{}, math2:{} }
  answers: {
    english1: {},
    english2: {},
    math1: {},
    math2: {},
  },

  // Timer per module (in seconds)
  timeLeft: {
    english1: 600, // 10 minutes
    english2: 600,
    math1: 900,    // 15 minutes
    math2: 900,
  },

  // Optional: store scores per module
  scores: {
    english1: 0,
    english2: 0,
    math1: 0,
    math2: 0,
  },

  // ======= ACTIONS =======

  // Switch to a specific module
  setCurrentModule: (module) => set({ currentModule: module, currentIndex: 0 }),

  // Set current question index in active module
  setCurrentIndex: (index) => set({ currentIndex: index }),

  // Save answer for the current question in the current module
  saveAnswer: (option) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [state.currentModule]: {
          ...state.answers[state.currentModule],
          [state.currentIndex]: option,
        },
      },
    })),

  // Move to the next question
  nextQuestion: () => {
    const { currentIndex, currentModule } = get();
    set({ currentIndex: currentIndex + 1 });
  },

  // Move to the previous question
  prevQuestion: () => {
    const { currentIndex } = get();
    if (currentIndex > 0) set({ currentIndex: currentIndex - 1 });
  },

  // Decrement the timer for the current module
  decrementTimer: () =>
    set((state) => ({
      timeLeft: {
        ...state.timeLeft,
        [state.currentModule]: state.timeLeft[state.currentModule] - 1,
      },
    })),

  // Reset the current module (answers, timer, index)
  resetModule: () =>
    set((state) => ({
      currentIndex: 0,
      answers: {
        ...state.answers,
        [state.currentModule]: {},
      },
      timeLeft: {
        ...state.timeLeft,
        [state.currentModule]:
          state.currentModule.includes("english") ? 600 : 900,
      },
      scores: {
        ...state.scores,
        [state.currentModule]: 0,
      },
    })),

  // Calculate score for the current module given the questions
  calculateScore: (questions) => {
    const { currentModule, answers, scores } = get();
    let score = 0;
    const moduleAnswers = answers[currentModule] || {};

    questions.forEach((q, index) => {
      if (moduleAnswers[index] === q.answer) score++;
    });

    set({
      scores: {
        ...scores,
        [currentModule]: score,
      },
    });
  },
}));

export default useSatTestStore;
