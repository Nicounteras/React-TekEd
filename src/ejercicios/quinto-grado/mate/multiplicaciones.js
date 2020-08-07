import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function MultiplicacionesQuintoEj() {
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
            <h4>Ejercicios de multiplicaciones</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>   
           {/*  <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/matematica/multiplicaciones">Ver artículo</Link>
            <a href="" target="blank" className="cool-link ex-btn">Ver Vídeo</a>
            <Link className="cool-link start-btn" to="/quizzes/quinto-grado/matematica/multiplicaciones">Tomar quiz</Link>  
              </div>   */}      
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "40 * 2 * 3",
    answer: "240",
    options: [
      "a) 240",
      "b) 245",
      "c) 235",
      "d) 239"
    ],
    explanation: "40 * 6 = 240"
  },
  {
    id: 2,
    question: "150 * 3.5",
    answer: "525",
    options: [
      "a) 10",
      "b) 525",
      "c) 524",
      "d) 530"
    ],
    explanation: "150 * 3.5 = 525"
  },
  {
    id: 3,
    question: "40 * 10",
    answer: "400",
    options: [
      "a) 400",
      "b) 30",
      "c) 4000",
      "d) 40.0"
    ],
    explanation: "10 * 40 = 400"
  },
  {
    id: 4,
    question: "30 * 30",
    answer: "900",
    options: [
      "a) 800",
      "b) 600",
      "c) 700",
      "d) 900"
    ],
    explanation: "900 / 30 = 30"
  },
  {
    id: 5,
    question: "68 * 2",
    answer: "136",
    options: [
      "a) 132",
      "b) 134",
      "c) 136",
      "d) 138"
    ],
    explanation: "136 / 2 = 68"
  },
  {
    id: 6,
    question: "50 * 5.5",
    answer: "275",
    options: [
      "a) 275",
      "b) 215",
      "c) 255",
      "d) 256"
    ],
    explanation: "275 / 50 = 5.5"
  },
  {
    id: 7,
    question: "300 * 4",
    answer: "1200",
    options: [
      "a) 1200",
      "b) 1300",
      "c) 1100",
      "d) 1250"
    ],
    explanation: "1200 / 4 = 300"
  },
  {
    id: 8,
    question: "59 * 4",
    answer: "236",
    options: [
      "a) 235",
      "b) 237",
      "c) 236",
      "d) 238"
    ],
    explanation: "60 * 4 - 4 = 236"
  },
  {
    id: 9,
    question: "4 * 5 * 3",
    answer: "60",
    options: [
      "a) 55",
      "b) 54",
      "c) 56",
      "d) 60"
    ],
    explanation: "15 * 4 = 60"
  },
  {
    id: 10,
    question: "40 * 3/12",
    answer: "10",
    options: [
      "a) 30",
      "b) 20",
      "c) 10",
      "d) 40"
    ],
    explanation: "40 / 4 = 10"
  },
  {
    id: 11,
    question: "80 * 50",
    answer: "5.5",
    options: [
      "a) 4000",
      "b) 3000",
      "c) 4800",
      "d) 4200"
    ],
    explanation: "40 * 100 = 4000"
  },
  {
    id: 12,
    question: "20 * 25",
    answer: "0",
    options: [
      "a) 450",
      "b) 500",
      "c) 480",
      "d) 505"
    ],
    explanation: ""
  },
]


export default MultiplicacionesQuintoEj


