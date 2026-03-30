import './App.css'
import Counter from './Counter'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import ScoreExercise from './ScoreExercise'

function App() {

  return (
    <>
      <h1>State Demo!</h1>
      {/* <Counter /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <ScoreExercise numPlayers={4} target={10} />
    </>
  )
}

export default App
