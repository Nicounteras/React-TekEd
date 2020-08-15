import React, { useState, useEffect, useRef, component } from 'react'
import { Link } from "react-router-dom"
import Nav from "./nav"
import Rail from "./rail"
import FlashCardList from "../../FlashCardListC"

function PuntosCardiQuintoEj() {
  const [flashcards, setFlashcards] = useState(FlashCards)
  return (
   <>
<Nav/>
<div className="buttonDivTo">
<Link to="/aprende/quinto-grado/personal-social/puntos-cardinales" className="goToOtherArticle cool-link">
  Leer el artículo
</Link>
</div>
<Rail/>
  <div className="elMeroMero">
  <div className="blockN1">
            <h4>Puntos cardinales</h4>
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
    question: "Los puntos cardinales están definidos por ...",
    answer: "El movimiento del sol",
    options: [
      "a) El movimiento del mar",
      "b) El movimiento del sol",
      "c) El movimiento de las partículas"
    ],
  },
  {
    id: 2,
    question: "El sol se esconde en el ...",
    answer: "Este",
    options: [
      "a) Este",
      "b) Oeste",
      "c) Norte", 
      "d) Sur"
    ],
  },
  {
    id: 3,
    question: "El sol sale en el ...",
    answer: "Oeste",
    options: [
      "a) Este",
      "b) Oeste",
      "c) Norte", 
      "d) Sur"
    ],
  },
  {
    id: 4,
    question: "La línea este-oeste denomina las cordenadas ...",
    answer: "Abscisas",
    options: [
      "a) Ordenadas",
      "b) Abscisas",
    ],
  },
  {
    id: 5,
    question: "La línea este-oeste denomina las cordenadas ...",
    answer: "Ordenadas",
    options: [
      "a) Ordenadas",
      "b) Abscisas",
    ],
  },
  {
    id: 6,
    question: "La línea que divide al mundo horizontalmente es la línea",
    answer: "Ecuatorial",
    options: [
      "a) Ecuatorial",
      "b) Colombiana",
      "c) Himalaya"
    ],
  },
  {
    id: 7,
    question: "Con los puntos cardinales puedes hallar un país en el mapa",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 8,
    question: "Los puntos cardinales te permiten determinar la locación de una isla",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
  },
  {
    id: 9,
    question: "Los puntos cardinales te permiten hallar tu locación",
    answer: "Verdadero",
    options: [
      "a) Verdadero",
      "b) Falso",
    ],
    explanation:""
  },
]


export default PuntosCardiQuintoEj


