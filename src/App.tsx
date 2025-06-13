import { useQuestionStore } from './store/useQuestionsStore'
import { Game } from './views/Game'
import { Score } from './views/Score'
import { Start } from './views/Start'

function App() {
  const questions = useQuestionStore((state) => state.questions)
  const currentQuestion = useQuestionStore((state) => state.currentQuestion)

  const numQuestions = questions.length

  return (
    <div className='h-screen'>
      {numQuestions === 0 ? <Start /> : numQuestions === currentQuestion ? <Score /> : <Game />}
    </div>
  )
}

export default App
