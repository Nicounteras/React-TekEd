import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function TimeQuintoEjercicios() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<div className="buttonDivTo">
<Link to="/aprende/quinto-grado/ingles/time" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
</div>
<Rail/>
  <div className="elMeroMero">  
  <div className="blockN1">
            <h4>Time exercises</h4>
            <p className="pOfQuizzes">Do your best!</p>
            <FlashCardList flashcards = {flashcards}/>    
            {/* <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ingles/grammar">Ver artículo</Link>
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
    question: "Eight o' Clock AM",
    answer: "8:00",
    options: [
      "a) 8:00",
      "b) 8:10",
      "c) 8:20",
    ],
    explanation: ""
  },
  {
    id: 2,
    question: "Nine fifteen AM",
    answer: "9:15",
    options: [
      "a) 9:20",
      "b) 9:05",
      "c) 9:15",
    ],
    explanation: ""
  },
  {
    id: 3,
    question: "Ten fifty AM",
    answer: "10:50",
    options: [
      "a) 11:50",
      "b) 10:50",
      "c) 10:45",
    ],
    explanation: ""
  },
  {
    id: 4,
    question: "Four thirty AM",
    answer: "4:30",
    options: [
      "a) 4:30",
      "b) 4:20",
      "c) 3:30",
    ],
    explanation: ""
  },
  {
    id: 5,
    question: "Nine Fifteen PM",
    answer: "21:15",
    options: [
      "a) 9:15",
      "b) 21:15",
      "c) 23:15",
    ],
    explanation: ""
  },
  {
    id: 6,
    question: "Four twenty PM",
    answer: "4:20",
    options: [
      "a) 4:20",
      "b) 3:30",
      "c) 16:20",
    ],
    explanation: ""
  },
  {
    id: 7,
    question: "Eleven fourty PM",
    answer: "23:40",
    options: [
      "a) 23:40",
      "b) 11:30",
      "c) 11:40",
    ],
    explanation: ""
  },
  {
    id: 8,
    question: "Five Twenty AM",
    answer: "5:20",
    options: [
      "a) 5:10",
      "b) 5:20",
      "c) 17:20",
    ],
    explanation: ""
  },
  {
    id: 9,
    question: "Eight o' clock PM",
    answer: "20:00",
    options: [
      "a) 8:00",
      "b) 8:10",
      "c) 20:00",
    ],
    explanation: ""
  },
  {
    id: 10,
    question: "Six o' clock AM",
    answer: "6:00",
    options: [
      "a) 18:00",
      "b) 6:00",
      "c) 6:00",
    ],
    explanation: ""
  },
  {
    id: 11,
    question: "Four fourteen PM",
    answer: "16:14",
    options: [
      "a) 4:14",
      "b) 16:14",
      "c) 4:14",
    ],
    explanation: ""
  },
  {
    id: 12,
    question: "12 fourty four AM",
    answer: "00:44",
    options: [
      "a) 00:14",
      "b) 12:14",
      "c) 00:44",
    ],
    explanation: ""
  },
]


export default TimeQuintoEjercicios


