import { useQuestionsData } from '../hooks/useQuestionsData'
import { useQuestionStore } from '../store/useQuestionsStore'
import TrophyGold from '../assets/trophy-gold.svg'
import TrophySilver from '../assets/trophy-silver.svg'
import TrophyBronze from '../assets/trophy-bronze.svg'
import confetti from 'canvas-confetti'

const getResultData = (score: number) => {
  if (score >= 80) {
    confetti()
    return {
      trophy: TrophyGold,
      title: '¡Increíble!',
      color: '#FFBF21',
    }
  } else if (score >= 50) {
    confetti()
    return {
      trophy: TrophySilver,
      title: '¡Buen trabajo!',
      color: '#A9A9A9',
    }
  } else {
    return {
      trophy: TrophyBronze,
      title: 'Sigue practicando',
      color: '#DC962C',
    }
  }
}

export const Score = () => {
  const { correct, totalQuestions } = useQuestionsData()
  const resetGame = useQuestionStore((state) => state.resetGame)

  const score = (correct * 100) / totalQuestions
  const { trophy, title, color } = getResultData(score)

  const onPlayAgain = () => {
    resetGame()
  }

  return (
    <div
      className={`bg-gradient-to-t from-[${color}] to-[${color}]/10 flex flex-col justify-center items-center h-full gap-15 text-[#0A0A0A] text-center px-3`}
    >
      <main className='flex flex-col gap-8 justify-center items-center'>
        <img src={trophy} alt='Trofeo' className='w-50 -z-10 m-auto inset-0' />
        <div>
          <h1 className='font-bold text-4xl text-gray-800'>{title}</h1>
          <p className='font-bold text-3xl text-gray-800 mt-3'>Tu puntaje es: {score}/100</p>
        </div>
        <button
          className='group bg-[#0A0A0A] rounded-md py-3 px-4 font-semibold text-white cursor-pointer flex gap-2'
          onClick={onPlayAgain}
        >
          Jugar otra vez
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-0 group-hover:size-6 transition-all duration-300'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
            />
          </svg>
        </button>
      </main>
    </div>
  )
}
