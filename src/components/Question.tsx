import { Question as QuestionType } from "jeopardy";
import styles from "./styles.module.css";

interface QuestionProps {
  question: QuestionType;
}
const Question = ({ question }: QuestionProps) => {
  const score =
    question.level === "easy" ? 100 : question.level === "medium" ? 200 : 300;
  return <div className={styles.card}>{score}</div>;
};

export default Question;
