import { useQuestionStore } from '../store/useQuestionsStore'

export const useQuestionsData = () => {
  const questions = useQuestionStore((state) => state.questions)

  let correct = 0,
    incorrect = 0

  questions.forEach((q) => {
    const { userSelectedAnswer, correctAnswer } = q

    if (userSelectedAnswer === correctAnswer) correct++
    else if (userSelectedAnswer !== undefined) incorrect++
  })

  return { correct, incorrect, totalQuestions: questions.length }
}
