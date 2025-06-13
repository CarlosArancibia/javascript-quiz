import { useQuestionStore } from '../store/useQuestionsStore'
import { ProgressBar } from './ProgressBar'

export const Header = () => {
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)
  const questions = useQuestionStore((state) => state.questions)

  return (
    <header>
      <p className='pb-2 font-semibold'>
        Pregunta {currentQuestion + 1} de {questions.length}
      </p>
      <ProgressBar current={currentQuestion + 1} total={questions.length} />
    </header>
  )
}
