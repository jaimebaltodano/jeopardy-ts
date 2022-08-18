declare module "jeopardy" {
  type levels = "easy" | "medium" | "hard";

  type Question = {
    question: string;
    answers: Array<string>;
    level: levels;
    correct: string;
  };

  type Category = {
    genre: string;
    questions: Array<Question>;
  };
}

module.exports={
  Category,
  Question,
  levels
}