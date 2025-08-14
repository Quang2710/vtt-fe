import { create } from "zustand";

export type Question = { id: number; name: string };

// Thêm kiểu AnswerValue
export type AnswerValue = string | { answer: string; fileUrl: string };

type FundraiseState = {
    questions: Question[];
    setQuestions: (questions: Question[]) => void;
    answers: { [questionId: number]: AnswerValue }; 
    setAnswer: (questionId: number, answer: AnswerValue) => void; 
};

function getInitialAnswers() {
    if (typeof window !== "undefined" && localStorage.getItem("fundraiseAnswers")) {
        return JSON.parse(localStorage.getItem("fundraiseAnswers") as string);
    }
    return {};
}

export const useFundraiseStore = create<FundraiseState>((set) => ({
    questions:
        typeof window !== "undefined" && localStorage.getItem("fundraiseQuestions")
            ? JSON.parse(localStorage.getItem("fundraiseQuestions") as string)
            : [],
    setQuestions: (questions) => {
        set({ questions });
        if (typeof window !== "undefined") {
            localStorage.setItem("fundraiseQuestions", JSON.stringify(questions));
        }
    },
    answers: getInitialAnswers(),
    setAnswer: (questionId, answer) =>
        set((state) => {
            const newAnswers = { ...state.answers, [questionId]: answer };
            if (typeof window !== "undefined") {
                localStorage.setItem("fundraiseAnswers", JSON.stringify(newAnswers));
            }
            return { answers: newAnswers };
        }),
}));