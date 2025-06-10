import { Question } from '../components/Question'
import { useQuestionStore } from '../store/useQuestionsStore'

export const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)
  const questionInfo = questions[currentQuestion]

  return (
    <div className='h-full bg-gradient-to-t from-[#FFBF21] to-[#F7DF1E]/10'>
      <div className='max-w-[700px] m-auto'>
        <main className='mx-5'>
          <section>
            <header className='pt-10'>
              <p className='text-sm pb-2 font-semibold'>Pregunta 1 de 5</p>
              <div className='w-full h-3 bg-[#FFBF21]/40 rounded-full'>
                <div className='h-full bg-[#FFBF21] w-1/5 rounded-full'></div>
              </div>
            </header>
            <Question info={questionInfo} />
          </section>
        </main>
      </div>
    </div>
  )
}
