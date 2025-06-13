import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Question } from '../components/Question'
import { useQuestionStore } from '../store/useQuestionsStore'

export const Game = () => {
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)

  const questionInfo = questions[currentQuestion]

  return (
    <div className=' min-h-full bg-gradient-to-t from-[#FFBF21] to-[#F7DF1E]/10 '>
      <div className='max-w-[700px] m-auto'>
        <main className='mx-5 py-10'>
          <section>
            <Header />
            <Question info={questionInfo} />
            <Footer />
          </section>
        </main>
      </div>
    </div>
  )
}
