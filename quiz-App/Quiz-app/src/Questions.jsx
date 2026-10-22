import React, { useContext, useState } from 'react'
import questions from './assets/questions.json'
import { useNavigate } from 'react-router-dom'
import { quizContext } from './App'
function Questions() {
  // console.log(questions[0]); 
   const { user, setUser } = useContext(quizContext);
  const navigate = useNavigate()
  const [crntQuestion, setCrntQuestion] = useState(0)
  const [option, setOption] = useState('')
const {score , setScore} = useContext(quizContext)
  function nextQuestion() {

    if(option == questions [crntQuestion].answer){
      setScore(score + 1)
    }
    setCrntQuestion(crntQuestion + 1)
  }

  function finishAll() {

    if(option == questions [crntQuestion].answer){
setScore (score + 1)
    }
    navigate ("/result")

  }
  return (
   <div className="quiz-container">
  <h2>Hi {user}, choose the correct option</h2>

  <p className="question-text">
    {questions[crntQuestion].prompt}
  </p>

  <div className="options-container">
    {["A", "B", "C", "D"].map((v) => (
      <button
        key={v}
        className={option === `option${v}` ? "selected" : ""}
        onClick={() => setOption(`option${v}`)}
      >
        {questions[crntQuestion][`option${v}`]}
      </button>
    ))}
  </div>

  <div className="quiz-actions">
    {crntQuestion === questions.length - 1 ? (
      <button onClick={finishAll}>Submit Quiz ✓</button>
    ) : (
      <button onClick={nextQuestion}>Next Question →</button>
    )}
  </div>
</div>
  )
}

export default Questions