import Category from "./Category";
import { jeopardyCategories } from "../mocks";
import styles from "./styles.module.css"

const Game = () => {
  return <div className={styles.game}>{
    jeopardyCategories.map((category, _i) => (
    <Category key={`category-id-${_i}`} questions={category.questions} title={category.genre} />
    ))
  } 
  </div>
};

export default Game;
