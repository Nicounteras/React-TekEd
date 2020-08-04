import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import QuizCardList from "../../QuizCardList"
import QuizCard from '../../QuizCard'

function AlgebraQuizQuinto() {
  const [quizcards, setQuizcards] = useState(QuizCards)
  return (
   <>
<Nav/>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ejercicios de álgebra</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <QuizCardList quizcards = {quizcards}/>    
            <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/matematica/algebra">Ver artículo</Link>
            <a href="https://www.youtube.com/watch?v=SyCS1V-5Uc4" target="blank" className="cool-link ex-btn">Ver Vídeo</a>
            <Link className="cool-link start-btn" to="/ejercicios/quinto-grado/matematica/algebra">Ejercicios</Link>  
              </div>      
  </div>
  </div>
   </>
  )
} 

const QuizCards = [
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
  {
    id: 1,
    question: "X + 14 = 20",
    wrongOne: "19",
    wrongTwo: "20",
    wrongThree: "12",
    correct: "6",
    explanation: "20 - 14 = 6"
  },
]


export default AlgebraQuizQuinto


