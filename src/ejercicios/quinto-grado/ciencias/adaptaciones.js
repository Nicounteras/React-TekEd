import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardListC"

function AdaptacionesQuintoEj() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<Link to="/aprende/quinto-grado/ciencias/adaptaciones" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Adaptaciones</h4>
            <p className="pOfQuizzes">¡Pon a prueba tus conocimientos!</p>
            <FlashCardList flashcards = {flashcards}/>    
           {/*  <div className="threeButton">
            <Link className="cool-link go-btn" to="/aprende/quinto-grado/ciencias/adaptaciones">Ver artículo</Link>
              </div>  */}     
  </div>
  </div>
   </>
  )
} 

const FlashCards = [
  {
    id: 1,
    question: "La adaptación física se relaciona con el / la ...",
    answer: "Cuerpo",
    options: [
      "a) Cuerpo",
      "b) Cognición",
    ],
  },
  {
    id: 2,
    question: "La adaptación conductual se relaciona con el / la ...",
    answer: "Cognición",
    options: [
      "a) Cuerpo",
      "b) Cognición",
    ],
  },
  {
    id: 3,
    question: "La adaptación al frío es una ...",
    answer: "Adaptación física",
    options: [
      "a) Adaptación física",
      "b) Adaptación conductual",
    ],
  },
  {
    id: 4,
    question: "Andar en manada es una..",
    answer: "Adaptación conductual",
    options: [
      "a) Adaptación física",
      "b) Adaptación conductual",
    ],
  },
  {
    id: 5,
    question: "Una adaptación física permite...",
    answer: "Ambas son correctas",
    options: [
      "a) Adaptarse al clima",
      "b) Alimentación",
    ],
  },
  {
    id: 6,
    question: "Una adaptación conductual permite ...",
    answer: "Ambas son correctas",
    options: [
      "a) Acaparar territorio",
      "b) Juntarse en manada",
    ],
  },
  {
    id: 7,
    question: "Los humanos pueden adaptarse fisicamente",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 8,
    question: "Los humanos pueden adaptarse conductualmente",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 9,
    question: "Las plantas pueden adaptarse",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
]


export default AdaptacionesQuintoEj


