import { useContext } from "react";
import { quizContext } from "./App";
import "./Quiz.css";

function Result() {
  const { user, score } = useContext(quizContext);

  return (
    <div className="result-container">
      <h1>Quiz Completed!</h1>
      <p>Great job, {user}! Here is your result.</p>

      <div className="score-display">
        <span className="score">
          {score} / 5
        </span>
        <p>Your final score</p>
      </div>
    </div>
  );
}

export default Result;