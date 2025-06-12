import SyntaxHighlighter from 'react-syntax-highlighter'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { gruvboxDark } from 'react-syntax-highlighter/dist/styles'
import type { Question as QuestionType } from '../types/types'
import { useQuestionStore } from '../store/useQuestionsStore'

interface Props {
  info: QuestionType
}

const getBackgroundColor = (info: QuestionType, answerIndex: number) => {
  const { userSelectedAnswer, correctAnswer } = info

  if (userSelectedAnswer == null) return 'bg-transparent'
  if (answerIndex === correctAnswer) return 'bg-[#17B990] border-green-700 text-white'
  if (answerIndex === userSelectedAnswer) return 'bg-red-400 border-red-500 text-white'

  return 'bg-transparent'
}

export const Question = ({ info }: Props) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer)

  const onSelectAnswer = (answerId: number) => {
    selectAnswer(info.id, answerId)
  }

  return (
    <article className='flex flex-col gap-5 bg-[#FAFAFA] p-7 rounded-2xl my-10 shadow-lg'>
      <header>
        <h2 className='text-2xl font-semibold text-center'>{info.question}</h2>
      </header>
      <SyntaxHighlighter language='javascript' style={gruvboxDark} wrapLines className='rounded-lg'>
        {info.code}
      </SyntaxHighlighter>
      <div className='flex flex-col gap-2'>
        {info.answers.map((answer, i) => (
          <button
            key={i}
            className={`${getBackgroundColor(
              info,
              i
            )} border border-gray-400 rounded-md p-2 font-semibold px-3 ${
              info.userSelectedAnswer !== undefined ? '' : 'hover:bg-gray-200 cursor-pointer'
            }`}
            onClick={() => onSelectAnswer(i)}
            disabled={info.userSelectedAnswer !== undefined}
          >
            {answer}
          </button>
        ))}
      </div>
    </article>
  )
}
