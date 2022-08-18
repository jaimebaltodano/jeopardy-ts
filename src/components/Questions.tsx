import Question from "./Question";
import { Question as QuestionType } from "jeopardy";

interface QuestionsProps {
  questions: Array<QuestionType>;
}
const Questions = ({ questions }: QuestionsProps) => {
  return (
    <div>
      {questions.map((question, _i) => (
        <Question key={`question-id-${_i}`} question={question} />
      ))}
    </div>
  );
};

export default Questions;
