import { useContext, useEffect, useRef } from "react"
import { quizContext } from "./App"
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

function Home() {

  const { user, setUser } = useContext(quizContext);
  const userRef = useRef()
  const navigate = useNavigate();


  function startGame() {

    if (user) {
    navigate("/quiz");
    }else {
      alert ("Enter valid input")
    }

  }



return (
  <div className="home-container">
    <h1>Welcome to Quiz App</h1>
    <p>Test your knowledge and see how much you know.</p>

    <input
      value={user}
      onChange={(e) => setUser(e.target.value)}
      type="text"
      placeholder="Enter your username"
    />

    <button onClick={startGame}>Start Quiz →</button>
  </div>
);
}

export default Home