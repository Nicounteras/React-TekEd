import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function AlgebraQuintoEj() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<Link to="/aprende/quinto-grado/matematica/algebra" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ejercicios de álgebra</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>    
            {/* <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/matematica/algebra">Ver artículo</Link>
            <a href="https://www.youtube.com/watch?v=SyCS1V-5Uc4" target="blank" className="cool-link ex-btn">Ver Vídeo</a>
            <Link className="cool-link start-btn" to="/quizzes/quinto-grado/matematica/algebra">Tomar quiz</Link>  
              </div>  */}     
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "X + 14 = 20",
    answer: "6",
    options: [
      "a) 6",
      "b) 19",
      "c) 10",
      "d) 17"
    ],
    explanation: "20 - 14 = 6"
  },
  {
    id: 2,
    question: "5 * x = 10",
    answer: "2",
    options: [
      "a) 10",
      "b) 40",
      "c) 2",
      "d) 19"
    ],
    explanation: "10 / 2 = 5"
  },
  {
    id: 3,
    question: "103 = 40 + x",
    answer: "63",
    options: [
      "a) 70",
      "b) 63",
      "c) 73",
      "d) 53"
    ],
    explanation: "103 - 63 = 40"
  },
  {
    id: 4,
    question: "100 = 32 + x",
    answer: "68",
    options: [
      "a) 68",
      "b) 69",
      "c) 67",
      "d) 70"
    ],
    explanation: "20 - 14 = 6"
  },
  {
    id: 5,
    question: "20 * x = 200",
    answer: "10",
    options: [
      "a) 10",
      "b) 40",
      "c) 2",
      "d) 19"
    ],
    explanation: "200 / 10 = 20"
  },
  {
    id: 6,
    question: "15 * x = 75",
    answer: "5",
    options: [
      "a) 75",
      "b) 15",
      "c) 5",
      "d) 6"
    ],
    explanation: "75 / 15 = 5"
  },
  {
    id: 7,
    question: "30 / 6 = x",
    answer: "5",
    options: [
      "a) 6",
      "b) 10",
      "c) 5",
      "d) 10"
    ],
    explanation: "6 * 5 = 30"
  },
  {
    id: 8,
    question: "10 / x = 100",
    answer: "0.1",
    options: [
      "a) 10",
      "b) 0.1",
      "c) 20",
      "d) 100"
    ],
    explanation: "100 * 0.1 = 10"
  },
  {
    id: 9,
    question: "x * 10 = 1700",
    answer: "170",
    options: [
      "a) 17",
      "b) 1.7",
      "c) 170",
      "d) 100"
    ],
    explanation: "1700 / 10 = 170"
  },
  {
    id: 10,
    question: "300 / x = 75",
    answer: "4",
    options: [
      "a) 4",
      "b) 4.5",
      "c) 3",
      "d) 6"
    ],
    explanation: "4 * 75 = 300"
  },
  {
    id: 11,
    question: "5 * x = 27.5",
    answer: "5.5",
    options: [
      "a) 5.5",
      "b) 5",
      "c) 6",
      "d) 6.5"
    ],
    explanation: "5.5 * 5 = 27.5"
  },
  {
    id: 12,
    question: "99 * x = 0",
    answer: "0",
    options: [
      "a) 0",
      "b) 10",
      "c) 99",
      "d) 95"
    ],
    explanation: "Multiplicación por 0 = 0"
  },
]


export default AlgebraQuintoEj


