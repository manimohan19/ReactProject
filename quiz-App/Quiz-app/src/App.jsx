import { createContext, useState } from 'react'
import './App.css'
import Home from './Home'
import Questions from './Questions'
import Result from './Result'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const quizContext = createContext()

function App() {
  const [user, setUser] = useState('')
  const [score, setScore] = useState(0)

  return (
    <quizContext.Provider value={{ user, setUser, score, setScore }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </quizContext.Provider>
  )
}

export default App