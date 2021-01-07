import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function DivisionesQuintoEj() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<div className="buttonDivTo">
<Link to="/aprende/sexto-grado/matematica/divisiones" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
</div>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ejercicios de divisiones</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>    
            <div className="threeButton">
            <Link className="cool-link start-btn" to="/aprende/sexto-grado/matematica/divisiones">Ver artículo</Link>
            <a href="https://www.youtube.com/watch?v=SyCS1V-5Uc4" target="blank" className="cool-link ex-btn">Ver Vídeo</a>
           {/*  <Link className="cool-link start-btn" to="/quizzes/sexto-grado/matematica/algebra">Tomar quiz</Link>   */}
              </div>     
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "4.3 / 2",
    answer: "2.15",
    options: [
      "a) 2.14",
      "b) 2.25",
      "c) 2.15",
      "d) 2.20"
    ],
  },
  {
    id: 2,
    question: "7.5 / 3",
    answer: "2.5",
    options: [
      "a) 2.4",
      "b) 2.5",
      "c) 2.6",
      "d) 2.7"
    ],
    explanation: ""
  },
  {
    id: 3,
    question: "5 / 2",
    answer: "2.5",
    options: [
      "a) 2.4",
      "b) 2.5",
      "c) 2.6",
      "d) 2.7"
    ],
  },
  {
    id: 4,
    question: "9 / 2",
    answer: "4.5",
    options: [
      "a) 4.4",
      "b) 4.8",
      "c) 4.3",
      "d) 4.5"
    ],
  },
  {
    id: 5,
    question: "9.3 / 3",
    answer: "3.1",
    options: [
      "a) 3.1",
      "b) 3.2",
      "c) 9.01",
      "d) 9.001"
    ],
  },
  {
    id: 6,
    question: "3.2 / 2",
    answer: "1.6",
    options: [
      "a) 1.6",
      "b) 1.8",
      "c) 1.9",
      "d) 2"
    ],
  },
  {
    id: 7,
    question: "16.55 / 2",
    answer: "8.275",
    options: [
      "a) 8.225",
      "b) 8.235",
      "c) 8.255",
      "d) 8.275"
    ],
  },
  {
    id: 8,
    question: "20 / 3",
    answer: "6.6666...",
    options: [
      "a) 6.6666...",
      "b) 7",
      "c) 6.7777...",
      "d) 6.5555..."
    ],
  },
  {
    id: 9,
    question: "30 / 4",
    answer: "7.5",
    options: [
      "a) 8",
      "b) 9.5",
      "c) 7.5",
      "d) 5"
    ],
  },
  {
    id: 10,
    question: "40 / 6",
    answer: "6.6666...",
    options: [
      "a) 6.5555",
      "b) 8",
      "c) 6.6666",
      "d) 7"
    ],
  },
  {
    id: 11,
    question: "42 / 4",
    answer: "10.5",
    options: [
      "a) 11.5",
      "b) 12.5",
      "c) 12",
      "d) 10.5"
    ],
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
  },
]


export default DivisionesQuintoEj

