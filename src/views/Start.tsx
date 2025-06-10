import { useQuestionStore } from '../store/useQuestionsStore'

export const Start = () => {
  const getQuestions = useQuestionStore((state) => state.getQuestions)

  const onClickStart = () => {
    getQuestions(5)
  }

  return (
    <div className='bg-[#FFBF21] flex flex-col justify-center items-center h-full gap-10 text-[#0A0A0A] text-center'>
      <header>
        <h1 className='font-bold text-5xl'>JavaScript Quiz</h1>
      </header>
      <main>
        <button
          className='bg-[#0A0A0A] rounded-md py-2 px-3 font-semibold text-[#FFBF21] cursor-pointer'
          onClick={onClickStart}
        >
          Comenzar ahora
        </button>
      </main>
    </div>
  )
}
