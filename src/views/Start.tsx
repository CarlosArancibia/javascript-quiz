import { useQuestionStore } from '../store/useQuestionsStore'

const LIMIT_QUESTIONS = 5

export const Start = () => {
  const getQuestions = useQuestionStore((state) => state.getQuestions)

  const onClickStart = () => {
    getQuestions(LIMIT_QUESTIONS)
  }

  return (
    <div className='bg-[#FFBF21] flex flex-col justify-center items-center h-full gap-10 text-[#0A0A0A] text-center px-3'>
      <header>
        <h1 className='font-bold text-5xl'>JavaScript Quiz</h1>
      </header>
      <main>
        <button
          className='group bg-[#0A0A0A] rounded-md py-3 px-4 font-semibold text-[#FFBF21] flex items-center cursor-pointer'
          onClick={onClickStart}
        >
          Comenzar ahora
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-0 group-hover:size-6 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-all duration-300'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </main>
    </div>
  )
}
