import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function VocabularyQuintoEjercicios() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<div className="buttonDivTo">
<Link to="/aprende/quinto-grado/ingles/vocabulary" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
</div>
<Rail/>
  <div className="elMeroMero">  
  <div className="blockN1">
            <h4>Vocabulary exercises</h4>
            <p className="pOfQuizzes">Do your best!</p>
            <FlashCardList flashcards = {flashcards}/>    
           {/*  <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ingles/grammar">Ver artículo</Link>
            <Link className="cool-link start-btn" to="/quizzes/quinto-grado/matematica/algebra">Tomar quiz</Link>  
              </div>    */}   
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "Rabbit",
    answer: "Bunny",
    options: [
      "a) Cat",
      "b) Lion",
      "c) Bunny",
    ],
  },
  {
    id: 2,
    question: "Ability",
    answer: "Skill",
    options: [
      "a) Skill",
      "b) Quality",
      "c) Talent",
    ],
  },
  {
    id: 3,
    question: "Below",
    answer: "Under",
    options: [
      "a) Under",
      "b) Above",
      "c) Next",
    ],
  },
  {
    id: 4,
    question: "Big",
    answer: "Large",
    options: [
      "a) Half",
      "b) Large",
      "c) Key",
    ],
  },
  {
    id: 5,
    question: "Sick",
    answer: "ill",
    options: [
      "a) Well",
      "b) Happy",
      "c) ill",
    ],
  },
  {
    id: 6,
    question: "Beginning",
    answer: "Start",
    options: [
      "a) End",
      "b) Start",
      "c) Band",
    ],
  },
  {
    id: 7,
    question: "Listen",
    answer: "Hear",
    options: [
      "a) Laugh",
      "b) Sing",
      "c) Hear",
    ],
  },
  {
    id: 8,
    question: "Smart",
    answer: "Intelligent",
    options: [
      "a) Hurt",
      "b) Intelligent",
      "c) Mute",
    ],
  },
  {
    id: 9,
    question: "Fast",
    answer: "Quick",
    options: [
      "a) Quick",
      "b) Slow",
      "c) Run",
    ],
  },
  {
    id: 10,
    question: "Strange",
    answer: "Odd",
    options: [
      "a) Normal",
      "b) Odd",
      "c) Good",
    ],
  },
  {
    id: 11,
    question: "Small",
    answer: "Tiny",
    options: [
      "a) Big",
      "b) Tiny",
      "c) Smart",
    ],
  }, 
  {
    id: 12,
    question: "Gigantic",
    answer: "Super big",
    options: [
      "a) Super big",
      "b) Gigabite",
      "c) Big",
    ],
  }, 
]


export default VocabularyQuintoEjercicios


