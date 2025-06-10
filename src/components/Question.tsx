import SyntaxHighlighter from 'react-syntax-highlighter'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { gruvboxDark } from 'react-syntax-highlighter/dist/styles'
import type { Question as QuestionType } from '../types/types'

interface Props {
  info: QuestionType
}

export const Question = ({ info }: Props) => {
  return (
    <article className='flex flex-col gap-5 bg-[#FAFAFA] p-7 rounded-2xl my-10'>
      <header>
        <h2 className='text-2xl font-semibold text-center'>{info.question}</h2>
      </header>
      <SyntaxHighlighter language='javascript' style={gruvboxDark} className='rounded-lg'>
        {info.code}
      </SyntaxHighlighter>
      <div>
        <ul>
          {info.answers.map((answer, i) => (
            <li key={i}>{answer}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
