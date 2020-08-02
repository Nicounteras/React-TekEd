import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function PresentQuintoEjercicios() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Present simple exercises</h4>
            <p className="pOfQuizzes">Do your best!</p>
            <FlashCardList flashcards = {flashcards}/>    
            <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ingles/present-simple">Ver artículo</Link>
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
    question: "What ____ she likes",
    answer: "Does",
    options: [
      "a) Do",
      "b) Doing",
      "c) Does",
    ],
    explanation: "Does goes for 3rd person"
  },
  {
    id: 2,
    question: "My brother _____ play tennis",
    answer: "Doesn't",
    options: [
      "a) Don't",
      "b) Doesn't",
    ],
    explanation: "Doesn't goes for 3rd person"
  },
  {
    id: 3,
    question: "We often ____ grandpa!",
    answer: "Visit",
    options: [
      "a) Visit",
      "b) Visits",
    ],
    explanation: "In this case, the answer is visit"
  },
  {
    id: 4,
    question: "Sometimes we ____ out",
    answer: "Go",
    options: [
      "a) Go",
      "b) Goes",
    ],
    explanation: "In this case, the answer is go"
  },
  {
    id: 5,
    question: "Where do/does she come from?",
    answer: "Does",
    options: [
      "a) Do",
      "b) Does",
    ],
    explanation: "Does goes for 3rd person"
  },
  {
    id: 6,
    question: "___ you feeling good?",
    answer: "Are",
    options: [
      "a) Are",
      "b) Is",
    ],
    explanation: "Are goes for 2nd person"
  },
  {
    id: 7,
    question: "He _____ our pizza!",
    answer: "Preferes",
    options: [
      "a) Prefering",
      "b) Preferes",
    ],
    explanation: "Preferes"
  },
  {
    id: 8,
    question: "I ____ watch TV!",
    answer: "Don't",
    options: [
      "a) Don't",
      "b) Doesn't",
    ],
    explanation: "Don't goes for 1st person"
  },
  {
    id: 9,
    question: "John ____ in Brazil",
    answer: "Lives",
    options: [
      "a) Lives",
      "b) Living",
    ],
    explanation: "The sentence needs a verb in present simple"
  },
  {
    id: 10,
    question: "They eating/eat a lot!",
    answer: "Eat",
    options: [
      "a) Eat",
      "b) Eating",
    ],
    explanation: "The sentence needs a verb in present simple"
  },
  {
    id: 11,
    question: "We ___ the homework",
    answer: "Do",
    options: [
      "a) Does",
      "b) Do",
    ],
    explanation: "In this case, the answer is do"
  },
  {
    id: 12,
    question: "We ____ to the cinema",
    answer: "Go",
    options: [
      "a) Going",
      "b) Go",
    ],
    explanation: "The sentence needs a verb in present simple"
  },
]


export default PresentQuintoEjercicios


