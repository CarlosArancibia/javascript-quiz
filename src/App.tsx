import { useQuestionStore } from './store/useQuestionsStore'
import { Game } from './views/Game'
import { Start } from './views/Start'

function App() {
  const questions = useQuestionStore((state) => state.questions)

  return <div className='h-screen'>{questions.length === 0 ? <Start /> : <Game />}</div>
}

export default App
