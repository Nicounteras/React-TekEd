import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function RestasQuintoEj() {
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
            <h4>Ejercicios de restas</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>    
           {/*  <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/matematica/restas">Ver artículo</Link>
            <a href="https://www.youtube.com/watch?v=S8ACLQs-Bz4" target="blank" className="cool-link ex-btn">Ver Vídeo</a>
            <Link className="cool-link start-btn" to="/quizzes/quinto-grado/matematica/restas">Tomar quiz</Link>  
              </div>  */}      
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "200455 - 78292",
    answer: "122163",
    options: [
      "a) 122163",
      "b) 122162",
      "c) 132163",
      "d) 14232"
    ],
    explanation: ""
  },
  {
    id: 2,
    question: "504873 - 27252",
    answer: "231929",
    options: [
      "a) 231929",
      "b) 231919",
      "c) 231939",
      "d) 231949"
    ],
    explanation: ""
  },
  {
    id: 3,
    question: "843520 - 54819",
    answer: "788709",
    options: [
      "a) 788702",
      "b) 7887010",
      "c) 788709",
      "d) 788710"
    ],
    explanation: ""
  },
  {
    id: 4,
    question: "1008352 - 922971",
    answer: "85381",
    options: [
      "a) 85381",
      "b) 85382",
      "c) 85383",
      "d) 85384"
    ],
    explanation: ""
  },
  {
    id: 5,
    question: "883576 - 92234",
    answer: "791342",
    options: [
      "a) 791949",
      "b) 791942",
      "c) 791941",
      "d) 791342"
    ],
    explanation: ""
  },
  {
    id: 6,
    question: "2144780 - 1133911",
    answer: "1010869",
    options: [
      "a) 1010869",
      "b) 1010819",
      "c) 1010829",
      "d) 1010849"
    ],
    explanation: ""
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


export default RestasQuintoEj


