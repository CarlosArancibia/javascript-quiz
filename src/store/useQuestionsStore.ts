import { create } from 'zustand'
import type { Question } from '../types/types'

interface State {
  questions: Question[]
  currentQuestion: number
  getQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: string, answerIndex: number) => void
  goNextQuestion: () => void
  resetGame: () => void
}

export const useQuestionStore = create<State>((set, get) => ({
  questions: [],
  currentQuestion: 0,
  getQuestions: async (limit: number) => {
    const data = await fetch('/data.json')
    const json = await data.json()
    const questions = json.sort(() => Math.random() - 0.5).slice(0, limit)
    set({ questions })
  },
  selectAnswer: (questionId: string, answerIndex: number) => {
    const { questions } = get()
    const newQuestions = structuredClone(questions)
    const questionIndex = newQuestions.findIndex((q) => q.id === questionId)
    const questionInfo = newQuestions[questionIndex]

    const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

    newQuestions[questionIndex] = {
      ...questionInfo,
      userSelectedAnswer: answerIndex,
      isCorrectUserAnswer,
    }

    set({ questions: newQuestions })
  },
  goNextQuestion: () => {
    const { currentQuestion, questions } = get()
    const nextQuestion = currentQuestion + 1

    if (nextQuestion <= questions.length) set({ currentQuestion: nextQuestion })
  },
  resetGame: () => {
    set({ questions: [], currentQuestion: 0 })
  },
}))
