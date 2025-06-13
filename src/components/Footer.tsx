import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionStore } from '../store/useQuestionsStore'

export const Footer = () => {
  const goNextQuestion = useQuestionStore((state) => state.goNextQuestion)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)
  const questions = useQuestionStore((state) => state.questions)
  const { userSelectedAnswer } = questions[currentQuestion]

  const { correct, incorrect } = useQuestionsData()

  const onContinue = () => {
    goNextQuestion()
  }

  return (
    <footer className='flex justify-center flex-col sm:justify-between sm:flex-row items-center gap-5'>
      <div>
        <ul className='flex gap-3 font-semibold text-center'>
          <li>✅ {correct} correctas</li>
          <li>❌ {incorrect} incorrectas</li>
        </ul>
      </div>
      <button
        className='bg-[#0A0A0A] rounded-md text-white font-semibold p-2 cursor-pointer w-full sm:w-fit disabled:cursor-not-allowed disabled:opacity-70'
        onClick={onContinue}
        disabled={userSelectedAnswer === undefined}
      >
        Continuar
      </button>
    </footer>
  )
}
