import Questions from "./Questions";
import {Question} from "jeopardy";
import styles from "./styles.module.css"

interface CategoryProps {
  title: string
  questions: Array<Question>
}
const Category = ({title, questions} : CategoryProps) => {
  return (
    <div className={styles["genre-column"]}>
      <div className={styles["genre-title"]}>
        {title}
      </div>
      <Questions questions={questions} />
    </div>
  )
}

export default Category