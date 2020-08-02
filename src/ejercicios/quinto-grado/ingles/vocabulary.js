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
<Rail/>
  <div className="elMeroMero">  
  <div className="blockN1">
            <h4>Grammar exercises</h4>
            <p className="pOfQuizzes">Do your best!</p>
            <FlashCardList flashcards = {flashcards}/>    
            <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ingles/grammar">Ver artículo</Link>
            <Link className="cool-link start-btn" to="/quizzes/quinto-grado/matematica/algebra">Tomar quiz</Link>  
              </div>      
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: " I _____ french in the morning",
    answer: "Studied",
    options: [
      "a) Studied",
      "b) Study",
      "c) Am studying",
    ],
    explanation: "The sentence is in past tense"
  },
  {
    id: 2,
    question: " I am _____ my favorite song",
    answer: "Dancing",
    options: [
      "a) Danced",
      "b) Dancing",
      "c) Have danced",
    ],
    explanation: "The sentence is in present continious"
  },
  {
    id: 3,
    question: "Yesterday you were ____ so hard!",
    answer: "Studying",
    options: [
      "a) Studied",
      "b) Study",
      "c) Studying",
    ],
    explanation: "The sentence is in present continious"
  },
  {
    id: 4,
    question: "Yes!, we are _____ the dishes",
    answer: "Washing",
    options: [
      "a) Washing",
      "b) Wash",
      "c) Washed",
    ],
    explanation: "The sentence is in present continious"
  },
  {
    id: 5,
    question: "They _____ in a fun way",
    answer: "Todas",
    options: [
      "a) Learn",
      "b) Learned",
      "c) Are learning",
    ],
    explanation: "All terminologies can be used"
  },
  {
    id: 6,
    question: "Yesterday the weather ____ nice",
    answer: "Was",
    options: [
      "a) Is",
      "b) Isn't",
      "c) Was",
    ],
    explanation: "The sentence is in past tense"
  },
  {
    id: 7,
    question: "He ____ always late!",
    answer: "Is",
    options: [
      "a) Am",
      "b) Are",
      "c) Is",
    ],
    explanation: "Is goes for 3rd person"
  },
  {
    id: 8,
    question: "They ____ an astonishing work (past)!",
    answer: "Made",
    options: [
      "a) Make",
      "b) Doing",
      "c) Made",
    ],
    explanation: "The sentence is in past tense"
  },
  {
    id: 9,
    question: "He ____ our pizza!",
    answer: "Likes",
    options: [
      "a) Liking",
      "b) Will",
      "c) Likes",
    ],
    explanation: "The sentence is in present continious"
  },
  {
    id: 10,
    question: "This _____ a song from John",
    answer: "Is",
    options: [
      "a) Was",
      "b) Were",
      "c) Is",
    ],
    explanation: "Is goes for 3rd person"
  },
  {
    id: 11,
    question: "I never _____ a thing to change",
    answer: "Want",
    options: [
      "a) Doing",
      "b) Want",
      "c) Wanting",
    ],
    explanation: "The sentence is in present simple"
  },
  {
    id: 12,
    question: "You _____ strong",
    answer: "Are",
    options: [
      "a) Are",
      "b) Wasn't",
      "c) Is",
    ],
    explanation: "Are goes for 2nd person"
  },
]


export default VocabularyQuintoEjercicios


