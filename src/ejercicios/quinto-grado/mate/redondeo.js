import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function RedondeoQuintoEj() {
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
            <h4>Ejercicios de redondeo</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>     
            {/* <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/matematica/redondeo">Ver artículo</Link>
            <a href="" target="blank" className="cool-link ex-btn">Ver Vídeo</a>
            <Link className="cool-link start-btn" to="/quizzes/quinto-grado/matematica/redondeo">Tomar quiz</Link>  
              </div>  */} 
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "6828 a la decena",
    answer: "6830",
    options: [
      "a) 6830",
      "b) 6820",
    ],
    explanation: ""
  },
  {
    id: 2,
    question: "3803 a la decena",
    answer: "3800",
    options: [
      "a) 3800",
      "b) 3810",
    ],
    explanation: ""
  },
  {
    id: 3,
    question: "3725 a la centena",
    answer: "3700",
    options: [
      "a) 3700",
      "b) 3800",
    ],
    explanation: ""
  },
  {
    id: 4,
    question: "7997 a la decena",
    answer: "8000",
    options: [
      "a) 7990",
      "b) 8000",
    ],
    explanation: ""
  },
  {
    id: 5,
    question: "5668 a la centena",
    answer: "5700",
    options: [
      "a) 5600",
      "b) 5700",
    ],
    explanation: ""
  },
  {
    id: 6,
    question: "2314 a la decena",
    answer: "2310",
    options: [
      "a) 2320",
      "b) 2310",
    ],
    explanation: ""
  },
  {
    id: 7,
    question: "9491 a la decena",
    answer: "9490",
    options: [
      "a) 9490",
      "b) 9500",
    ],
    explanation: ""
  },
  {
    id: 8,
    question: "2083 a la centena",
    answer: "2000",
    options: [
      "a) 2000",
      "b) 2100",
    ],
    explanation: ""
  },
  {
    id: 9,
    question: "2811 al millar",
    answer: "3000",
    options: [
      "a) 2000",
      "b) 3000",
    ],
    explanation: ""
  },
  {
    id: 10,
    question: "1059 a la decena",
    answer: "1060",
    options: [
      "a) 1050",
      "b) 1060",
    ],
    explanation: ""
  },
  {
    id: 11,
    question: "1047 al millar",
    answer: "1000",
    options: [
      "a) 1000",
      "b) 2000",
    ],
    explanation: ""
  },
  {
    id: 12,
    question: "1041 a la centena",
    answer: "1000",
    options: [
      "a) 1000",
      "b) 2000",
    ],
    explanation: ""
  },
]


export default RedondeoQuintoEj

