import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardList"

function PastQuintoEjercicios() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<Link to="/aprende/quinto-grado/ingles/past-simple" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
<Rail/>
  <div className="elMeroMero">  
  <div className="blockN1">
            <h4>Past simple exercises</h4>
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
    question: "I ____ the game (start)",
    answer: "Started",
    options: [
      "a) Starting",
      "b) Starte",
      "c) Started",
    ],
  },
  {
    id: 2,
    question: " Yesterday I ____ a cake ",
    answer: "Baked",
    options: [
      "a) Baking",
      "b) Bake",
      "c) Baked",
    ],
  },
  {
    id: 3,
    question: " I ____ my friend to the park ",
    answer: "Followed",
    options: [
      "a) Follow",
      "b) Following",
      "c) Followed",
    ],
  },
  {
    id: 4,
    question: "She ____ on a Hollywood movie ",
    answer: "Acted",
    options: [
      "a) Acted",
      "b) Act",
      "c) Acting",
    ],
  },
  {
    id: 5,
    question: "He ____ the guitar on the campfire",
    answer: "Played",
    options: [
      "a) Played",
      "b) Plays",
      "c) Playing",
    ],
  },
  {
    id: 6,
    question: "Yesterday I ____ pizza",
    answer: "Ate",
    options: [
      "a) Eat",
      "b) Ate",
      "c) Eating",
    ],
  },
  {
    id: 7,
    question: "Oh no! He ____ in the pool",
    answer: "Fell",
    options: [
      "a) Fall",
      "b) Fell",
      "c) Falls",
    ],
  },
  {
    id: 8,
    question: "My dad ____ a new table",
    answer: "Built",
    options: [
      "a) Build",
      "b) Built",
      "c) Building",
    ],
  },
  {
    id: 9,
    question: "He ____ very fast",
    answer: "Drove",
    options: [
      "a) Drive",
      "b) Drove",
      "c) Driving",
    ],
  },
  {
    id: 10,
    question: "The rock ___ to the bottom of the lake",
    answer: "Sank",
    options: [
      "a) Sink",
      "b) Sinking",
      "c) Sank",
    ],
  },
  {
    id: 11,
    question: "Yesterday I _____ my bracelet",
    answer: "Lost",
    options: [
      "a) Lost",
      "b) Lose",
      "c) Losing",
    ],
  },
  {
    id: 12,
    question: "She ____ a whole book",
    answer: "Wrote",
    options: [
      "a) Wrote",
      "b) Write",
      "c) Writing",
    ],
  }, 
]


export default PastQuintoEjercicios


