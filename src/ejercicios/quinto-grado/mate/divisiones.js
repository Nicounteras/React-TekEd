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
<Link to="/aprende/quinto-grado/matematica/algebra" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
</div>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Ejercicios de divisiones</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>   
            {/* <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/matematica/divisiones">Ver artículo</Link>
            <a href="" target="blank" className="cool-link ex-btn">Ver Vídeo</a>
            <Link className="cool-link start-btn" to="/quizzes/quinto-grado/matematica/divisiones">Tomar quiz</Link>  
              </div>    */}     
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "30 / 4",
    answer: "7.5",
    options: [
      "a) 7.5",
      "b) 10",
      "c) 11",
      "d) 12"
    ],
    explanation: "7.5 * 4 = 30"
  },
  {
    id: 2,
    question: "50/4",
    answer: "12.5",
    options: [
      "a) 12.5",
      "b) 12.4",
      "c) 13.4",
      "d) 13.5"
    ],
    explanation: "12.5 * 4 = 50"
  },
  {
    id: 3,
    question: "70/4",
    answer: "17.5",
    options: [
      "a) 17.5",
      "b) 17",
      "c) 9.5",
      "d) 18"
    ],
    explanation: "17.5 * 4 = 70"
  },
  {
    id: 4,
    question: "130/4",
    answer: "32.5",
    options: [
      "a) 30",
      "b) 31",
      "c) 32",
      "d) 32.5"
    ],
    explanation: "32.5 * 4 = 130"
  },
  {
    id: 5,
    question: "150/4",
    answer: "37.5",
    options: [
      "a) 34",
      "b) 36",
      "c) 37",
      "d) 37.5"
    ],
    explanation: "200 / 10 = 20"
  },
  {
    id: 6,
    question: "400/20",
    answer: "20",
    options: [
      "a) 25",
      "b) 22",
      "c) 20",
      "d) 21"
    ],
    explanation: "20 * 20 = 400"
  },
  {
    id: 7,
    question: "300/75",
    answer: "4",
    options: [
      "a) 6",
      "b) 4",
      "c) 5",
      "d) 10"
    ],
    explanation: "75 * 4 = 300"
  },
  {
    id: 8,
    question: "5/4",
    answer: "1.25",
    options: [
      "a) 1.25",
      "b) 1.2",
      "c) 1.35",
      "d) 1.3"
    ],
    explanation: "1.25 * 4 = 5"
  },
  {
    id: 9,
    question: "4/5",
    answer: "170",
    options: [
      "a) 0.8",
      "b) 0.75",
      "c) 0.9",
      "d) 0.85"
    ],
    explanation: "0.8 * 5 = 4"
  },
  {
    id: 10,
    question: "3/12",
    answer: "0.25",
    options: [
      "a) 0.3",
      "b) 0.2",
      "c) 0.25",
      "d) 0.40"
    ],
    explanation: "12 * 0.25 = 3"
  },
  {
    id: 11,
    question: "12/3",
    answer: "4",
    options: [
      "a) 10",
      "b) 20",
      "c) 4",
      "d) 5"
    ],
    explanation: "3 * 4 = 12"
  },
  {
    id: 12,
    question: "15/4",
    answer: "3.75",
    options: [
      "a) 3.75",
      "b) 3.6",
      "c) 3.8",
      "d) 3.9"
    ],
    explanation: "3.75 * 4 = 15"
  },
]


export default DivisionesQuintoEj


