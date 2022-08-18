import GameScore from "./components/GameScore"
import Game from "./components/Game"
import styles from "./app.module.css"

function App() {
  return (
    <div className={styles["app-container"]}>
      <h1>Let's play Jeopardy</h1>
      <Game />
      <GameScore />
    </div>
  );
}

export default App;
