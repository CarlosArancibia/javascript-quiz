import { create } from 'zustand'
import type { Question } from '../types/types'

interface State {
  questions: Question[]
  currentQuestion: number
  getQuestions: (limit: number) => Promise<void>
}

export const useQuestionStore = create<State>((set) => ({
  questions: [],
  currentQuestion: 0,
  getQuestions: async (limit: number) => {
    const data = await fetch('http://localhost:5173/data.json')
    const json = await data.json()
    const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)

    console.log(questions)

    set({ questions })
  },
}))
