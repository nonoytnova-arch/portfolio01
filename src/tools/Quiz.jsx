import { useState } from "react";

const questions = [
  {
    question: "What is React?",
    answer: "library",
  },
  {
    question: "Who developed React?",
    answer: "facebook",
  },
];

function Quiz() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);

  const submit = () => {
    if (input.toLowerCase() === questions[index].answer) {
      setScore(score + 1);
    }
    setInput("");
    setIndex(index + 1);
  };

  if (index >= questions.length) {
    return (
      <div className="main">
        <h2>Quiz Finished</h2>
        <p>Score: {score}</p>
      </div>
    );
  }

  return (
    <div className="main">
      <h2>Quiz</h2>
      <p>{questions[index].question}</p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Quiz;
