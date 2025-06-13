import { useQuestionStore } from '../store/useQuestionsStore'

export const Header = () => {
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)
  const questions = useQuestionStore((state) => state.questions)

  return (
    <header>
      <p className='pb-2 font-semibold'>
        Pregunta {currentQuestion + 1} de {questions.length}
      </p>
      <div className='w-full h-3 bg-[#FFBF21]/40 rounded-full'>
        <div
          className={`h-full bg-[#FFBF21] w-${currentQuestion + 1}/${questions.length} rounded-full`}
        ></div>
      </div>
    </header>
  )
}
