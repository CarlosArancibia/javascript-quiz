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
          className='bg-[#0A0A0A] rounded-md py-2 px-3 font-semibold text-white cursor-pointer'
          onClick={onPlayAgain}
        >
          Jugar otra vez
        </button>
      </main>
    </div>
  )
}
