import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function RomanosQuintoEj() {
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
            <h4>Números romanos</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>     
            {/* <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/matematica/numeros-romanos">Ver artículo</Link>
            <a href="" target="blank" className="cool-link ex-btn">Ver Vídeo</a>
            <Link className="cool-link start-btn" to="/quizzes/quinto-grado/matematica/numeros-romanos">Tomar quiz</Link>  
              </div>   */}
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "LV",
    answer: "55",
    options: [
      "a) 150",
      "b) 30",
      "c) 55",
    ],
    explanation: "L = 50, V = 5"
  },
  {
    id: 2,
    question: "DC",
    answer: "600",
    options: [
      "a) 150",
      "b) 600",
      "c) 1500",
    ],
    explanation: "D = 500, C = 100"
  },
  {
    id: 3,
    question: "LXX",
    answer: "70",
    options: [
      "a) 40",
      "b) 50",
      "c) 70",
    ],
    explanation: "L = 50, X = 10"
  },
  {
    id: 4,
    question: "LIX",
    answer: "59",
    options: [
      "a) 59",
      "b) 58",
      "c) 61",
    ],
    explanation: "L = 50, IX = 9"
  },
  {
    id: 5,
    question: "LVII",
    answer: "57",
    options: [
      "a) 58",
      "b) 48",
      "c) 57",
    ],
    explanation: "L = 50, VII = 7"
  },
  {
    id: 6,
    question: "XL",
    answer: "40",
    options: [
      "a) 40",
      "b) 60",
      "c) 55",
    ],
    explanation: "L = 50 - X = 10"
  },
  {
    id: 7,
    question: "MD",
    answer: "1500",
    options: [
      "a) 150",
      "b) 15",
      "c) 1500",
    ],
    explanation: "M = 1000, D = 500"
  },
  {
    id: 8,
    question: "MCD",
    answer: "1400",
    options: [
      "a) 10000",
      "b) 1600",
      "c) 1400",
    ],
    explanation: "M = 1000, CD = 400"
  },
  {
    id: 9,
    question: "XC",
    answer: "90",
    options: [
      "a) 101",
      "b) 90",
      "c) 99",
    ],
    explanation: "C = 100 - X = 10"
  },
  {
    id: 10,
    question: "CCC",
    answer: "300",
    options: [
      "a) 400",
      "b) 100",
      "c) 300",
    ],
    explanation: "C = 100 * 3 : 300"
  },
  {
    id: 11,
    question: "MMD",
    answer: "2500",
    options: [
      "a) 2500",
      "b) 2100",
      "c) 300",
    ],
    explanation: "M = 1000, D = 500"
  },
  {
    id: 12,
    question: "CDXC",
    answer: "490",
    options: [
      "a) 1000",
      "b) 4000",
      "c) 490",
    ],
    explanation: "CD = 400, XC = 90"
  },
]


export default RomanosQuintoEj

