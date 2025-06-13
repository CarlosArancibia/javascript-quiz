import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionStore } from '../store/useQuestionsStore'
import TrophyGold from '../assets/trophy-gold.svg'

export const Score = () => {
  const { correct, totalQuestions } = useQuestionsData()
  const resetGame = useQuestionStore((state) => state.resetGame)

  const score = (correct * 100) / totalQuestions

  const onPlayAgain = () => {
    resetGame()
  }

  return (
    <div className='bg-gradient-to-t from-[#FFBF21] to-[#F7DF1E]/10 flex flex-col justify-center items-center h-full gap-15 text-[#0A0A0A] text-center px-3'>
      <main className='flex flex-col gap-8 justify-center items-center'>
        <img src={TrophyGold} alt='trophy gold' className='w-50 -z-10 m-auto inset-0' />
        <div>
          <h1 className='font-bold text-4xl text-gray-800'>¡Increíble!</h1>
          <p className='font-bold text-3xl text-gray-800 mt-3'>Tu puntaje es: {score}/100</p>
        </div>
        <button
          className='bg-[#0A0A0A] rounded-md py-2 px-3 font-semibold text-[#FFBF21] cursor-pointer'
          onClick={onPlayAgain}
        >
          Jugar otra vez
        </button>
      </main>
    </div>
  )
}
